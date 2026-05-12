import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { io } from 'socket.io-client';
import { QRCodeCanvas } from 'qrcode.react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const PollPage = () => {
  const { id } = useParams();
  const [poll, setPoll] = useState(null);
  const [loading, setLoading] = useState(true);
  const [voted, setVoted] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    // WebSocket connection (Feature 13)
    const newSocket = io();
    newSocket.emit('join-poll', id);

    // Fetch poll
    axios.get(`/api/polls/${id}`).then(res => {
      setPoll(res.data);
      setLoading(false);
    });

    // Real-time updates
    newSocket.on('poll-update', (updatedPoll) => {
      setPoll(updatedPoll);
    });

    return () => newSocket.close();
  }, [id]);

  const handleVote = async (optionIndex) => {
    try {
      await axios.post(`/api/polls/${id}/vote`, {
        optionIndex,
        name: poll.settings.requireName ? name : undefined
      });
      setVoted(true);
      // eslint-disable-next-line react-hooks/immutability
      document.cookie = `voted=${id}; max-age=86400`;
    } catch (error) {
      alert(error.response?.data?.error);
    }
  };

  if (loading) return <div className="flex justify-center items-center h-64">Loading...</div>;

  // Charts (Feature 16)
  const chartData = {
    labels: poll.options.map(o => o.text),
    datasets: [{
      data: poll.options.map(o => o.votes),
      backgroundColor: ['#8B5CF6', '#EC4899', '#10B981', '#F59E0B', '#3B82F6']
    }]
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Poll Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{poll.title}</h1>
        <div className="flex gap-4 justify-center items-center text-sm text-gray-600 mb-6">
          <span>{poll.totalVotes} votes</span>
          {poll.settings.deadline && <span>Closes: {new Date(poll.settings.deadline).toLocaleString()}</span>}
          {poll.isClosed && <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full">Closed</span>}
        </div>
        
        {/* QR Code (Feature 11) */}
        <div className="flex gap-4 justify-center">
          <QRCodeCanvas value={window.location.href} size={120} />
          <button 
            onClick={() => navigator.clipboard.writeText(window.location.href)}
            className="px-6 py-2 bg-blue-600 text-white rounded-xl"
          >
            📋 Copy Link
          </button>
        </div>
      </div>

      {/* Voting Section */}
      {!voted && !poll.isClosed && (
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {poll.settings.requireName && (
            <input
              type="text"
              placeholder="Your name (optional)"
              value={name}
              onChange={e => setName(e.target.value)}
              className="p-4 border rounded-xl w-full md:col-span-2"
            />
          )}
          
          {poll.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleVote(idx)}
              disabled={poll.settings.password && !poll.passwordEntered}
              className="p-8 border-2 rounded-2xl hover:shadow-xl transition-all hover:scale-105 bg-white"
            >
              <div className="font-bold text-xl mb-2">{option.text}</div>
              {option.image && <img src={option.image} alt="Option" className="w-full h-32 object-cover rounded-xl" />}
            </button>
          ))}
        </div>
      )}

      {/* Results Charts (Feature 16) */}
      {voted || poll.settings.showResults === 'always' && (
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Live Results</h3>
            <Pie data={chartData} options={{ responsive: true }} />
          </div>
          <div>
            <Bar data={chartData} options={{ responsive: true, indexAxis: 'y' }} />
          </div>
        </div>
      )}

      {/* Comments (Feature 15) */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6">Comments ({poll.comments.length})</h3>
        {poll.comments.map((comment, idx) => (
          <div key={idx} className="p-4 border-b">
            <div className="font-semibold">{comment.name}</div>
            <div>{comment.text}</div>
          </div>
        ))}
      </div>

      {/* Export (Feature 17) */}
      <div className="mt-8 text-center">
        <a 
          href={`/api/polls/${id}/export`}
          className="px-8 py-4 bg-green-600 text-white rounded-2xl font-bold"
          download
        >
          📊 Export CSV Data
        </a>
      </div>
    </div>
  );
};

export default PollPage;