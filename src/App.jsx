//imports for starting code
import { Routes, Route } from 'react-router-dom'

//imports for pages
import Home from './pages/Home'
import SignUp from './pages/signUp'
import SignIn from './pages/signIn'
import BuyerProfile from './pages/buyerProfile'
import SellerProfile from './pages/sellerProfile'
import BuyerSignUp from './components/buyerProfile/buyerSignUp'
import SellerSignUp from './components/sellerProfile/sellerSignup'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path='/login' element={<SignIn />} />
      <Route path='/buyerprofile' element={<BuyerProfile />} />
      <Route path='/sellerprofile' element={<SellerProfile />} />
      <Route path='/signup/buyer' element={<BuyerSignUp userType='buyer'/>} />
      <Route path='/signup/seller' element={<SellerSignUp userType='seller'/>} />
    </Routes>
  )
}

export default App
