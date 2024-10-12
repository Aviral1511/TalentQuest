import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import HomePage from './pages/HomePage'
import Jobs from './pages/Jobs'
import Browse from './pages/Browse'
import Profile from './pages/Profile'
import JobDescription from './pages/JobDescription'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/job/description/:id" element={<JobDescription />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
