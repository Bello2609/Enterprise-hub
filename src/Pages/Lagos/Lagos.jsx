import React from "react";
import * as images from "../../image";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

const officeData = [
    {
        officeImage: images.office1,
        officeName: "Private Office",
        officeInfo: "We have state of the art office spaces to cater for your needs"
    },
    {
        officeImage: images.office2,
        officeName: "Hustle Hall(Co-working Hub)",
        officeInfo: "Elevate your productivity in a collaborative co-working space"
    },
    {
        officeImage: images.office3,
        officeName: "The Beehive(Dedicated Desks)",
        officeInfo: "Tailored workstations for uninterrupted focus"
    },
    {
        officeImage: images.office3,
        officeName: "Training Rooms",
        officeInfo: "Empower your team with purpose-built training spaces"
    },
    {
        officeImage: images.office1,
        officeName: "Eden(Event Courtyard)",
        officeInfo: "Unleash creativity, host unforgettable events in Eden"
    },
    {
        officeImage: images.office2,
        officeName: "The Pedestal(Board Room)",
        officeInfo: "Elevate your meetings with the Pedestal Board Room experience"
    },
    {
        officeImage: images.office3,
        officeName: "The Flat",
        officeInfo: "Relaxed atmosphere, professional Impact"
    }
]
const Lagos = ()=>{
    return(
        <>
            <div className="flex flex-col">
                <div className="flex w-full h-[388px] bg-[#72B955]"></div>
                <div className="flex flex-col items-center my-10">
                    <div className="flex items-center justify-between my-10">
                        <div className="flex flex-col">
                            <h4 className="flex-wrap w-[517px] text-5xl font-bold text-[#252524]">
                                Enterprise Hubs Victoria Island, Lagos
                            </h4>
                            <p className="w-[413px] flex-wrap font-normal text-base text-[#252524] my-4 leading-[25px]">
                                A serene privately managed co-working facility and entrepreneurship 
                                support center, offering virtual office services, co-working spaces, 
                                private offices, meeting facilities, a garden and hosting entrepreneurship 
                                programs and resources.
                            </p>
                        </div>
                        <img src={images.started1} alt="female picture" className="w-[458px] h-[375px]" />
                    </div>
                    <div className="flex  items-center justify-between">
                        <div>
                            <img src={images.started1} alt="female picture" className="w-[458px] h-[375px]" />
                        </div>
                        <div className="flex flex-col ml-16 leading-[25px]">
                            <p className="w-[413px] flex-wrap font-normal text-base text-[#252524] my-4">
                                Located in Victoria Island, downtown Lagos Nigeria, we boast of 
                                super-fast fiber optic internet, ample parking and dining spaces 
                                and roomy workspaces. Enterprise Hubs also offers back-office professional 
                                services to support entrepreneurs and innovators.
                            </p>
                            <p className="w-[413px] flex-wrap font-normal text-base text-[#252524] my-4">
                                Our virtual office service gives you a prestigious business address 
                                without the hassle of renting and equipping one yourself. This service 
                                is synchronized with our Abuja and Kano centers, giving you the option of one or 
                                all business addresses in the top 3 cities in Nigeria.
                            </p>
                            <p className="w-[413px] flex-wrap font-normal text-base text-[#252524] my-4">
                                Our digital portal allows you to search, select, book, and pay for spaces
                                and services from the comfort of your device.
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
                        <div className="grid grid-cols-4 gap-3 my-10">
                            {
                                officeData.map(data=>{
                                    return(
                                        <motion.div whileHover={{ y: -20}} transition={{ duration: 0.5, ease: "easeOut" }} className="flex flex-col bg-[#fff] rounded-xl border border-[#DADADA] w-[270px] h-[350px] p-4">
                                            <img src={data.officeImage} alt="A man carrying a bag" className="rounded-t-xl w-[240px] h-[110px]" />
                                            <div className="h-[200px]">
                                                <p className="font-sans text-lg text-[#81C167] font-bold mt-3 w-[200px]  border-red-500">
                                                    {data.officeName}
                                                </p>
                                                <p className="text-[#616161] text-base font-sans font-normal w-[220px] h-[60px] my-5">
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
export default Lagos;