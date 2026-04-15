import React from 'react'
import uberlogo from "../assets/uber-logo.png"
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div>
            <div className=' bg-center bg-cover bg-[url(https://plus.unsplash.com/premium_photo-1736942315439-5fc2bee18f3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8)] h-screen pt-8 flex justify-between flex-col w-full '>
                <img   className='w-16 ml-8 ' src={uberlogo} alt="" />
             
                <div className='bg-white  py-4 pb-7 px-4 '>
                    <h2  className='text-3xl font-blod '>Get Started with Uber</h2>
                    <Link  to='/login' className='  flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
                </div>
            </div>
        </div>
    )
}

export default Home
