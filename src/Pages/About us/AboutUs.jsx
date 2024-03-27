import React from "react";
import * as images from "../../image";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const AboutUs  = ()=>{
    return (
        <>
            <div className="flex flex-col w-full">
                <div className="flex md:flex-col sm:flex-col justify-between md:items-center sm:items-center px-20 items-start my-10">
                    <h4 className="flex-wrap w-[517px] sm:w-[320px] text-5xl font-bold text-[#252524] text-wrap">
                        A system that is redefining the way we <h4 className="text-[#56923E]">live, work and learn.</h4>
                    </h4>
                    <p className="w-[413px] sm:w-[320px] md:mt-3 sm:mt-3 flex-wrap font-normal text-base text-[#252524] leading-[28px]">
                        Enterprise Hubs owned by Pedestal Africa Limited is an integrated network of 
                        online and physical resource centres for emerging enterprises in Nigeria and 
                        beyond. A platform for promotion of businesses across Africa, offering shared 
                        workspaces, virtual offices, contemporary business hubs, online B2B 
                        marketplace, business support services and a complete suite of enterprise 
                        development services.
                    </p>
                </div>
                <div className="w-full h-fit flex justify-center items-end ">
                    <div className="h-[388px] w-full bg-[url('/src/assets/image.png')] bg-no-repeat bg-center">
                        
                    </div>
                </div>
                <div className="flex  md:flex-col sm:flex-col justify-evenly md:items-center sm:items-center bg-[#72B955] w-full h-fit md:h-fit sm:h-fit">
                    <div className="flex md:mb-20 sm:mb-20">
                        <img src={images.frame38} alt="frame" className="w-[359px] h-[337px] mt-10" />
                    </div>
                    <div className="flex flex-col w-fit justify-between items-center">
                        <img src={images.Group39534} className="w-[519px] sm:w-fit h-[312px] sm:h-fit mt-[-100px] md:mt-0 sm:mt-0 sm:px-8" alt="group" />
                        <img src={images.Maskgroup1} alt="mask group" />
                    </div>

                </div> 
                <div className="flex flex-col  py-10 px-20 sm:px-0">
                    <div className="w-full">
                        <img src={images.Qotes} alt="quotes" className="pl-24 border-2 border-red-500" />
                    </div>
                    <div className="flex md:flex-col sm:flex-col justify-evenly md:ml-10 sm:mx-10">
                        <div className="flex flex-col mt-10">
                            <p className="font-sans font-bold text-xl w-[216px] flex-wrap">
                                What our customers are saying
                            </p>
                            <div className="flex lg:flex md:hidden sm:hidden text-2xl">
                                <p><IoIosArrowBack /></p>
                                <p className="text-[#DE2223]"><IoIosArrowForward /></p>
                            </div>
                        </div>
                        <div className="flex flex-col md:justify-start sm:justify-start font-sans">
                            <p className="font-normal text-xl w-[520px] sm:w-fit sm:mt-5">
                                Working from Enterprise Hubs has been amazing, the facilities and staff are great, 
                                likewise the working space is comfortable with good ambience
                            </p>
                            <div className="flex flex-col mt-5">
                                <p className="text-lg font-bold text-[#FF4B4D]">Funmi Osibaja</p>
                                <p className="text-base font-medium text-[#616161]">Stargate Chauffeur</p>
                            </div>
                        </div>
                        <div className="flex md:hidden sm:hidden flex-col font-sans bg-[#ffffff] opacity-25">
                            <p className="font-normal text-xl w-[400px] text-[#202020]">
                                The offices at Enterprise Hubs are airy, well-lit and very serene. 
                                I think the edge it has over over other co-working spaces is the proximity to Lekki 
                                and environs. If you want to work, read or study, please visit Enterprise Hubs. 
                                Their internet is fast, toilets are clean, kitchen is tidy and if you get board, they 
                                have a wide range of novels, books and journals in their study to choose from. If you 
                                enjoy reading, you will love this place. Their library is a treasure.
                            </p>
                            <div className="flex flex-col mt-5">
                                <p className="text-lg font-bold text-[#FF4B4D]">Funmi Osibaja</p>
                                <p className="text-base font-medium text-[#616161]">Stargate Chauffeur</p>
                            </div>
                        </div>   
                        <div className="md:flex sm:flex justify-between text-2xl">
                                <p><IoIosArrowBack /></p>
                                <p className="text-[#DE2223]"><IoIosArrowForward /></p>
                        </div>
                    </div>
                  </div>
            </div>
        </>
    )
}
export default AboutUs;