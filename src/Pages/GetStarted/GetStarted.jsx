import React from "react";
import * as images from "../../image";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";


const GetStarted = ()=>{
    return(
        <>
            <div className="flex flex-col items-center my-20">
                <div className="flex sm:flex-col justify-between">
                    <div className="flex flex-col">
                        <h4 className="flex-wrap w-[517px] sm:w-fit text-5xl font-bold text-[#252524]">
                            We've got the perfect space for you
                        </h4>
                        <p className="w-[413px] flex-wrap font-normal text-base text-[#252524] my-4">
                            At Enterprise Hubs, we're all about making things easy and flexible. 
                            Whether you're looking for a permanent office for your team or just a 
                            virtual office address, we've got a spot waiting for you in our welcoming 
                            community.
                        </p>
                        <Link to="/get-started" className="flex p-3 mx-4 bg-[#DE2223] text-[#ffffff] w-48 h-12 rounded-md">
                            <img src={images.book} alt="book" className="mr-3" />Book your space
                        </Link>
                    </div>
                    <img src={images.started1} alt="female picture" className="w-[458px] h-[375px]" />
                </div>
                <div className="flex sm:flex-col justify-between my-10">
                    <img src={images.started2} alt="female picture" className="w-[458px] h-[375px]" />
                    <div className="flex flex-col ml-20">
                        <h4 className="flex-wrap w-[517px] text-5xl font-bold text-[#252524]">
                            Virtual Office
                        </h4>
                        <p className="w-[413px] flex-wrap font-normal text-base text-[#252524] my-4">
                            Take control of your business, by having a business address in the heart 
                            of Lagos Nigeria.
                        </p>
                        <Link to="/get-started" className="flex items-center justify-center p-3 mx-4 bg-[#DE2223] text-[#ffffff] w-60 h-12 rounded-md">
                            <span className="mr-2"><FaLocationDot /></span>Secure your virtual office 
                         </Link>
                    </div>
                </div>
                <div className="flex sm:flex-col justify-between">
                    <div className="flex flex-col jusitify-start">
                        <h4 className="flex-wrap w-[517px] text-5xl font-bold text-[#252524]">
                            Where entrepreneurs go to grow
                        </h4>
                        <p className="w-[413px] flex-wrap font-normal text-base text-[#252524] my-4">
                            We've redefined the landscape for emerging enterprises in Nigeria and 
                            beyond, offering a unique blend of online and physical resource centers
                             designed to propel your business forward.
                        </p>
                        <Link to="/get-started" className="flex items-center justify-center p-3 mx-4 bg-[#DE2223] text-[#ffffff] w-40 h-12 rounded-md">
                            Visit Website<span><GoArrowUpRight /></span>
                        </Link>
                    </div>
                    <img src={images.started3} alt="female picture" className="w-[458px] h-[375px]" />
                </div>
            </div>
        </>
    );
}
export default GetStarted;