import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import * as Images from "../../image";
const TabItems = ["All", "Training Room", "Board Room", "General Offices", "Privates Offices", "Cafetaria", "Executive Offices", "Events", "Courtyard", "Kano Offices"]
const Gallery = ()=>{
    return(
        <>
            <div className="flex flex-col">
                <div className="bg-[url('/src/assets/gallery/gallery.png')] w-full h-[388px] bg-no-repeat bg-center flex items-center pl-20">
                    <h4 className="font-bold text-[#fff] text-6xl">Gallery</h4>
                </div>
                {/* tabs to filter the gallery */}
                <div className="flex flex-col ml-20 mr-20 border border-green-500">
                    <div className="flex items-center my-10 justify-between  w-[1150px] border border-red-500">
                        <div className="flex items-center justify-center cursor-pointer  w-[40px] h-[40px] border border-[#DFDFDF] rounded-full">
                            <p className="text-[#DFDFDF]"><IoIosArrowBack /></p>
                        </div>
                        <div className="flex items-center w-[1100px]  overflow-x-auto scroll-smooth">
                            {TabItems.map((item, index) => (
                                <span key={index} className="flex items-center p-5 text-nowrap  border border-[#DFDFDF] rounded-full w-fit h-[40px] font-semibold text-[#616161] ml-5">
                                    {item}
                                </span>
                            ))}
                        </div>
                        <div className="flex items-center justify-center cursor-pointer w-[40px] h-[40px] border border-[#DFDFDF] rounded-full">
                            <p className="text-[#DFDFDF]"><IoIosArrowForward /></p>
                        </div>
                    </div>
                    {/* gallery section */}
                    <div className="flex border border-red-500 my-10">
                        <div className="flex flex-col  w-[50%] h-fit">
                            <div className="flex mb-1">
                                <div className="flex justify-end items-end w-[356px] h-[383px] mr-1 bg-red-500">
                                    <div className="flex items-center justify-center w-[36px] h-[36px] bg-[#fff] m-2"><img src={Images.vector} alt="Dash square" /></div>
                                </div>
                                <div className="flex justify-end items-end w-[272px] h-[383px] bg-red-500">
                                    <div className="flex items-center justify-center w-[36px] h-[36px] bg-[#fff] m-2"><img src={Images.vector} alt="Dash square" /></div>
                                </div>
                            </div>
                            <div className="flex mb-1">
                                <div className="flex justify-end items-end w-[356px] h-[383px] mr-1 bg-red-500">
                                    <div className="flex items-center justify-center w-[36px] h-[36px] bg-[#fff] m-2"><img src={Images.vector} alt="Dash square" /></div>
                                </div>
                                <div className="flex justify-end items-end w-[272px] h-[383px] bg-red-500">
                                    <div className="flex items-center justify-center w-[36px] h-[36px] bg-[#fff] m-2"><img src={Images.vector} alt="Dash square" /></div>
                                </div>
                            </div>
                            <div className="flex justify-end items-end w-[594px] h-[383px] mb-1 bg-blue-500">
                                <div className="flex items-center justify-center w-[36px] h-[36px] bg-[#fff] m-2"><img src={Images.vector} alt="Dash square" /></div>
                            </div>
                            <div className="flex">
                                <div className="flex justify-end items-end w-[356px] h-[383px] mr-1 bg-red-500">
                                    <div className="flex items-center justify-center w-[36px] h-[36px] bg-[#fff] m-2"><img src={Images.vector} alt="Dash square" /></div>
                                </div>
                                <div className="flex justify-end items-end w-[272px] h-[383px] bg-red-500">
                                    <div className="flex items-center justify-center w-[36px] h-[36px] bg-[#fff] m-2"><img src={Images.vector} alt="Dash square" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-[50%] h-fit ml-1">
                            <div className="flex justify-end items-end w-[495px] h-[383px] mb-1 bg-red-500">
                                <div className="flex items-center justify-center w-[36px] h-[36px] bg-[#fff] m-2"><img src={Images.vector} alt="Dash square" /></div>
                            </div>
                            <div className="flex mb-1">
                                <div className="flex justify-end items-end w-[236.71px] h-[406px] mr-1 bg-red-500">
                                    <div className="flex items-center justify-center w-[36px] h-[36px] bg-[#fff] m-2"><img src={Images.vector} alt="Dash square" /></div>
                                </div>
                                <div className="flex justify-end items-end w-[250.96px] h-[406px] bg-red-500">
                                    <div className="flex items-center justify-center w-[36px] h-[36px] bg-[#fff] m-2"><img src={Images.vector} alt="Dash square" /></div>
                                </div>
                            </div>
                            <div className="flex justify-end items-end w-[495px] h-[260px] mb-1 bg-green-500">
                                <div className="flex items-center justify-center w-[36px] h-[36px] bg-[#fff] m-2"><img src={Images.vector} alt="Dash square" /></div>
                            </div>
                            <div className="flex">
                                <div className="flex justify-end items-end w-[236px] h-[334px] mr-1 bg-red-500">
                                    <div className="flex items-center justify-center w-[36px] h-[36px] bg-[#fff] m-2"><img src={Images.vector} alt="Dash square" /></div>
                                </div>
                                <div className="flex justify-end items-end w-[250px] h-[334px] bg-red-500">
                                    <div className="flex items-center justify-center w-[36px] h-[36px] bg-[#fff] m-2"><img src={Images.vector} alt="Dash square" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
export default Gallery;