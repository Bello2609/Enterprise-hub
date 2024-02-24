import React from "react";
import * as images from "../../image";
import { FaArrowRight } from "react-icons/fa6";

const Articles = ()=>{
    return(
        <>
            <div className="flex flex-col items-center bg-[#F3F9F1] py-20">
                <div className="flex justify-start items-center  w-full px-24 my-10">
                    <h4 className="flex-wrap text-3xl font-bold text-[#252524]">
                        Articles from us
                    </h4>
                    <p className="flex items-center flex-wrap underline font-normal text-base text-[#C7C7C7] my-5 mx-5">
                        News<span><FaArrowRight /></span>
                    </p>
                    <p className="flex items-center flex-wrap underline font-normal text-base text-[#C7C7C7] my-5">
                        Trends<span><FaArrowRight /></span>
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col bg-[#fff] col-span-2 bg-[url('/src/assets/roomInterior.png')] h-[446px] w-[757px] rounded-xl p-10">
                            {/* <div className="bg-[#000000] w-full h-full opacity-40 rounded-xl"> */}
                                <p className="font-sans text-base text-[#81C167] font-bold">
                                    ARTICLE
                                </p>
                                <h4 className="font-sans font-bold text-xl text-[#ffffff] w-[312px] my-5">
                                    Enterprise Hubs Hosts Baykins Pharmacy
                                </h4>
                                <p className="text-[#DEDEDE] font-sans font-normal w-[301px]">
                                    We had the pleasure of serving Baykins Pharmacy with our best as they held 
                                    their staff retreat on Friday September …
                                </p>
                            {/* </div> */}
                        </div>
                        <div className="flex flex-col bg-[#fff] rounded-xl border border-[#DADADA] h-fit">
                            <img src={images.manbag} alt="A man carrying a bag" className="rounded-t-xl" />
                            <div className="p-8">
                                <p className="font-sans text-base text-[#81C167] font-bold">
                                    NEWS
                                </p>
                                <h4 className="font-sans font-bold text-xl text-[#252524] w-[312px] my-5">
                                    Enterprise Hubs Hosts Baykins Pharmacy
                                </h4>
                                <p className="text-[#616161] font-sans font-normal w-[301px]">
                                    We had the pleasure of serving Baykins Pharmacy with our best as 
                                    they held their staff retreat on Friday September …
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col  bg-[#fff] rounded-xl border border-[#DADADA] h-fit">
                            <img src={images.manbag} alt="A man carrying a bag" className="rounded-t-xl" />
                            <div className="p-8">
                                <p className="font-sans text-base text-[#81C167] font-bold">
                                    NEWS
                                </p>
                                <h4 className="font-sans font-bold text-xl text-[#252524] w-[312px] my-5">
                                    Enterprise Hubs Hosts Baykins Pharmacy
                                </h4>
                                <p className="text-[#616161] font-sans font-normal w-[301px]">
                                    We had the pleasure of serving Baykins Pharmacy with our best as 
                                    they held their staff retreat on Friday September …
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col bg-[#fff] rounded-xl border border-[#DADADA] h-fit">
                            <img src={images.manbag} alt="A man carrying a bag" className="rounded-t-xl" />
                            <div className="p-8">
                                <p className="font-sans text-base text-[#81C167] font-bold">
                                    NEWS
                                </p>
                                <h4 className="font-sans font-bold text-xl text-[#252524] w-[312px] my-5">
                                    Enterprise Hubs Hosts Baykins Pharmacy
                                </h4>
                                <p className="text-[#616161] font-sans font-normal w-[301px]">
                                    We had the pleasure of serving Baykins Pharmacy with our best as 
                                    they held their staff retreat on Friday September …
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col bg-[#fff] rounded-xl border border-[#DADADA] h-fit">
                            <img src={images.manbag} alt="A man carrying a bag" className="rounded-t-xl" />
                            <div className="p-8">
                                <p className="font-sans text-base text-[#81C167] font-bold">
                                    NEWS
                                </p>
                                <h4 className="font-sans font-bold text-xl text-[#252524] w-[312px] my-5">
                                    Enterprise Hubs Hosts Baykins Pharmacy
                                </h4>
                                <p className="text-[#616161] font-sans font-normal w-[301px]">
                                    We had the pleasure of serving Baykins Pharmacy with our best as 
                                    they held their staff retreat on Friday September …
                                </p>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
}

export default Articles;