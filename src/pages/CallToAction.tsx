"use client"
import React, { useEffect, useRef } from 'react'
import emojiStarImage from "../assets/images/emojistar.png"
import helixImage from "../assets/images/helix2.png"
import { useScroll, useTransform, motion } from 'framer-motion'
import Image from 'next/image'

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end']
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  // ✅ Proper useEffect with cleanup
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (value) => {
      console.log("value", value);
    });

    return () => unsubscribe(); // cleanup
  }, [scrollYProgress]);

  return (
    <div className='bg-black text-white text-center py-24' ref={containerRef}>
      <div className='container max-w-xl relative'>
        <motion.div style={{ translateY }}>
          <Image src={helixImage} alt="Helix" className='absolute top-6 left-[calc(100%+36px)] translate-y-10' />
        </motion.div>
        <motion.div style={{ translateY }}>
          <Image src={emojiStarImage} alt="Star emoji" className='absolute -top-[120px] right-[calc(100%+24px)]' />
        </motion.div>
        <h2 className='font-bold text-5xl tracking-tighter sm:text-6xl'>Get instant access</h2>
        <p className='text-xl text-white/70 mt-5'>
          Sign up today and take the first step towards transforming your workflow with our cutting-edge SaaS solution. Experience the future of productivity and efficiency—join us now!
        </p>
        <form className='mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row'>
          <input
            type="email"
            placeholder='Enter your email'
            className='h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1' // ✅ fixed color code
          />
          <button
            type='submit'
            className='bg-white text-black h-12 rounded-lg py-4 px-2 items-center'
          >
            Get Started
          </button>
        </form>
      </div>
    </div>
  )
}
