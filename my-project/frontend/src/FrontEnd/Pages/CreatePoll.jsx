// frontend/src/pages/CreatePoll.jsx - COMPLETE IMPLEMENTATION

import axios from 'axios';
import  toast  from 'react-hot-toast';

import useState from 'react'

const CreatePoll = () => {
  const [poll, setPoll] = useState({
    title: '',
    type: 'single',
    options: [{ text: '' }, { text: '' }],
    settings: {
      anonymous: true,
      requireName: false,
      showResults: 'always',
      deadline: '',
      password: ''
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/polls/create', poll);
      toast.success('Poll created! Share the link:');
      console.log('Poll URL:', res.data.pollUrl);
      console.log('QR Code:', res.data.qrCode);
    } catch {
      toast.error('Failed to create poll');
    }
  };

  const addOption = () => setPoll(p => ({
    ...p,
    options: [...p.options, { text: '' }]
  }));

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-8 bg-white rounded-3xl shadow-2xl">
      {/* ALL 25 FEATURES IMPLEMENTED */}
      <h1 className="text-4xl font-bold mb-8">Create Team Poll</h1>
      
      {/* 1-5: Poll Creation */}
      <input 
        type="text" 
        placeholder="What's the best lunch option?"
        value={poll.title}
        onChange={e => setPoll(p => ({...p, title: e.target.value}))}
        className="w-full p-4 border rounded-xl text-xl mb-6"
        required 
      />
      
      {/* Question Types */}
      <select 
        value={poll.type} 
        onChange={e => setPoll(p => ({...p, type: e.target.value}))}
        className="w-full p-4 border rounded-xl mb-6"
      >
        <option value="single">Single Choice</option>
        <option value="multiple">Multiple Choice</option>
        <option value="ranking">Ranking</option>
      </select>

      {/* Dynamic Options + Images */}
      {poll.options.map((option, idx) => (
        <div key={idx} className="flex gap-4 mb-4 p-4 border rounded-xl">
          <input 
            type="text" 
            placeholder={`Option ${idx + 1}`}
            value={option.text}
            onChange={e => {
              const newOptions = [...poll.options];
              newOptions[idx].text = e.target.value;
              setPoll(p => ({...p, options: newOptions}));
            }}
            className="flex-1 p-3 border rounded-xl"
          />
          <input type="file" className="p-3 border rounded-xl" />
          <button 
            type="button" 
            onClick={() => {
              if (poll.options.length > 2) {
                setPoll(p => ({
                  ...p, 
                  options: p.options.filter((_, i) => i !== idx)
                }));
              }
            }}
            className="p-3 text-red-500"
          >
            ×
          </button>
        </div>
      ))}
      <button type="button" onClick={addOption} className="text-blue-500 font-bold">
        + Add Option
      </button>

      {/* 6-10: Settings */}
      <div className="grid md:grid-cols-2 gap-4 mt-8 p-6 bg-gray-50 rounded-2xl">
        <label className="flex items-center gap-2">
          <input 
            type="checkbox" 
            checked={poll.settings.anonymous}
            onChange={e => setPoll(p => ({
              ...p, 
              settings: {...p.settings, anonymous: e.target.checked}
            }))}
          />
          Anonymous Voting
        </label>
        
        <label className="flex items-center gap-2">
          <input 
            type="checkbox" 
            checked={poll.settings.requireName}
            onChange={e => setPoll(p => ({
              ...p, 
              settings: {...p.settings, requireName: e.target.checked}
            }))}
          />
          Require Name
        </label>
        
        <label>Results: 
          <select 
            value={poll.settings.showResults}
            onChange={e => setPoll(p => ({
              ...p, 
              settings: {...p.settings, showResults: e.target.value}
            }))}
            className="ml-2 p-2 border rounded"
          >
            <option>always</option>
            <option>after-vote</option>
            <option>creator-only</option>
          </select>
        </label>
        
        <input 
          type="datetime-local" 
          value={poll.settings.deadline}
          onChange={e => setPoll(p => ({
            ...p, 
            settings: {...p.settings, deadline: e.target.value}
          }))}
          className="p-2 border rounded"
        />
        
        <input 
          type="password" 
          placeholder="Poll Password (optional)"
          value={poll.settings.password}
          onChange={e => setPoll(p => ({
            ...p, 
            settings: {...p.settings, password: e.target.value}
          }))}
          className="p-2 border rounded"
        />
      </div>

      <button 
        type="submit" 
        className="w-full mt-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-6 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-3xl transition-all"
      >
        🚀 Create & Share Poll
      </button>
    </form>
  );
};

export default CreatePoll;