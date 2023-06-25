import React from 'react'
import { Chrono } from 'react-chrono';
import { fadeIn } from './variants';
import {motion} from 'framer-motion'

//documentation
//https://www.npmjs.com/package/react-chrono#getting-started
const Experience = () => {

    const items = [
        {
            title: "August 2022",
            cardTitle: "UT Austin",
            cardSubtitle:"Computer Science and Math Student",
            //cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
          },
          {
            title: "May 2023",
            cardTitle: "Paycom",
            cardSubtitle:"Software Development Intern",
            //cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
          },

    ]

  return (
    <div name='experience' className='w-full h-screen pt-20 md:pt-12'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center items-center w-full h-full text-white'>
            <motion.div variants={fadeIn('down', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className='pb-8'>
                <p className='text-4xl font-bold p-2 pt-3 rounded-xl bg-white text-black inline'>Experience</p>
            </motion.div>
            
            <div className=' w-[500px] h-[1500px]'>
                <Chrono items={items} mode='VERTICAL_ALTERNATING' scrollable />
            </div>
            
        </div>
    </div>
  )
}

export default Experience