import React from 'react'
import { useState } from 'react'
import uberlogo from "../assets/uber-logo.png"
import { Link, useNavigate } from 'react-router-dom'
const Captainlogin = () => {


        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [captainData, setCaptainData] = useState('')
    
        function submithandler(e) {
            e.preventDefault()
            setCaptainData({
                email: email,
                password: password
            })
            console.log(captainData);
    
            setEmail('')
            setPassword('')
             
            const navigate = useNavigate()
    
        }
  return (
    <div>
            <div className='p-7  h-screen flex flex-col justify-between'>

            <div>
                  
                <img className='w-16  ' src="https://image.shutterstock.com/image-vector/icon-logo-sign-3d-taxi-260nw-2493315763.jpg" alt="Uber Logo" />
                <img src={uberlogo}   className='w-12 mb-10  w- '  alt="Uber Logo" />
                <form onSubmit={(e) => {
                    submithandler(e)
                }}>
                    <h3 className='text-lg font-medium mb-2' >What's your email</h3>

                    <input type="email" required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='email@example.com'
                        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 boder w-full text-lg placeholder:text-base' />


                    <h3 className='text-lg font-medium mb-2'  >Enter your password</h3>


                    <input type="password" required
                        placeholder='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 boder w-full text-lg placeholder:text-base' />

                    <button className='bg-[#111] text-white font-semiblod  mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Login</button>
                </form>

                <p className='text-center'>Join a fleet? <Link className="text-blue-600" to="/captain-signup">Register as a Captain</Link></p>
            </div>


            <div  >
                <Link to="/login"  
                    className='bg-[#d8622d] flex items-center justify-center text-white font-semiblod  mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base'> Sign in as User</Link>
            </div>

        </div>
    </div>
  )
}

export default Captainlogin
