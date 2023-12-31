import React, {useEffect, useState} from 'react'
import plannAHG from "../assets/portfolio/bwi_bot.jpeg";
import neural_net from "../assets/portfolio/neural_network.jpg";
import txb_raffle from "../assets/portfolio/blockchain.png";
import social_network from "../assets/portfolio/social_network.jpg";
import spotify_clone from "../assets/portfolio/spotify_clone.png"
import expense_tracker from "../assets/portfolio/expense_tracker.jpg"
import { fadeIn } from './variants';
import {motion} from 'framer-motion'
import PortfolioCard from './PortfolioCard';
import PortfolioCardMobile from './PortfolioCardMobile';


const Portfolio = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(true);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    useEffect(() => {
        setIsMobile(width <= 768);
    }, [width]);

    // id*, src*, name*, desc*, demo, code, paper, paper_name, 
    const portfolios = [
        {
            id: 1,
            src:plannAHG,
            name: "Toyota BWI Bot Task Planner",
            desc: "Over the past few months, I worked with a team to develop a novel robotics platform, called Dobby, that seamlessly combines multi-step task planning with fluent, human-like conversation. Our system consists of a single AI agent, derived from a large language model, which is responsible for generating dialogue and interfacing with the physical world by invoking commands. With its unprecedented communication abilities, Dobby presents exciting opportunities for enhancing human-robot-interaction and increasing the flexibility of service robots. I plan to continue developing the project this summer by incorporating novel algorithms into Dobby's planning strategies, to enable it to be able to do much more complex tasks.",
            demo: "https://youtu.be/gsMDuAPTgdo",
            paper: "/PlannA-HG_paper.pdf",
            paper_name: "PlannA-HG_paper",
        },{
            id: 2,
            src:spotify_clone,
            name: "Spotify Clone",
            desc: "In this project, I created a comprehensive music streaming application using Next.js, React, Tailwind CSS, Supabase, and PostgreSQL. This project was my first attempt at creating a full stack application without any partners or team members, so I was forced into an environment in which I had to learn everything from setup to deployment. This application mirrors Spotify's key features, offering user experiences such as file and image upload, secure credential authentication, audio playback, a favorite songs system, as well as server error handling. This project showcases my dedication in learning unfamiliar technologies, as well as my ability to create a fully polished full stack application.",
            demo: "https://spotify-clone-surya-sunkari.vercel.app/",
            code: "https://github.com/Surya-Sunkari/spotify-clone",
        },
        {
            id: 3,
            src: expense_tracker,
            name: "Expense and Investment Tracker",
            desc: "Developed an AI-driven expense and investment tracker at HackTX 2023. Utilized Next.js, Flask, Tailwind CSS, and MongoDB to create a unified solution for managing personal finances. Implemented CRUD operations for seamless expense management and integrated OpenAI's GPT-3.5 API for AI-driven financial advising. Incorporated web scraping to provide users with recent news articles related to their investment holdings. This project demonstrates my agility in leveraging diverse technologies to address real-world financial challenges in a hackathon setting, as well as my ability to work with an unfamiliar tech stack to create a production ready full-stack application.",
            code: "https://github.com/Surya-Sunkari/personal-finance-tracker",
        },
        {
            id: 4,
            src:neural_net,
            name: "Hardcoded Neural Network",
            desc: "In this project, I developed a neural network using pure NumPy, abandoning popular machine learning libraries like TensorFlow and PyTorch. The model's objective was to identify handwritten digits (0-9) from 28x28 grayscale images sourced from the MNIST database. To achieve this, I combined knowledge from various fields, including linear algebra, multivariable calculus, and the theory behind neural network implementation. My approach to optimizing the architecture and fine-tuning hyperparameters resulted in an acccuracy of over 90%. This project exemplifies my dedication to delving into the intricacies of AI, showcasing my ability to create powerful solutions from scratch.",
            code: "https://github.com/Surya-Sunkari/neural-networks",
        },
        {
            id: 5,
            src:txb_raffle,
            name: "NFT Raffle",
            desc: "TxB Raffle is an NFT raffling application with ticket purchase/refund and prize disbursement capabilities, ensuring fairness through verifiable random functions (VRFs). Commissioned by Shardeum to TxB Labs (Texas Blockchain's Engineering Cohort at UT Austin), this project enables NFT owners to initiate raffles with custom slots, ticket prices, and dates, while users can easily participate and request refunds. With VRF-based winner selection and efficient prize distribution, the platform guarantees a transparent and rewarding experience. The project also incorporates a 2.5% commission for the contract owner and offers contract ownership transferability.",
            code: "https://github.com/Surya-Sunkari/TxB-Raffle-SO",
        },
        {
            id: 6,
            src:social_network,
            name: "\"Unsocial\" Network",
            desc: "In this personal project, I designed and programmed a dynamic \"Social Network\" application using Java, incorporating file input and output as a database to manage user login information, messaging, account creation, and friend requests, among other functionalities. Through this endeavor, I deepened my understanding of essential programming concepts, such as File I/O, encapsulation, Object-Oriented Programming (OOP), and Graphical User Interface (GUI) design. The project showcases my ability to build practical and functional applications while honing my skills in Java development.",
            code: "https://github.com/Surya-Sunkari/unsocial-network",
        },
    ]


  return (
    <>
        <div className='w-full bg-black text-white md:h-screen pt-80 md:pt-36 pb-20 mb-60'>
            <div name='portfolio' className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full pt-20 md:pt-80'>
                <motion.div variants={fadeIn('down', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className='pb-8'>
                    <p className='text-4xl font-bold inline p-2 pt-3 rounded-xl bg-white text-black z-50'>Portfolio</p>
                </motion.div>
                {(isMobile) ?
                    (
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'> 
                        {portfolios.map(({id, src, name, demo, code, paper, paper_name}) => (
                            <motion.div variants={fadeIn('left', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} key={id} className='shadow-md shadow-gray-500 rounded-lg'>
                                <PortfolioCardMobile src={src} name={name} demo={demo} code={code} paper={paper} paper_name={paper_name} />
                            </motion.div>  
                        ))}
                    </div>
                    ) : (
                    <div className='hidden md:grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'> 
                        {portfolios.map(({id, src, name}) => (
                            <motion.div variants={fadeIn('left', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} key={id} className='shadow-md shadow-gray-500 rounded-lg'>
                                <PortfolioCard portfolios={portfolios} src={src} id={id} name={name}/>
                            </motion.div>  
                        ))}
                    </div>
                )
                }
            </div>
        </div>
    </>
    
  )
}

export default Portfolio