import React from "react";
import * as images from "../../image";

const AllBlog = ()=>{
    return(
        <>
            <div className="flex flex-col items-center bg-[#F3F9F1] py-20">
                <div className="flex justify-evenly px-20 sm:px-10 w-full">
                    <div className="flex flex-col items-start w-full">
                        <h4 className="flex-wrap w-[517px] sm text-left text-6xl font-bold text-[#252524]">
                            News and Insights
                        </h4>
                        <p className="w-[413px] sm:w-fit flex-wrap font-normal text-base text-[#252524] my-5">
                            We regularly publish business tips and corporate articles for your 
                            consumption
                        </p>
                    </div>
                  
                </div>
                <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 px-2">
                        <div className="flex flex-col bg-[#fff] col-span-2 md:col-span-1 sm:col-span-1 bg-[url('/src/assets/roomInterior.png')] h-[446px] w-[757px] sm:w-fit  rounded-xl p-10">
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
export default AllBlog;