import React from "react";
import * as images from "../../image";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Franchise = ()=>{
    return(
        <>
            <div className="flex md:flex-col sm:flex-col justify-between px-20 sm:px-10 my-16">
                <div className="flex flex-col ">
                    <h4 className="flex-wrap w-[517px] sm:w-fit text-6xl font-bold text-[#252524] mb-10">
                        Our Franchise Program
                    </h4>
                    <img src={images.pro7} alt="professional" className="w-[423px] sm:w-[320px] h-[291px] sm:h-[220px]" />
                </div>
                <div className="flex flex-col items-start ">
                    <p className="w-[413px] sm:w-fit flex-wrap font-normal text-base text-[#252524] my-4 leading-[28px]">
                        Enterprise Hubs is an integrated network of online and physical resource centers 
                        for emerging enterprises in Africa's growth clusters.A platform for promotion of 
                        emerging businesses across Africa, offering shared services, virtual offices, 
                        contemporary business hubs, online B2B marketplace, business support services and a 
                        complete suite of enterprise development programs and resources.A system that’s 
                        redefining the way people work, innovate and grow.
                    </p>
                    <p className="w-[413px] sm:w-fit flex-wrap font-normal text-base text-[#252524] my-4 leading-[28px]">
                        Joining our partner or franchisee program offers you a strong position in a fast-growing
                        industry with a particularly strong future outlook in Africa.
                    </p>
                    <motion.div 
                        whileHover={{scale: 1.1, transition: { duration: 0.5, ease: "easeOut" }}}
                        whileTap={{scale: 0.9}}>
                        <Link to="/get-started" className="flex items-center justify-center p-3  bg-[#DE2223] text-[#ffffff] w-40 h-12 rounded-md">
                            Get Started
                        </Link>
                    </motion.div>
                    
                   
                </div>
            </div>
        </>
    );
}
export default Franchise;