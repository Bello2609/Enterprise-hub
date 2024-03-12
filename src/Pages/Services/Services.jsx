import React from "react";
import * as images from "../../image";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Services = ()=>{
    return(
        <>
            <div className="flex flex-col w-full">
                <div className="flex justify-between items-start px-20 my-10">
                    {/* <div className="flex items-start"> */}
                        
                            <h4 className="flex-wrap w-[517px] text-6xl font-bold text-[#252524]">
                                We've got something that suits you
                            </h4>
                        
                            <p className="w-[413px] flex-wrap font-normal text-base text-[#252524] leading-[28px]">
                                At Enterprise Hubs, we're all about making things easy and flexible. 
                                Whether you're looking for a permanent office for your team or just a 
                                virtual office address, we've got a spot waiting for you in our welcoming 
                                community.
                            </p>
                        
                    {/* </div> */}
                </div>
                <div className="flex justify-evenly my-10 w-full px-20">
                    <div className="grid md:grid-cols-2 sm:grid-cols-1 grid-cols-4 gap-24 h-fit w-full">
                        <motion.div whileHover={{ y: 50}} transition={{ duration: 0.5, ease: "easeOut" }} className="flex flex-col w-[220px] h-[350px] bg-[#DFFFD4] p-5 mt-5 rounded-lg">
                            <img src={images.table} alt="table" className="rounded-full" width="100px" height="100px" />
                            <div className="h-fit">
                                <h4 className="font-xl font-semibold font-sans mt-3">Office Space</h4>
                                <p className="w-[200px] text-[#252524] flex-wrap leading-[24px] my-3">We have state of the art office spaces to cater for your needs</p>
                            </div>
                            <Link to="/book-space" className="flex justify-center items-center w-[108px] h-[45px] text-[#fff] font-medium bg-[#E8332C] p-3 w-28 h-11 rounded-md mt-5">
                                Book now
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ y: 50}} transition={{ duration: 0.5, ease: "easeOut" }} className="flex flex-col w-[220px] h-[350px] bg-[#FBF6AF] p-5 mt-5 rounded-lg">
                            <img src={images.map} alt="table" className="rounded-full" width="100px" height="100px" />
                            <div className="h-fit">
                                <h4 className="font-xl font-semibold font-sans mt-3">Virtual Office</h4>
                                <p className="w-[200px] h-[72px]  text-[#252524] flex-wrap my-5">
                                    Take control of your business,by having a business address in the heart of Lagos Nigeria. 
                                </p>
                            </div>
                            <Link to="/book-space" className="flex justify-center items-center w-[108px] h-[45px] text-[#fff] font-medium bg-[#E8332C] p-3 w-28 h-11 rounded-md mt-5">
                                Book now
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ y: 50}} transition={{ duration: 0.5, ease: "easeOut" }} className="flex flex-col w-[220px] h-[350px] bg-[#FFDEDD] p-5 mt-5 rounded-lg">
                            <img src={images.tv} alt="table" className="rounded-full" width="100px" height="100px" />
                            <div className="h-fit">
                                <h4 className="font-xl font-semibold font-sans mt-3">Professional Services</h4>
                                <p className="w-[200px] text-[#252524] flex-wrap my-5">
                                    We support entrepreneurs, by offering professional services at a reduced cost
                                </p>
                            </div>
                            <Link to="/professional" className="flex justify-center items-center w-[108px] h-[45px] text-[#fff] font-medium bg-[#E8332C] p-3 w-28 h-11 rounded-md mt-5">
                                Learn more
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ y: 50}} transition={{ duration: 0.5, ease: "easeOut" }} className="flex flex-col w-[220px] h-[350px] bg-[#F0F0F0] p-5 mt-5 rounded-lg">
                            <img src={images.board} alt="table" className="rounded-full" width="100px" height="100px" />
                            <div className="h-fit">
                                <h4 className="font-xl font-semibold font-sans mt-3">Training Programs</h4>
                                <p className="w-[200px] text-[#252524] flex-wrap my-3">
                                    Get involve, and participate in our training programs.
                                </p>
                            </div>
                            <Link className="flex justify-center items-center w-[108px] h-[45px] text-[#fff] font-medium bg-[#E8332C] p-3 w-28 h-11 rounded-md mt-3">
                                Learn more
                            </Link>
                        </motion.div>
                        </div>
                </div>
                
            </div>
        </>
    );
}
export default Services;