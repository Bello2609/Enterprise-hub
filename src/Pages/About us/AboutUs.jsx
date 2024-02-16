import React from "react";
import * as images from "../../image";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const AboutUs  = ()=>{
    return (
        <>
            <div className="flex flex-col w-full">
                <div className="flex justify-evenly my-10">
                    <h4 className="flex-wrap w-[517px] text-5xl font-bold text-[#252524] text-wrap">
                        A system that is redefining the way we <h4 className="text-[#56923E]">live, work and learn.</h4>
                    </h4>
                    <p className="w-[413px] flex-wrap font-normal text-base text-[#252524] my-4">
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
                <div className="flex  justify-evenly bg-[#72B955] w-full h-fit">
                    <div className="flex">
                        <img src={images.frame38} alt="frame" className="w-[359px] h-[337px] mt-10" />
                    </div>
                    <div className="flex flex-col w-fit justify-between items-center">
                        <img src={images.Group39534} className="w-[519px] h-[312px] mt-[-100px]" alt="group" />
                        <img src={images.Maskgroup1} alt="mask group" />
                    </div>

                </div> <div className="flex flex-col py-10">
                    <div className="w-full">
                        <img src={images.Qotes} alt="quotes" className="pl-24 border-2 border-red-500" />
                    </div>
                    <div className="flex justify-evenly">
                        <div className="flex flex-col mt-10">
                            <p className="font-sans font-bold text-xl w-[216px] flex-wrap">
                                What our customers are saying
                            </p>
                            <div className="flex text-2xl">
                                <p><IoIosArrowBack /></p>
                                <p className="text-[#DE2223]"><IoIosArrowForward /></p>
                            </div>
                        </div>
                        <div className="flex flex-col font-sans">
                            <p className="font-normal text-xl w-[520px]">
                                Working from Enterprise Hubs has been amazing, the facilities and staff are great, 
                                likewise the working space is comfortable with good ambience
                            </p>
                            <div className="flex flex-col mt-5">
                                <p className="text-lg font-bold text-[#FF4B4D]">Funmi Osibaja</p>
                                <p className="text-base font-medium text-[#616161]">Stargate Chauffeur</p>
                            </div>
                        </div>
                        <div className="flex flex-col font-sans bg-[#ffffff] opacity-25">
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
                    </div>
                  </div>
            </div>
        </>
    )
}
export default AboutUs;