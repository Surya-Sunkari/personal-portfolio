import React from 'react'
import headshot from "../assets/picofme.jpg";
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-scroll'
import {TypeAnimation} from 'react-type-animation'
import { fadeIn } from './variants';
import {motion} from 'framer-motion'

const Home = ({nav}) => {
  return (
    <div name="home" className='h-screen w-full'>
        <div className='mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-col'>
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-8 text-center py-8 px-12'>
            <div className='flex flex-col items-center justify-center'>
              <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: true, amount: 0.7}} className={'text-4xl sm:text-6xl font-bold text-white ' + (nav && 'hidden')}>
                <span>I am </span>
                <TypeAnimation sequence={[' Surya.', 2000,' a student.', 2000, ' a developer.', 2000]} wrapper="span" speed={5} repeat={Infinity} className='text-blue-400' />
              </motion.div>
              <motion.p variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: true, amount: 0.7}} className='text-gray-500 py-4 max-w-md'>
                Hello! My name is Surya Sunkari, and I am a Computer Science and Math student at the University of Texas at Austin interested in quantitative analysis, design, and machine learning.
              </motion.p>
              <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: true, amount: 0.7}}>
                <Link to='portfolio' smooth duration={500} className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer group'>
                    Portfolio
                    <span className='group-hover:rotate-90 duration-300'>
                      <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                    </span>
                  </Link>
              </motion.div>
            </div>
            <motion.div variants={fadeIn('left', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: true, amount: 0.7}}>
              <img src={headshot} alt="my profile" className=' rounded-[50%] mx-auto w-4/5'/>
            </motion.div>

          </div>
        </div>
    </div>
  )
}

export default Home;