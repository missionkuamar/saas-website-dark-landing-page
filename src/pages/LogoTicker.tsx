"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Logos
import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";

// Logo data
const logos = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-lg text-white/70">
          Trusted by the world’s most innovative teams
        </h2>

        <div className="relative mt-9 overflow-hidden">
          {/* Gradient overlays on edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-black to-transparent z-10" />

          {/* Scrolling logos */}
          <motion.div
            className="flex gap-x-16 w-max animate-scroll"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
            aria-label="Partner logos scrolling"
          >
            {[...logos, ...logos].map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="h-8 w-auto flex-none"
                draggable={false}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
 