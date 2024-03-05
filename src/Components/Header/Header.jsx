import React, { useState } from "react";
import * as Images from "../../image";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
const Header = ()=>{
    const [ nav, setNav ] = useState(false);
      // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };
    return (
        <>
            <div className="flex flex-row justify-around h-20 w-full items-center">
                <div>
                    <img src={Images.Enterprise} alt="enterprise" width="125px" height="44px" />
                </div>
                <div className="hidden md:flex items-center text-base text-[#000000] font-sans font-medium">
                        <NavLink to="/" className="ml-4">Home</NavLink>
                        <NavLink to="/about-us" className="ml-4">About</NavLink>
                        <NavLink to="/service" className="ml-4">Service</NavLink>
                        <NavLink to="/location" className="ml-4">Location</NavLink>
                        <NavLink to="/gallery" className="ml-4">Gallery</NavLink>
                        <NavLink to="/blog" className="ml-4">Blog</NavLink>
                        <NavLink to="/franchise" className="ml-4">Frachise</NavLink>
                        <NavLink to="/contact-us" className="p-3 mx-4 bg-[#DE2223] text-[#ffffff] w-40 h-12 rounded-md">Contact Us</NavLink>
                </div>
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                {
                    nav && (
                        <div className="fixed md:hidden w-[50%] h-full top-0 right-0  ease-in-out duration-500 bg-[#fff] text-base text-[#000000] font-sans font-medium">
                            <div onClick={handleNav} className='block md:hidden'>
                                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                            </div>
                            <div className="flex flex-col items-center justify-between">
                                <NavLink to="/" className="ml-4">Home</NavLink>
                                <NavLink to="/about-us" className="my-4">About</NavLink>
                                <NavLink to="/service" className="my-4">Service</NavLink>
                                <NavLink to="/location" className="my-4">Location</NavLink>
                                <NavLink to="/gallery" className="my-4">Gallery</NavLink>
                                <NavLink to="/blog" className="my-4">Blog</NavLink>
                                <NavLink to="/franchise" className="my-4">Frachise</NavLink>
                                <NavLink to="/contact-us" className="p-3 mx-4 bg-[#DE2223] text-[#ffffff] w-40 h-12 rounded-md">Contact Us</NavLink>
                            </div>
                        </div>
                    ) 
                }

            </div>
        </>
    );
}
export default Header;