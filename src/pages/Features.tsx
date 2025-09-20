import React from 'react'
import { Feature } from './Feature'

const features = [
    {
        title: 'Customizable Templates',
        description: 'Choose from a variety of templates to suit your project needs and preferences.'
    },
    {
        title: 'Customizable Templates',
        description: 'Choose from a variety of templates to suit your project needs and preferences.'
    },
    {
        title: 'Customizable Templates',
        description: 'Choose from a variety of templates to suit your project needs and preferences.'
    },
]
export const Features = () => {
    return (
        <div className='bg-black text-white py-[72px] sm:py-24'>
            <div className='container
        '>
                <h2 className='text-center font-bold text-5xl sm:text-6xl  tracking-tighter'>Everything you need</h2>
                <div className='max-w-xl mx-auto'>

                    <p className='text-center mt-5 text-xl text-white/70'>
                        Enjoy customizable templates, seamless integrations, and real-time analytics to elevate your workflow and productivity.

                    </p>
                </div>
                <div className='mt-16 flex flex-col sm:flex-row gap-4 '>
                    {
                        features.map((feature, index) => (
                            <Feature key={index} title={feature.title} description={feature.description} />
                        )
                        )
                    }
                </div>
            </div>
        </div>
    )
}
