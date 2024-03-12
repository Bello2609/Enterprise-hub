import React from "react";
import * as images from "../../image";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
const Footer = ()=>{
    return(
        <>
            <div className="flex flex-col w-screen h-fit md:h-fit sm:h-fit bg-[#FFEBEA] justify-evenly overflow-x-hidden py-5">
                <div className="flex lg:flex-row md:flex-col sm:flex-col min-[500px]:flex-col justify-evenly md:items-start sm:items-start md:ml-10 sm:ml-10 mt-10">
                    <div>
                        <img src={images.Enterprise} alt="enterprise" />
                        <p className="w-72 flex-wrap text-[#616161] font-sans text-base my-3">
                            Enterprise Hubs owned by Pedestal Africa Limited is an integrated network 
                            of online and physical resource centres for emerging enterprises in 
                            Nigeria and beyondcd
                        </p>
                        <div className="flex text-[#DE2223] text-3xl">
                            <p><FaLinkedin /></p>
                            <p><AiFillInstagram /></p>
                            <p><FaFacebookSquare /></p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="text-base font-sans text-[#DE2223] font-bold">Visit Our Office</h4>
                        <div className="flex flex-col mt-3">
                            <h4 className="text-base font-sans text-[#252524] font-medium">LAGOS</h4>
                            <p className="flex-wrap w-[218px] text-base text-[#252524]">
                                Trinity Avenue by Landmark, Off Ligali Ayorinde, Victoria 
                                Island, Lagos.
                            </p>
                        </div>
                        <div className="flex flex-col mt-10">
                            <h4 className="text-base font-sans text-[#252524] font-medium">KANO</h4>
                            <p className="flex-wrap w-[218px] text-base text-[#252524]">
                                 14, Ibrahim Dabo Road, Tarauni G.R.A, Kano State.
                            </p>
                        </div>
                        <div className="flex flex-col mt-3">
                            <h4 className="text-base font-sans text-[#252524] font-medium">ABUJA</h4>
                            <p className="flex-wrap w-[218px] text-base text-[#252524]">
                                Ground Floor, Wells Carlton Hotel. 8 Gado Nasko Street, Asokoro, Abuja
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="text-base font-sans text-[#DE2223] font-bold">CONTACT US</h4>
                        <div className="flex flex-col mt-3 font-normal">
                            <p className="flex-wrap w-[218px] text-base text-[#252524]">
                             📧 info@enterprisehubs.com 
                            </p>
                            <p className="flex-wrap w-[218px] text-base text-[#252524]">
                            📞 +2349060009685 
                            </p>
                            <p className="flex-wrap w-[218px] text-base text-[#252524]">
                            📞 +2348122244752
                            </p>
                            <p className="flex-wrap w-[218px] text-base text-[#252524]">
                            📞 +2348095862293
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="text-base font-sans text-[#DE2223] font-bold">HELP AND SUPPORT</h4>
                        <div className="flex flex-col mt-3 font-normal">
                            <p className="flex-wrap w-[218px] text-base text-[#252524]">
                                Terms & Conditions
                            </p>
                            <p className="flex-wrap w-[218px] text-base text-[#252524]">
                                Member Registration
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col font-sans font-medium text-base mx-16">
                    <div className="bg-[#F8C3C2] h-px mt-3"></div>
                    <p className="text-[#616161] mt-5 text-base font-normal">Copyright ® 2024 Enterprise Hubs. All right reserved.</p>
                </div>
            </div>
        </>
    ); 
}
export default Footer;