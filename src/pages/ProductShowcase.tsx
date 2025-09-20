"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import appScreen from "../assets/images/app-screen.png";

export const ProductShowcase = () => {
  const appImage = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ['start end', 'end end'], // ✅ Fixed format
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latestValue) =>
      console.log("latestValue", latestValue)
    );

    return () => unsubscribe(); // ✅ Cleanup
  }, [scrollYProgress]);

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CAB] py-24">
      <div className="container">
        <h2 className="text-center text-5xl font-bold tracking-tighter">
          Intutive interface
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">
            Our product features an intuitive interface designed for ease of use, ensuring a seamless user experience.
          </p>
        </div>

        <motion.div
          ref={appImage}
          style={{
            opacity,
            rotateX,
            transformPerspective: "800px",
          }}
        >
          <Image src={appScreen} alt="The product screenshot" className="mt-14" />
        </motion.div>
      </div>
    </div>
  );
};
