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
                        <a href="/">
                            <img src={images.Enterprise} alt="enterprise" className="w-[125px] h-[44px]" />
                        </a>
                        <p className="w-72 flex-wrap text-[#616161] font-sans text-base my-3">
                            Enterprise Hubs owned by Pedestal Africa Limited is an integrated network 
                            of online and physical resource centres for emerging enterprises in 
                            Nigeria and beyond.
                        </p>
                        <div className="flex text-[#DE2223] text-3xl">
                            <p><FaLinkedin /></p>
                            <p className="sm:mx-2"><AiFillInstagram /></p>
                            <p><FaFacebookSquare /></p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:mt-5">
                        <h4 className="text-base font-sans text-[#DE2223] font-bold">Visit Our Office</h4>
                        <div className="flex flex-col mt-3">
                            <h4 className="text-base font-sans text-[#252524] font-medium">LAGOS</h4>
                            <a href="https://maps.app.goo.gl/S8rswaq5NSrgv3a1A" className="flex-wrap w-[218px] text-base text-[#252524] hover:text-red-500">
                                Trinity Avenue by Landmark, Off Ligali Ayorinde, Victoria 
                                Island, Lagos.
                            </a>
                        </div>
                        <div className="flex flex-col my-8">
                            <h4 className="text-base font-sans text-[#252524] font-medium">KANO</h4>
                            <a href="https://maps.app.goo.gl/ZRP9cAMtxhBy1miY7" className="flex-wrap w-[218px] text-base text-[#252524] hover:text-red-500">
                                 14, Ibrahim Dabo Road, Tarauni G.R.A, Kano State.
                            </a>
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-base font-sans text-[#252524] font-medium">ABUJA</h4>
                            <a href="https://maps.app.goo.gl/hModQscm1pH5W8yX9" className="flex-wrap w-[218px] text-base text-[#252524] hover:text-red-500">
                                Ground Floor, Wells Carlton Hotel. 8 Gado Nasko Street, Asokoro, Abuja
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col sm:mt-5">
                        <h4 className="text-base font-sans text-[#DE2223] font-bold">CONTACT US</h4>
                        <div className="flex flex-col mt-3 font-normal">
                            <a href="mailto:info@enterprisehubs.com" className="flex-wrap w-[218px] text-base text-[#252524] hover:text-red-500">
                             📧 info@enterprisehubs.com 
                            </a>
                            <a href="tel:+2349060009685" className="flex-wrap w-[218px] text-base text-[#252524] hover:text-red-500">
                            📞 +2349060009685 
                            </a >
                            <a href="tel:+2348122244752" className="flex-wrap w-[218px] text-base text-[#252524] hover:text-red-500">
                            📞 +2348122244752
                            </a >
                            <a href="tel:+2348095862293" className="flex-wrap w-[218px] text-base text-[#252524] hover:text-red-500">
                            📞 +2348095862293
                            </a >
                        </div>
                    </div>
                    <div className="flex flex-col sm:mt-5">
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
                <div className="flex flex-col font-sans font-medium text-base mx-16 sm:mx-10">
                    <div className="bg-[#F8C3C2] h-px mt-3"></div>
                    <p className="text-[#616161] mt-5 text-base font-normal">Copyright ® 2024 Enterprise Hubs. All right reserved.</p>
                </div>
            </div>
        </>
    ); 
}
export default Footer;