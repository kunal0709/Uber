import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import uberlogo from "../assets/uber-logo.png"
const UserSignup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [userData, setUserData] = useState({})




    const submithandler = (e) => {
        setUserData({
          fullname: {
                firstName: firstname,
                lastName: lastname
            },
            email: email,
            password: password
        })
        console.log(userData);


        setEmail('')
        setPassword('')
        setFirstname('')
        setLastname('')
        e.preventDefault()
    }

    return (
        <div className='p-7  h-screen flex flex-col justify-between'>

            <div>
                <img className='w-16 mb-10 ' src={uberlogo} alt="Uber Logo" />
                <form onSubmit={(e) => {
                    submithandler(e)
                }}>        <h3 className='text-lg font-medium mb-2' >What's your name</h3>

                    <div className='flex gap-4 mb-6'>
                        <input type="text" required
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            placeholder='First Name'
                            className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 boder  text-lg placeholder:text-base ' />

                        <input type="text" required
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}

                            placeholder='Last Name'
                            className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 boder   text-lg placeholder:text-base '
                        />

                    </div>


                    <h3 className='text-lg font-medium mb-2' >What's your email</h3>

                    <input type="email" required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='email@example.com'
                        className='bg-[#eeeeee] mb-6 rounded px-4 py-2 boder w-full text-lg placeholder:text-base ' />



                    <h3 className='text-lg font-medium mb-2'  >Enter your password</h3>

                    <input type="password" required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='password'
                        className='bg-[#eeeeee] mb-6 rounded px-4 py-2 boder w-full  text-lg placeholder:text-base ' />

                    <button className='bg-[#111] text-white font-semiblod  mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Login</button>
                </form>
                <p className='text-center'> Already have a account? <Link className="text-blue-600" to="/login">Login here</Link></p>
            </div>

          <div>
        <p className=' text-[10px] leading-tight'>
          This site is protected by reCAPTCHA and the <span className='underline'>  Google Privacy Policy  </span>and  

           <span className='underline'> Terms of Service apply.</span>
        </p>
      </div>


        </div>
    )
}

export default UserSignup
