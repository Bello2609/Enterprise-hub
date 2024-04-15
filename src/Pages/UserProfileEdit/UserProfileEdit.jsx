import React from "react";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { LuUpload } from "react-icons/lu";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaRegTimesCircle } from "react-icons/fa";
import * as images from "../../image"
import FormInput from "../../Components/FormInput/FormInput";



const UserProfileEdit= ()=>{
    return(
        <>
             <div className="flex flex-col bg-[#DFDFDF] items-center justify-center w-full h-fit py-10">
                <div className="flex flex-col bg-[#fff] rounded-b-2xl">
                    <div className="flex items-center justify-between  w-[807px] h-[150px] bg-gradient-to-r from-[#FFFCB8] to-[#F5D0CA]">
                        <div className="sm:hidden w-28 h-28"></div>
                        <p className="sm:hidden font-sans text-base font-medium pl-16">Good afternoon, Ogechi</p>
                        <img src={images.group6} className="sm:hidden h-full border-2 border-red-500" alt="" />
                    </div>
                    <div className="sm:flex sm:items-center rounded-full bg-[#ffffff] w-fit mt-[-80px] sm:ml-[320px] ml-10">
                        <img src={images.profilePic} alt="user profile picture" />
                    </div>
                    <div className="flex flex-col sm:items-center p-10">
                        <FormInput type="email" label="Email " />
                        <FormInput type="password" label="Password " />
                        <div className="flex sm:flex-col sm:items-center justify-evenly w-full">
                            <FormInput type="email" label="Gender " />
                            <FormInput type="password" label="Role " />
                        </div>
                        <div className="flex sm:flex-col sm:items-center justify-between w-full">
                            <FormInput type="email" label="First Name " />
                            <FormInput type="password" label="Last Name " />
                        </div>
                        <div className="flex sm:flex-col sm:items-center justify-between w-full">
                            <FormInput type="text" label="Phone Number " />
                            <FormInput type="text" label="Company Name " />
                        </div>
                        <Link className="flex justify-center items-center my-5 w-full h-[57px] text-[#252524] font-medium bg-[#F4F4F4] p-3 w-40 h-12 rounded-md ">
                            <span className="mr-2"><LuUpload /></span>CAC Registration.pdf<span className="ml-2"><FaRegTimesCircle /></span>
                        </Link>
                        <Link className="flex justify-center items-center w-full h-[57px] text-[#252524] font-medium bg-[#F4F4F4] p-3 w-40 h-12 rounded-md ">
                            <span className="mr-2"><LuUpload /></span>Valid Card.pdf<span className="ml-2"><FaRegTimesCircle /></span>
                        </Link>
                    </div>
                    
                </div>
                <div className="flex flex-col w-[807px] h-fit bg-[#fff] rounded-2xl mt-5">
                    <div className="flex sm:flex-col justify-evenly items-center">
                        <div className="flex flex-col font-sans justify-center py-10">
                            <h4 className="font-sans text-base text-[#616161] font-semibold">Current Plan</h4>
                            <p className="text-[#252524] font-semibold text-lg flex items-center"><span className="text-[#81C167] text-2xl"><IoCheckmarkCircle /></span>Enterprise Hubs Virtual Office</p>
                            <h4 className="text-3xl font-bold text-[#252524] my-3">₦107,500/annum</h4>
                            <p className="text-sm font-light text-[#252524]">Next billing date is 24th September, 2024</p>
                        </div>
                        <div className="flex flex-col">
                            <Link className="flex justify-center items-center border border-[#CBCBCB] w-60 h-[57px] text-[#252524] font-medium bg-[#F4F4F4] p-3 w-40 h-12 rounded-md ">
                                View Receipt📄
                            </Link>
                            <Link className="flex justify-center items-center mt-3 border border-[#CBCBCB] w-60 h-[57px] text-[#E8332C] font-medium bg-[#F4F4F4] p-3 w-40 h-12 rounded-md ">
                                Cancel Plan
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserProfileEdit;