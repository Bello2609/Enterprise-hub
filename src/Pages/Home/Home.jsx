import React from "react";
import { Link } from "react-router-dom";
import * as images from "../../image";
import { FaArrowRightLong } from "react-icons/fa6";


const Home = ()=>{
    // const imagesss = images.bg1;
    return(
        <>
            <div className="flex flex-col w-full h-fit">
                {/* where entrepreneur go section */}
                <div className="flex w-full">
                    <div className="basis-1/2">
                        <div className="flex flex-col  bg-[#56923E] p-20">
                            <h4 className="flex-wrap w-[517px] text-6xl font-bold text-[#fff]">
                                Where entrepreneurs go to grow
                            </h4>
                            <p className="w-[413px] flex-wrap font-normal text-base text-[#ffffff] my-4">
                                We've redefined the landscape for emerging enterprises in Nigeria and 
                                beyond, offering a unique blend of online and physical resource centers 
                                designed to propel your business forward.
                            </p>
                            <Link className="flex justify-center items-center w-[176px] h-[57px] font-medium bg-[#ffffff] p-3 w-40 h-12 rounded-md ">
                                EXPLORE
                            </Link>
                        </div>
                        <div className="bg-[#72B955] h-[20px]"></div>
                    </div>
                    <div className="basis-1/2">
                        <div className="bg-[url('/src/assets/bg1.png')] bg-right bg-cover bg-no-repeat h-[525px]">
                            {/* <img src={images.bg1} alt="linkedin" className="h-full w-full" /> */}
                        </div>
                        <div className="bg-[#DE2223] h-[20px]"></div>
                    </div>
                </div>
                 {/* where entrepreneur go section ended */}
                 {/* what are you looking for section */}
                 <div className="flex flex-col h-[500px] p-16">
                    <h4 className="font-sans font-bold text-3xl text-[#252524]">
                        What are you looking for today?
                    </h4>
                    <div className="grid grid-cols-4 gap-3 h-fit">
                        <div className="flex flex-col w-[220px] h-[fit] bg-[#DFFFD4] p-5 mt-5">
                            <img src={images.table} alt="table" className="rounded-full" width="100px" height="100px" />
                            <h4 className="font-xl font-semibold font-sans mt-3">Office Space</h4>
                            <p className="w-[200px] my-3 text-[#252524] flex-wrap">We have state of the art office spaces to cater for your needs</p>
                            <Link className="flex justify-center items-center w-[176px] h-[57px] text-[#fff] font-medium bg-[#E8332C] p-3 w-28 h-11 rounded-md ">
                                Book now
                            </Link>
                        </div>
                        <div className="flex flex-col w-[220px] h-[fit] bg-[#FBF6AF] p-5 mt-5">
                            <img src={images.map} alt="table" className="rounded-full" width="100px" height="100px" />
                            <h4 className="font-xl font-semibold font-sans mt-3">Virtual Office</h4>
                            <p className="w-[200px] my-3 text-[#252524] flex-wrap">
                                Take control of your business, by having a business address in the heart of Lagos Nigeria.
                            </p>
                            <Link className="flex justify-center items-center w-[176px] h-[57px] text-[#fff] font-medium bg-[#E8332C] p-3 w-28 h-11 rounded-md ">
                                Book now
                            </Link>
                        </div>
                        <div className="flex flex-col w-[220px] h-[fit] bg-[#FFDEDD] p-5 mt-5">
                            <img src={images.tv} alt="table" className="rounded-full" width="100px" height="100px" />
                            <h4 className="font-xl font-semibold font-sans mt-3">Professional Services</h4>
                            <p className="w-[200px] my-3 text-[#252524] flex-wrap">
                                We support entrepreneurs, by offering professional services at a reduced cost
                            </p>
                            <Link className="flex justify-center items-center w-[176px] h-[57px] text-[#fff] font-medium bg-[#E8332C] p-3 w-28 h-11 rounded-md ">
                                Book now
                            </Link>
                        </div>
                        <div className="flex flex-col w-[220px] h-[fit] bg-[#F0F0F0] p-5 mt-5">
                            <img src={images.board} alt="table" className="rounded-full" width="100px" height="100px" />
                            <h4 className="font-xl font-semibold font-sans mt-3">Training Programs</h4>
                            <p className="w-[200px] my-3 text-[#252524] flex-wrap">
                                Get involve, and participate in our training programs.
                            </p>
                            <Link className="flex justify-center items-center w-[176px] h-[57px] text-[#fff] font-medium bg-[#E8332C] p-3 w-28 h-11 rounded-md ">
                                Book now
                            </Link>
                        </div>
                    </div>
                 </div>
                  {/* what are you looking for section end*/}
                  {/* a system that is redefining */}
                  <div className="bg-[url('/src/assets/interior.png')] w-full bg-no-repeat bg-center h-[506px] flex items-end">
                    <div className="flex flex-col bg-[#C81F20] h-[435px] w-[633px] ml-16">
                        <div className="flex w-12 h-12 justify-end w-[633px]">
                            <div className="flex bg-[#E1D634] w-12 h-12">
                                
                            </div>
                        </div>
                        <div className="flex flex-col flex-wrap p-10 font-sans text-[#fff]">
                            <h4 className="text-3xl font-bold  flex-wrap w-[360px]">
                                A system that is redefining the way we live, work and learn.
                            </h4>
                            <p className="text-base w-[533px] my-3">
                                Enterprise Hubs owned by Pedestal Africa Limited is an integrated 
                                network of online and physical resource centres for emerging enterprises 
                                in Nigeria and beyond. A platform for promotion of businesses across Africa, 
                                offering shared workspaces, virtual offices, contemporary business hubs, 
                                online B2B marketplace, business support services and a complete suite of 
                                enterprise development services.
                            </p>
                            <div className="flex items-center">
                                <p className="text-base font-medium">
                                    More about us 
                                </p>
                                <span className="ml-3"><FaArrowRightLong /></span>
                            </div>
                        </div>
                    </div>
                  </div>
                  {/* a system that is redefining end*/}
                  {/* why choose us */}
                  <div className="flex w-full h-[400px]">
                    <div className="basis-1/4 bg-[#EFE553] ">
                        <div className="flex items-end justify-center w-full h-full">
                            <img src={images.maskgroup} alt="masked group"  width="186px" height="202px"/>
                        </div>
                    </div>
                    <div className="basis-1/2">
                        <div className="flex flex-col h-full justify-center ml-16">
                            <h4 className="text-[#252524] font-sans font-bold text-4xl">
                                Why Choose Us
                            </h4>
                            <p className="text-base font-normal font-sans flex-wrap w-[510px] mt-5">
                                Enterprise Hubs has built a system to unleash collaboration, creativity 
                                and inspiration from passionate entrepreneurs and business people, most 
                                especially a community that promotes learning, collaboration and growth. 
                                Our evolutive virtual and physical offices offer a highly functional infrastructure,
                                exceptional design that enhances your creativity and fosters productivity.
                            </p>
                        </div>
                    </div>
                    <div className="basis-1/4">
                        <div className="flex justify-end w-full h-full">
                            <img src={images.group6} alt="group6" />
                        </div>
                    </div>
                  </div>
                  {/* why choose us end */}
                  {/* building area start */}
                  <div className="flex flex-col items-center">
                    <h4 className="text-[#252524] font-sans font-bold text-4xl">
                        Building & Area
                    </h4>
                    <p className="text-base font-normal font-sans flex-wrap w-[510px] mt-5">
                        Our private offices, dedicated desks, virtual offices and co-working<br /> 
                        spaces provide flexible solutions for passionate people.
                    </p>
                    <p className="text-base font-normal font-sans justify-center flex-wrap w-[510px] mt-5">
                        spaces provide flexible solutions for passionate people.
                    </p>
                  </div>
                  {/* building area end */}

            </div>
        </>
    );
}
export default Home;