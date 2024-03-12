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
        officeName: "Single Workstation",
        officeInfo: "Your personal oasis: single workstations tailored to you"
    }
]
const Abuja = ()=>{
    return(
        <>
            <div className="flex flex-col">
                <div className="flex w-full h-[388px] bg-[#72B955]"></div>
                <div className="flex flex-col items-center my-10">
                    <div className="flex items-center justify-between my-10">
                        <div className="flex flex-col">
                            <h4 className="flex-wrap w-[517px] text-5xl font-bold text-[#252524]">
                                Enterprise Hubs QSC, Abuja
                            </h4>
                            <p className="w-[413px] flex-wrap font-normal text-base text-[#252524] my-4 w-[491px] leading-[25px]">
                            Enterprise Hubs has a new service - Enterprise Hubs QSC – short for Quick Service Center. Enterprise Hubs QSC is a “micro hub” where you can access all the services you need when on the move for business:
                            <li>Desktop design and print</li>
                            <li>Document handling</li>
                            <li>Travel booking</li>
                            <li>Dispatch or professional services</li>
                            </p>
                        </div>
                        <img src={images.started1} alt="female picture" className="w-[458px] h-[375px]" />
                    </div>
                    <div className="flex justify-between items-start">
                        <div>
                            <img src={images.started1} alt="female picture" className="w-[458px] h-[375px]" />
                        </div>
                        <div className="flex flex-col ml-16">
                            <p className="w-[413px] flex-wrap font-normal text-base text-[#252524] my-4 leading-[25px]">
                                In addition, the Abuja QSC offers 3 beautiful executive offices 
                                available for quarterly use. You can access this service at the 
                                business center of the beautiful Wells Carlton Hotel Asokoro Abuja.
                                For more information you can also simply call the Abuja MSC hotlines+234 
                                80 958 62293 or send us a message at ehubsmsc@gmail.com.
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
                        <div className="grid grid-cols-2 gap-3 my-10">
                            {
                                officeData.map(data=>{
                                    return(
                                        <motion.div whileHover={{ y: -20}} transition={{ duration: 0.5, ease: "easeOut" }} className="flex flex-col bg-[#fff] rounded-xl border border-[#DADADA] w-[270px] h-fit p-4">
                                            <img src={data.officeImage} alt="A man carrying a bag" className="rounded-t-xl w-[240px] h-[110px]" />
                                            <div className="h-[150px]">
                                                <p className="font-sans text-lg text-[#81C167] font-bold mt-3">
                                                    {data.officeName}
                                                </p>
                                                <p className="text-[#616161] text-base font-sans font-normal w-[230px] my-5">
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
export default Abuja;