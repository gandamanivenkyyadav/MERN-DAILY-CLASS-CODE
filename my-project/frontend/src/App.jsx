import PollPage from './FrontEnd/Pages/PollPage'
import { AuthProvider } from './FrontEnd/AuthContext'

const App = () => {
  return (
    <AuthProvider>

      <PollPage/>
    </AuthProvider>
  )
}

export default App