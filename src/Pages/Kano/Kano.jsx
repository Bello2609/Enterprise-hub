import React from "react";
import * as images from "../../image";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const officeData = [
    {
        officeImage: images.office1,
        officeName: "Executive Office",
        officeInfo: "Elegance redefined; elevate your work in executive comfort"
    },
    {
        officeImage: images.office2,
        officeName: "Meeting Rooms",
        officeInfo: "Innovate and collaborate with tailored meeting spaces for success"
    },
    {
        officeImage: images.office2,
        officeName: "Workstation",
        officeInfo: "Your personal oasis: single workstations tailored to you"
    },
]
const Kano = ()=>{
    return(
        <>
            <div className="flex flex-col">
                <div className="flex w-full h-[388px] bg-[#72B955]"></div>
                <div className="flex flex-col items-center my-10">
                    <div className="flex items-center justify-between my-10">
                        <div className="flex flex-col leading-[25px]">
                            <h4 className="flex-wrap w-[517px] text-5xl font-bold text-[#252524]">
                                Enterprise Hubs Kano GRA
                            </h4>
                            <p className="w-[413px] flex-wrap font-normal text-base text-[#252524] my-4">
                                Enterprise Hubs Kano GRA offers a range of cozy workspaces in the 
                                ancient commercial city of Kano. Conveniently located in the serene 
                                Tarauni GRA, Enterprise Hubs is pioneering flexible workspace and 
                                coworking in Kano, offering the same impeccable standards as its
                                flagship location in Victoria Island Lagos.
                            </p>
                        </div>
                        <img src={images.started1} alt="female picture" className="w-[458px] h-[375px]" />
                    </div>
                    <div className="flex  items-start justify-between">
                        <div>
                            <img src={images.started1} alt="female picture" className="w-[458px] h-[375px]" />
                        </div>
                        <div className="flex flex-col ml-16 leading-[25px]">
                            <p className="w-[413px] flex-wrap font-normal text-base text-[#252524] my-4">
                                This easily accessible spot boasts private offices, coworking lounge,
                                meeting rooms and dedicated desks, plus a huge parking garden. 
                                We also offer virtual office service giving you a prestigious 
                                address without the hassle of leasing and managing one yourself. 
                                Our virtual office service here is synchronized with Lagos and Abuja 
                                centers, giving you the option of functional addresses in the top 3
                                cities in Nigeria. Our digital portal allows you to search, select,
                                book, and pay for spaces and services from the comfort of your 
                                device.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center bg-[#F3F9F1] py-10">
                    <div>
                        <h4 className="flex-wrap w-[517px] text-5xl font-bold text-[#252524]">
                            Book our offices
                        </h4>
                    </div>
                        <div className="grid grid-cols-3 gap-3 my-10">
                            {
                                officeData.map(data=>{
                                    return(
                                        <motion.div whileHover={{ y: -10}} transition={{ duration: 0.5, ease: "easeOut" }} className="flex flex-col bg-[#fff] rounded-xl border border-[#DADADA] w-[270px] h-[300px] p-4">
                                            <img src={data.officeImage} alt="A man carrying a bag" className="rounded-t-xl w-[240px] h-[110px]" />
                                            <div className="h-[150px]">
                                                <p className="font-sans text-lg text-[#81C167] font-bold mt-3">
                                                    {data.officeName}
                                                </p>
                                                <p className="text-[#616161] text-base font-sans font-normal w-[230px] h-[60px] my-5">
                                                    {data.officeInfo}
                                                </p>
                                                <Link className="flex items-center mr-3 text-base font-semibold text-[#38997A]">
                                                    <motion.p whileHover={{ x: -10}} transition={{ duration: 0.5, ease: "easeOut" }}>Book Now </motion.p><motion.span whileHover={{ x: 10}} transition={{ duration: 0.5, ease: "easeOut" }}><HiOutlineArrowNarrowRight /></motion.span>
                                                </Link>
                                            </div>
                                        </motion.div>
                                    )
                                })
                            }
                        </div>
                </div>

            </div>
        </>
    );
}
export default Kano;