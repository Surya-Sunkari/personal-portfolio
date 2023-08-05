import React, {useEffect, useState} from 'react'
import plannAHG from "../assets/portfolio/bwi_bot.jpeg";
import neural_net from "../assets/portfolio/neural_network.jpg";
import txb_raffle from "../assets/portfolio/blockchain.png";
import social_network from "../assets/portfolio/social_network.jpg";
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
            desc: "Ullamco incididunt adipisicing nulla velit deserunt do magna Lorem. Adipisicing mollit aliquip ullamco cillum esse et aliquip aliquip labore labore aliquip. Consectetur elit in eiusmod sunt mollit quis sint qui proident ad.",
            demo: "https://youtu.be/gsMDuAPTgdo",
            code: "https://github.com/qyuo/PlannAHG",
            paper: "/PlannA-HG_paper.pdf",
            paper_name: "PlannA-HG_paper",
        },
        {
            id: 2,
            src:neural_net,
            name: "Hardcoded Neural Network",
            desc: "abcdefghijklmnopqrstuvwxyzabcdefghijklmno pqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnop qrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefgh ijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl abcdefghijklmnopqrstuvwxyzabcdefghijklmno pqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnop qrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefgh ijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl abcdefghijklmnopqrstuvwxyzabcdefghijklmno pqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnop qrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefgh ijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklabcdefghijklmnopqrstuvwxyzabcdefghijklmno pqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnop qrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefgh ijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl mnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyza bcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz In this project, I developed a neural network using pure NumPy, abandoning popular machine learning libraries like TensorFlow and PyTorch. The model's objective was to identify handwritten digits (0-9) from 28x28 grayscale images sourced from the MNIST database. To achieve this, I combined knowledge from various fields, including linear algebra, multivariable calculus, and the theory behind neural network implementation. My approach to optimizing the architecture and fine-tuning hyperparameters resulted in an acccuracy of over 90%. This project exemplifies my dedication to delving into the intricacies of AI, showcasing my ability to create powerful solutions from scratch.",
            code: "https://github.com/Surya-Sunkari/neural-networks",
        },
        {
            id: 3,
            src:txb_raffle,
            name: "NFT Raffle",
            desc: "Ullamco incididunt adipisicing nulla velit deserunt do magna Lorem. Adipisicing mollit aliquip ullamco cillum esse et aliquip aliquip labore labore aliquip. Consectetur elit in eiusmod sunt mollit quis sint qui proident ad.",
            code: "https://github.com/Surya-Sunkari/TxB-Raffle-SO",
        },
        {
            id: 4,
            src:social_network,
            name: "\"Unsocial\" Network",
            desc: "Ullamco incididunt adipisicing nulla velit deserunt do magna Lorem. Adipisicing mollit aliquip ullamco cillum esse et aliquip aliquip labore labore aliquip. Consectetur elit in eiusmod sunt mollit quis sint qui proident ad.",
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
                                <PortfolioCard portfolios={portfolios} src={src} id={id} name={name} />
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