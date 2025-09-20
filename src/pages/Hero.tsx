"use client"
import React from 'react'
import ArrowWIcon from '../assets/icons/arrow-w.svg';
import cursorImage from "../assets/images/cursor.png";
import messageImage from "../assets/images/message.png";
import Image from 'next/image';
import { motion } from 'framer-motion';
export const Hero = () => {
    return (
        <div className='bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip rounde-[100%]'>
            <div className='absolute top-[calc(100%-96px)] sm:top-[calc(100%-120px)] left-1/2 -translate-x-1/2 h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black border border-[#B48CDE] bg-[radial-gradient(closest-side,_#000_82%,_#9560EB)]'>
            </div>
            <div className='container relative'>
                <div className='flex items-center justify-center'>

                    <a href='#' className='border py-1 px-2 rounded-white/30 rounded-lg'>
                        <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text">
                            Version 2.0 is here
                        </span>


                        <span className='inline-flex items-center gap-1'>
                            <span>
                                Read More
                            </span>
                            <ArrowWIcon />
                        </span>
                    </a>
                </div>
               <div className='flex justify-center mt-8'>
                 <div className='inline-flex relative'>
                    <h1 className='text-7xl sm:text-9xl font-bold tracking-tighter text-center '>One Task <br /> at a Time</h1>
                  <motion.div className='absolute right-[476px] top-[108px] hidden sm:inline' drag dragSnapToOrigin >
                    <Image src={cursorImage} alt='' height="200" width="200"  className='max-w-none'
                    draggable="false"
                     />
                    </motion.div >  
                    <motion.div className='absolute top-[56px] left-[498px] hidden sm:inline' drag dragSnapToOrigin >

                    <Image src={messageImage} alt='' height="200" width="200"  className='max-w-none' draggable="false"/>
                    </motion.div>
                 </div>
               </div>
               <div className='flex justify-center'>
                 <p className='text-center text-xl mt-8'>
                    Stay focused and organized with our task management app, designed to help you prioritize and accomplish your goals efficiently.
                </p>
               </div>
                <div className='flex justify-center items-center mt-8 max-w-md'>

                    <button className='bg-white text-black py-3 px-5 rounded-lg font-medium'>Get for Free</button>
                </div>
            </div>


        </div>
    )
}
