"use client"
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import PlusIcon from '../assets/icons/plus.svg'
import MinusIcon from '../assets/icons/minus.svg'

// FAQ items
const items = [
  {
    question: 'What is the purpose of this FAQ section?',
    answer:
      'The FAQ section aims to provide answers to common questions users may have about our product or service, helping them find information quickly and easily.',
  },
  {
    question: 'How often is the content updated?',
    answer:
      'We update the FAQ section regularly to reflect the most accurate and helpful information.',
  },
  {
    question: 'Can I contact support if my question isn’t here?',
    answer:
      'Absolutely! You can reach out to our support team via the contact form or live chat.',
  },
  {
    question: 'Is there a mobile version of this FAQ?',
    answer:
      'Yes, our FAQ section is fully responsive and optimized for all devices.',
  },
]

// AccordionItem component
const AccordionItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="py-7 border-b border-white/30">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={onToggle}
      >
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? (
          <MinusIcon className="text-xl text-white transition duration-200" />
        ) : (
          <PlusIcon className="text-xl text-white transition duration-200" />
        )}
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="text-white/80 overflow-hidden"
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 16 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div>{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


// Main FAQs Component
export const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-black py-24">
      <div className="container mx-auto px-4">
<h2 className="text-center text-5xl sm:text-6xl sm:max-w-[684px] mx-auto font-bold tracking-tighter mb-12">
  Frequently Asked Questions
</h2>

        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
             
              isOpen={openIndex === index}
              onToggle={() => toggleIndex(index)}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
