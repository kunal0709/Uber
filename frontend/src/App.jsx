import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
 import UserSignup from './pages/UserSignup'

import CaptainSignUp from './pages/CaptainSignup'
import Captainlogin from './pages/Captainlogin'

const App = () => {

  
  
  return (
    <div > 


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<UserLogin />} />
      <Route path="usersignup" element={<UserSignup/>}/>
     <Route path= "/captain-login" element={<Captainlogin/>}/>
        <Route path='/captain-signup' element={<CaptainSignUp />} />
      </Routes>









    </div>
  )
}

export default App


