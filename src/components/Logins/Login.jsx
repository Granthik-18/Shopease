import React from 'react'
import { Logo } from '../Logo/Logo'
import { FaGoogle } from "react-icons/fa";


const Login = () => {
    return (
        <div className=' w-screen h-screen
        flex items-center justify-center
        bg-[#daddd8]
        '>
            <div className=" w-[22rem] h-[27rem] sm:w-[20rem] sm:h-96 md:w-96 md:h-96 
                        flex flex-col items-center
                        pt-4
                        text-[#262626]
                        bg-[#e2e8ce]/50
                        rounded-lg shadow-lg 
                        backdrop-blur-3xl
                        border border-[#acbfa4]/50 ">

                <div className='w-16 h-16 rounded-full shadow-2xl overflow-hidden'>
                    <Logo />
                </div>

                <div className=" mt-2 text-2xl">
                    Login
                </div>

                <div className="w-80 text-2xl">

                    <label className='text-sm font-serif'>Email</label>
                    <input type="text" className='w-80' />

                    <label className='text-sm font-serif'>Email</label>
                    <input type="text" className='w-80' />

                    <button className=' w-full h-8 mt-5 rounded-md bg-[#1c1c1c]/50 text-sm font-serif'>Email</button>

                    <div className=" w-80 mt-1 text-right text-xs font-serif">
                        Forget your Password ?
                    </div>

                    <div className=" w-80 mt-3 mb-1 text-xs font-serif text-center">
                        Sign Up with
                    </div>

                    <button className=' w-full h-10 rounded-md flex items-center justify-center bg-[#1c1c1c]/50 text-xl font-serif'>
                        <FaGoogle className='mx-2' />Google
                    </button>

                </div>


            </div>
        </div >
    )
}

export default Login
