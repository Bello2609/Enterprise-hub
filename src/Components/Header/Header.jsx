import React, { useState, useEffect } from "react";
import * as Images from "../../image";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu, AiFillInstagram } from 'react-icons/ai';
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { useLocation } from "react-router-dom";
// import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Text
  } from '@chakra-ui/react';
  import { IoIosArrowDown } from "react-icons/io";

const Header = ()=>{
    const [ nav, setNav ] = useState(false);
      // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };
  const style = {
    color: "#DE2223"
  }
  const { pathname } = useLocation();
  useEffect(()=>{
    setNav(false)
  }, [pathname])
    return (
        <>
            <div className="flex flex-row justify-between h-20 px-20 sm:px-10 w-full items-center">
                <div>
                    <a href="/">
                        <img src={Images.Enterprise} alt="enterprise" className="w-[125px] h-[44px]" />
                    </a>
                </div>
                <div className="flex md:hidden sm:hidden items-center text-base font-sans font-medium">
                        <NavLink to="/" className={({isActive})=>(isActive ? "text-[#DE2223] mr-4" : "mr-4")} exact>HOME</NavLink>
                        <NavLink to="/about-us" className={({isActive})=>(isActive ? "text-[#DE2223] mx-4" : "mx-4")}>ABOUT</NavLink>
                        <NavLink to="/service" className={({isActive})=>(isActive ? "text-[#DE2223] mx-4" : "mx-4")}>SERVICES</NavLink>
                        <Menu>
                            <MenuButton as={Text} cursor="pointer">
                                LOCATION
                            </MenuButton>
                            <MenuList>
                                <MenuItem><NavLink to="/lagos">LAGOS</NavLink></MenuItem>
                                <MenuItem><NavLink to="/abuja">ABUJA</NavLink></MenuItem>
                                <MenuItem><NavLink to="/kano">KANO</NavLink></MenuItem>
                            </MenuList>
                        </Menu>
                        <NavLink  to="/gallery" className={({isActive})=>(isActive ? "text-[#DE2223] mx-4" : "mx-4")}>GALLERY</NavLink>
                        <NavLink  to="/blog" className={({isActive})=>(isActive ? "text-[#DE2223] mx-4" : "mx-4")}>BLOG</NavLink>
                        <NavLink  to="/franchise" className={({isActive})=>(isActive ? "text-[#DE2223] " : "mx-4")}>FRANCHISE</NavLink>
                        {/* <NavLink to="/contact-us" className="flex justify-center items-center mx-4 bg-[#DE2223] text-[#ffffff] w-40 h-12 rounded-md">
                            <motion.div
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}>
                                Contact Us
                            </motion.div>
                        </NavLink> */}
                        
                        <motion.div 
                            className=" mx-4 bg-[#DE2223] text-[#ffffff] w-40 h-12 rounded-md"
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}>
                            <NavLink to="/contact-us" className="flex justify-center items-center w-full h-full">Contact Us</NavLink>
                        </motion.div>
                </div>
                <div onClick={handleNav} className='sm:block md:block hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                {
                    nav && (
                        <div className="fixed md:fixed w-screen h-full top-0 right-0  ease-in-out duration-500 bg-[#fff] text-base text-[#000000] font-sans font-medium">
                            <div  className='flex items-center justify-between p-5'>
                                <a href="/">
                                    <img src={Images.Enterprisemob} href="/" alt="enterprise logo on mobile" />
                                </a>
                                <div onClick={handleNav}>
                                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                                </div>
                            </div>
                            <div className="flex flex-col mx-10">
                                <div className="flex flex-col justify-between">
                                    <NavLink to="/" className="flex items-center justify-between my-4 text-xl font-medium">Home<span><GoArrowUpRight /></span></NavLink>
                                    <NavLink to="/about-us" className="flex items-center justify-between my-4 text-xl font-medium">About<span><GoArrowUpRight /></span></NavLink>
                                    <NavLink to="/service" className="flex items-center justify-between my-4 text-xl font-medium">Service<span><GoArrowUpRight /></span></NavLink>
                                    <Menu className="my-4">
                                        <MenuButton display="flex" as={Text} className="flex items-center justify-between my-4 text-xl font-medium w-[100%]" cursor="pointer" rightIcon={<ChevronDownIcon />}>
                                            <p className="flex items-center justify-between">Location <span><IoIosArrowDown /></span></p>
                                        </MenuButton>
                                        <MenuList minW="200px"> 
                                            <MenuItem minW="350px"><NavLink to="/lagos" className="my-4 text-xl font-medium w-[200px]">Lagos</NavLink></MenuItem>
                                            <MenuItem minW="350px"><NavLink to="/abuja" className="my-4 text-xl font-medium w-[200px]">Abuja</NavLink></MenuItem>
                                            <MenuItem minW="350px"><NavLink to="/kano" className="my-4 text-xl font-medium w-[200px]">Kano</NavLink></MenuItem>
                                        </MenuList>
                                    </Menu>
                                    <NavLink to="/gallery" className="flex items-center justify-between my-4 text-xl font-medium">Gallery<span><GoArrowUpRight /></span></NavLink>
                                    <NavLink to="/blog" className="flex items-center justify-between my-4 text-xl font-medium">Blog<span><GoArrowUpRight /></span></NavLink>
                                    <NavLink to="/franchise" className="flex items-center justify-between my-4 text-xl font-medium">Frachise<span><GoArrowUpRight /></span></NavLink>
                                    <motion.div
                                        className="flex justify-center items-center mt-10 bg-[#DE2223] text-[#ffffff] w-[80vw] h-12 rounded-md"
                                        whileHover={{scale: 1.1}}
                                        whileTap={{scale: 0.9}}>
                                        <NavLink to="/contact-us">Contact Us</NavLink>
                                    </motion.div>
                                </div>
                                <div className="flex flex-col items-center w-full">
                                    <Link to="*" className="underline text-[#81C167] text-lg font-bold my-5">Sign In</Link>
                                    <div className="flex text-[#DE2223] text-3xl">
                                        <a href="https://www.linkedin.com/company/enterprise-hubs/"><FaLinkedin /></a>
                                        <a href="https://www.instagram.com/enterprisehubs?igsh=YzljYTk1ODg3Zg==" className="mx-10"><AiFillInstagram /></a>
                                        <a href="https://www.facebook.com/enterprisehubs01?mibextid=ZbWKwL"><FaFacebookSquare /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </>
    );
}
export default Header;