import React, { useState } from 'react'
import uberlogo from "../assets/uber-logo.png"
import { Link } from 'react-router-dom'
const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({})

    function submithandler(e) {
        e.preventDefault()
        setUserData({
            email: email,
            password: password
        })
        console.log(userData);

        setEmail('')
        setPassword('')
}

    return (
        <div className='p-7  h-screen flex flex-col justify-between'>

            <div>
                <img className='w-16 mb-10 ' src={uberlogo} alt="Uber Logo" />
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

                <p className='text-center'>New here? <Link className="text-blue-600" to="/Usersignup">Create new Account</Link></p>
            </div>

            <div>
                <Link to="/captain-login"
                    className='bg-[#10b461] flex items-center justify-center text-white font-semiblod  mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base'> Sign in as Captain</Link>
            </div>
        </div>
    )
}
export default UserLogin
