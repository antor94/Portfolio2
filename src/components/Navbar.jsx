import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router'
import { IoIosSearch } from "react-icons/io";
import { MdOutlineSort } from "react-icons/md";


const Navbar = () => {
  return (
    <>
    
    
    <section id='navbar' className='py-[20px] bg-[#e5745d0d] border-b-1 border-[#D3DCD4]'>
        <div className="container">
            <div className='flex justify-between items-center'>

            <div>
                <Link to={'/'}><img className='w-[122px]' src={logo} alt="nav-logo" /></Link>
            </div>
            <div>
                <ul className='flex gap-[88px] items-center'>
                    <li className='text-[18px] font-normal font-jost text-main hover:text-primary duration-[.3s]'><Link >Home</Link></li>
                    <li className='text-[18px] font-normal font-jost text-main hover:text-primary duration-[.3s]'><Link >Projects</Link></li>
                    <li className='text-[18px] font-normal font-jost text-main hover:text-primary duration-[.3s]'><Link >Pages</Link></li>
                    <li className='text-[18px] font-normal font-jost text-main hover:text-primary duration-[.3s]'><Link >Blog</Link></li>
                    <li className='text-[18px] font-normal font-jost text-main hover:text-primary duration-[.3s]'><Link >Contact</Link></li>
                    
                </ul>
            </div>
            <div className='flex gap-[25px]'>
                <button ><IoIosSearch className='text-[17px]' /></button>
                <button className='w-[47px] flex justify-end items-center border-l-2'><MdOutlineSort className='text-[17px]' /></button>
            </div>
            </div>
        </div>
    </section>
    
    
    
    
    
    
    </>
  )
}

export default Navbar