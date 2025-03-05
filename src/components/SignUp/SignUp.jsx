import React from 'react'
import { FaGoogle } from "react-icons/fa";

import { Logo } from '../Logo/Logo'
// import { LogoName } from '../Logo/LogoName'




const SignUp = () => {

    const signinHandler = () => {

        const userName = 'test@123';
        const userPassword = 'test';

        const email = document.querySelector('#email').value
        const password = document.querySelector('#password').value

        if (userName === email && userPassword === password) {
            alert('Sign in Valid')
        }
        else {
            alert(`Incorrect Username or Password`)
        }
    }

    return (
        <div className=' w-screen h-screen
                flex flex-col items-center justify-center
                bg-[#e2e8ce]/50 sm:bg-[#daddd8]
                '>
            <div className="flex flex-col items-center
                                rounded-lg backdrop-blur-3xl 
                                shadow-lg bg-[#e2e8ce]/50
                                w-screen h-screen pt-48
                                sm:w-[30rem] sm:h-[34rem] sm:pt-44
                                lg:grid lg:grid-flow-col lg:items-center lg:justify-between lg:px-5 
                                lg:w-[60rem] lg:h-[34rem] lg:pt-0
                                sm:border
                                sm:shadow-lg 
                                sm:bg-[#e2e8ce]/50
                                text-[#262626]
                                border-[#acbfa4]/50 ">
                <div className={`absolute w-32 h-32        
                                        lg:relative lg:w-[30rem] lg:h-[30rem]
                                        top-16 sm:top-10 lg:top-0 rounded-full lg:rounded-3xl border-2 border-[#262626]/25 shadow-lg overflow-hidden`}>
                    {/* <LogoName /> */}
                    <Logo />
                </div>

                <div className=' flex flex-col items-center justify-start 
                                mt-16 sm:mt-0 lg:m-auto pr-5 lg:items-center lg:justify-center
                                        w-full h-full bg-[#acbfa4]/50 rounded-t-3xl drop-shadow-lg border-t border-black/25
                                sm:w-fit sm:bg-transparent sm:rounded-none sm:drop-shadow-xl sm:border-0
                        '>
                    <div className=" mt-6 sm:mt-2 text-2xl">
                        Sign Up
                    </div>

                    <div className="w-80 sm:w-96 text-2xl">

                        <label className='text-xs font-serif'>
                            EMAIL
                        </label>
                        <input
                            id='email'
                            type="email"
                            placeholder='Email'
                            pattern='^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$'
                            className='w-80 text-lg px-2 bg-transparent border-b border-black/25 sm:w-full placeholder:text-xs placeholder:font-serif' />

                        <label className='text-xs font-serif'>
                            PASSWORD
                        </label>
                        <input
                            id='password'
                            type="password"
                            placeholder='Password'
                            className='w-80 text-lg px-2 bg-transparent border-b border-black/25 sm:w-full placeholder:text-xs placeholder:font-serif' />

                        <button
                            onClick={signinHandler}
                            className='w-full h-10 mt-5 text-base text-white/75 place-self-center font-serif flex items-center justify-center rounded-md bg-[#1c1c1c]/50 '>
                            Sign Up
                        </button>

                        <div className=" w-80 sm:w-full mt-3 flex justify-between text-xs font-serif">
                            <div>
                                {/* Not a member yet ? Register now */}
                            </div>
                            <div>
                                Forget your Password ?
                            </div>
                        </div>

                        <div className=" w-80 sm:w-full mt-3 mb-2 text-xs font-serif text-center">
                            Log in with
                        </div>

                        <button
                            className=' w-40 h-12 text-xl text-white/75 place-self-center font-serif flex items-center justify-center rounded-md bg-[#1c1c1c]/50 '>
                            <FaGoogle className='mx-2' />Google
                        </button>

                    </div>
                </div>


            </div>
        </div >
    )
}

export default SignUp