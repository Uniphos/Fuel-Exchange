//imports for starting code
import { Routes, Route } from 'react-router-dom'

//imports for pages
import Home from './pages/Home'
import SignUp from './pages/signUp'
import SignIn from './pages/signIn'
import Profile from './pages/Profile'
import ProfileSignUp from './components/profileOptions/profileSignUp'



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path='/login' element={<SignIn />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/profileSignUp/:id" element={<ProfileSignUp />} />
    </Routes>
  )
}

export default App
