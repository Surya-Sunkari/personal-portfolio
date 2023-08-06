import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from "react-scroll";
import logo from '../assets/logo.png'


const NavBar = ({nav, setNav}) => {

    const links = [
        {
            id: 1,
            link:'home'
        },
        {
            id: 2,
            link:'about'
        },
        {
            id: 3,
            link:'portfolio'
        },
        // {
        //     id: 4,
        //     link:'experience'
        // },
        {
            id: 5,
            link:'contact'
        },
    ]

    function handleChangeNav() {
        setNav(!nav);
    }

  return (
    <div className='flex justify-between items-center w-full h-20 bg-gradient-to-b from-black via-black to-transparent px-4 text-white fixed z-40'>
        <div>
            {/* <h1 className='text-5xl font-signature ml-2'>SS</h1> */}
            <Link to='home' smooth duration={500}>
                <img src={logo} alt='Logo' width={100} height={100} className=' pt-5 cursor-pointer hover:scale-125 duration-300' />
            </Link>
        </div>
        <ul className='hidden md:flex justify-center items-center'>
            {links.map(({id, link}) => {
                return (
                    <li className="flex px-4 py-1 mx-1 cursor-pointer capitalize font-medium text-2xl hover:bg-white duration-300 hover:text-black rounded-xl " key={id}>
                        <Link to={link} smooth duration={500}>{link}</Link>
                    </li>
                );
            })}
        </ul>
        <div onClick={handleChangeNav} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b  from-black to-gray-800 text-gray-500'>
                {links.map(({id, link}) => {
                    return (
                        <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                            <Link onClick={handleChangeNav} to={link} smooth duration={500}>{link}</Link>
                        </li>
                    );
                })}
            </ul>
        )}
        
        


    </div>
  )
}

export default NavBar