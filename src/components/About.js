import React from 'react'
import { fadeIn } from './variants';
import {motion} from 'framer-motion'
import MyCarousel from "./MyCarousel"
import css from "../assets/skills/css.png";
import html from "../assets/skills/html.png";
import javascript from "../assets/skills/javascript.png";
import react from "../assets/skills/react.png";
import tailwind from "../assets/skills/tailwind.png";
import java from "../assets/skills/java.png";
import python from "../assets/skills/python.png";
import php from "../assets/skills/php.png";


const About = () => {

    const frontend = [
        {
            id: 1,
            src: html,
            title: "HTML",
        },
        {
            id: 2,
            src: css,
            title: "CSS",
        },
        {
            id: 3,
            src: react,
            title: "React.JS",
        },
        {
            id: 4,
            src: tailwind,
            title: "Tailwind",
        },
      ]
    const backend = [
        {
            id: 5,
            src: java,
            title: "Java",
        },
        {
            id: 6,
            src: python,
            title: "Python",
        },
        {
            id: 7,
            src: javascript,
            title: "JavaScript",
        },
        {
            id: 8,
            src: php,
            title: "PHP",
        },
      ]

  return (
    <>
        <div className='text-center w-full h-screen bg-black text-white md:h-screen mb-96 md:mb-76'>
            <div name="about" className='w-full h-full bg-black text-white pt-24 md:pt-20'>
                <div className='max-w-screen-lg p-4 mx-auto my-auto flex flex-col justify-center items-center pb-10'>
                    <motion.div variants={fadeIn('down', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}}>
                        <p className='text-4xl font-bold inline p-2 pt-3 rounded-xl bg-white text-black'>About</p>
                    </motion.div>
                    <motion.p variants={fadeIn('left', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className='text-xl mt-8 text-center'>
                        Hi, I'm Surya! I am a student at the University of Texas at Austin majoring in Computer Science and Mathematics. Ever since I was little, I've loved
                        the power that code provides for realizing creative potential and creating something truly unique. 
                    </motion.p>
                    <br />
                    <motion.p variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className='text-xl text-center'>
                        I am currently interning at Paycom as a Software Development Intern, where I am gaining invaluable experience and contributing to impactful projects.
                        This has allowed me to sharpen my programming skills, collaborate and learn from talented professionals, and develop my ability to work as a team in a software environment.
                    </motion.p>
                    <br />
                    <motion.p variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className='text-xl text-center'>
                        I am constantly seeking opportunities to grow.
                        If you would like to connect, collaborate, or discuss exciting projects, please do not hesitate to reach out to me!
                    </motion.p>
                </div>  
                <div className='max-w-screen-lg mx-auto my-auto pt-10'>
                    <MyCarousel images={frontend} title={"Frontend Skills"}/>
                </div>
                <div className='max-w-screen-lg mx-auto my-auto pt-10'>
                    <MyCarousel images={backend} title={"Backend Skills"}/>
                </div>         
            </div>

            
        </div>
        
    </>
    
  )
}

export default About