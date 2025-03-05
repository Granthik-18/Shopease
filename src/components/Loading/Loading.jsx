import React from 'react'
import { motion } from 'motion/react'

import { LogoName } from '../Logo/LogoName'
import { Logo } from '../Logo/Logo'

const Loading = () => {
    return (
        <motion.div>

            <div className='relative w-screen h-screen top-0 text-[#ffffff] bg-[#1a1a1a]'>

                <motion.div initial={{ opacity: 0, borderRadius: ["100%", "10%"] }}
                    animate={{ opacity: 1, borderRadius: ["100%", "0%"] }}
                    transition={{
                        duration: 2,
                        delay: 0.2,
                        ease: [0, 0.71, 0.2, 1.01],
                    }} className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]
                                w-[18rem] h-[17rem]
                                bg-[#ffffff]/25  overflow-hidden'>

                    <motion.div initial={{ opacity: 0, borderRadius: "0%" }}
                        animate={{ opacity: .8, borderRadius: "100%" }}
                        transition={{
                            duration: 2,
                            delay: 2,
                            ease: [0.1, 0.5, 0.2, 1.01],
                        }} className='absolute -top-4 flex items-center justify-center'>
                        {/* <LogoName /> */}
                        <Logo />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, borderRadius: ["100%", "0%"] }}
                        animate={{ opacity: 0.9, borderRadius: ["0%"] }}
                        transition={{
                            duration: 1.5,
                            delay: 3.3,
                            ease: [0.1, 0.5, 0.2, 1.01],
                        }} className='absolute -top-4 flex items-center justify-center'>
                        <LogoName />
                        {/* <Logo /> */}
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0, x: -100, y: -100 }}
                        animate={{ opacity: 1, scale: [0, 5.2, 1], x: 0, y: 0, rotate: [-90, 0] }}
                        transition={{
                            duration: 1.5,
                            delay: 1.1,
                            ease: [0, 0.71, 0.2, 1.01],
                        }} className='fixed w-[5.5rem] h-[5.5rem] rounded-br-full bg-[#ffffff]/75 drop-shadow-md top-0 left-0 ' />

                    <motion.div initial={{ opacity: 0, scale: 0, x: 100, y: 100 }}
                        animate={{ opacity: 1, scale: [0, 5.2, 1], x: 0, y: 0, rotate: [-90, 0] }}
                        transition={{
                            duration: 1.5,
                            delay: 1.1,
                            ease: [0, 0.71, 0.2, 1.01],
                        }} className='fixed w-[5.5rem] h-[5.5rem]  rounded-tl-full bg-[#ffffff]/75 drop-shadow-2xl -bottom-0 -right-0 ' />

                    <motion.div initial={{ opacity: 0, scale: 0, x: -100, y: -100 }}
                        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                        transition={{
                            duration: 2,
                            delay: 1.1,
                            ease: [0, 0.71, 0.2, 1.01],
                        }} className='fixed w-[5.5rem] h-[5.5rem] bg-[#1a1a1a] rounded-br-full    -red-700 -top-5 -left-5' />

                    <motion.div initial={{ opacity: 0, scale: 0, x: 100, y: 100 }}
                        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                        transition={{
                            duration: 2,
                            delay: 1.1,
                            ease: [0, 0.71, 0.2, 1.01],
                        }} className='fixed w-[5.5rem] h-[5.5rem] bg-[#1a1a1a] rounded-tl-full    -red-700 -bottom-5 -right-5' />

                    <motion.div initial={{ opacity: 0, scale: 0, x: 100, y: -100 }}
                        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                        transition={{
                            duration: 2,
                            delay: 1.1,
                            ease: [0, 0.71, 0.2, 1.01],
                        }} className='fixed w-[5.5rem] h-[5.5rem] bg-[#1a1a1a] rounded-bl-full    -red-700 -top-5 -right-5' />

                    <motion.div initial={{ opacity: 0, scale: 0, x: -100, y: 100 }}
                        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                        transition={{
                            duration: 2,
                            delay: 1.1,
                            ease: [0, 0.71, 0.2, 1.01],
                        }} className='fixed w-[5.5rem] h-[5.5rem] bg-[#1a1a1a] rounded-tr-full    -red-700 -bottom-5 -left-5' />

                </motion.div>

            </div >


        </motion.div >
    )
}

export default Loading