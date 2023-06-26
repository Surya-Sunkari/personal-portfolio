import React from 'react'
import plannAHG from "../assets/portfolio/bwi_bot.jpeg";
import neural_net from "../assets/portfolio/neural_network.jpg";
import txb_raffle from "../assets/portfolio/blockchain.png";
import social_network from "../assets/portfolio/social_network.jpg";
import { fadeIn } from './variants';
import {motion} from 'framer-motion'


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src:plannAHG,
            name: "Toyota BWI Bot Task Planner",
            demo: "https://youtu.be/gsMDuAPTgdo",
            code: "https://github.com/qyuo/PlannAHG",
            paper: "/PlannA-HG_paper.pdf",
            paper_name: "PlannA-HG_paper",
        },
        {
            id: 2,
            src:neural_net,
            name: "Hardcoded Neural Network",
            demo: "",
            code: "https://github.com/Surya-Sunkari/neural-networks",
            paper: "",
            paper_name: "",
        },
        {
            id: 3,
            src:txb_raffle,
            name: "NFT Raffle",
            demo: "",
            code: "https://github.com/Surya-Sunkari/TxB-Raffle-SO",
            paper: "",
            paper_name: "",
        },
        {
            id: 4,
            src:social_network,
            name: "\"Unsocial\" Network",
            demo: "",
            code: "https://github.com/Surya-Sunkari/unsocial-network",
            paper: "",
            paper_name: "",
        },
    ]


  return (
    <>
        <div className='w-full bg-black text-white md:h-screen pt-80 md:pt-36 pb-20 mb-60'>
            <div name='portfolio' className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full pt-20 md:pt-80 '>
                <motion.div variants={fadeIn('down', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className='pb-8'>
                    <p className='text-4xl font-bold inline p-2 pt-3 rounded-xl bg-white text-black z-50'>Portfolio</p>
                </motion.div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'> 
                    {portfolios.map(({id, src, name, demo, code, paper, paper_name}) => (
                        <motion.div variants={fadeIn('left', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} key={id} className='shadow-md shadow-gray-500 rounded-lg'>
                            <img src={src} alt="" className='rounded-md duration-200 h-44 w-full object-fill'/>
                            <h2 className=' text-xl text-center font-bold mt-2'>{name}</h2>
                            <div className='flex justify-evenly py-2'>

                                {demo!=="" && 
                                    <a href={demo} target='_blank' rel='noreferrer'>
                                        <button className='px-1 py-1 my-1 mx-2 duration-200 hover:text-yellow-200 hover:scale-110'>Demo</button>
                                    </a>
                                }
                                
                                {code!=="" &&
                                    <a href={code} target='_blank' rel='noreferrer'>
                                        <button className='px-1 py-1 my-1 mx-2 duration-200 hover:text-yellow-200 hover:scale-110'>Code</button>
                                    </a> 
                                }        

                                {paper!=="" && 
                                    <a href={paper} download={paper_name} target='_blank' rel='noreferrer'>
                                        <button className='px-1 py-1 my-1 mx-2 duration-200 hover:text-yellow-200 hover:scale-110'>Paper</button>
                                    </a>
                                }

                            </div>
                        </motion.div>  
                    ))}
                </div>
            </div>
        </div>
    </>
    
  )
}

export default Portfolio