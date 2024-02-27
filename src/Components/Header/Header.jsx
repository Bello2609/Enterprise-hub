import React from "react";
import * as Images from "../../image";
import { NavLink } from "react-router-dom";

const Header = ()=>{
    return (
        <>
            <div className="flex flex-row justify-around h-20 w-full items-center">
                <div>
                    <img src={Images.Enterprise} alt="enterprise" width="125px" height="44px" />
                </div>
                <div className="text-base text-[#000000] font-sans font-medium">
                    
                        <NavLink to="/" className="ml-4">Home</NavLink>
                        <NavLink to="/about-us" className="ml-4">About</NavLink>
                        <NavLink to="/service" className="ml-4">Service</NavLink>
                        <NavLink to="/location" className="ml-4">Location</NavLink>
                        <NavLink to="/gallery" className="ml-4">Gallery</NavLink>
                        <NavLink to="/blog" className="ml-4">Blog</NavLink>
                        <NavLink to="/franchise" className="ml-4">Frachise</NavLink>
                        <NavLink to="/contact-us" className="p-3 mx-4 bg-[#DE2223] text-[#ffffff] w-40 h-12 rounded-md">Contact Us</NavLink>
                   
                </div>
            </div>
        </>
    );
}
export default Header;