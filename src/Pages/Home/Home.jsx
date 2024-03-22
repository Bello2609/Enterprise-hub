import React, {useState} from "react";
// import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import * as images from "../../image";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Accorddion from "../../Components/Accordion/Accordion";



const Home = ()=>{
    // const imagesss = images.bg1;
    const [activeIndex, setActiveIndex] = useState(null);
    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
      };
    return(
        <>
            <div className="flex flex-col w-full h-fit">
                {/* where entrepreneur go section */}
                <div className="flex w-full justify-evenly">
                    <div className="basis-1/2">
                        <div className="flex flex-col  bg-[#56923E] flex-wrap px-20 sm:px-10 py-20">
                            <h4 className="w-[517px] sm:w-fit text-6xl font-bold text-[#fff] leading-[63px]">
                                Where entrepreneurs go to grow
                            </h4>
                            <p className="w-[413px] sm:w-fit flex-wrap font-normal text-base text-[#ffffff] my-8">
                                We've redefined the landscape for emerging enterprises in Nigeria and 
                                beyond, offering a unique blend of online and physical resource centers 
                                designed to propel your business forward.
                            </p>
                            <motion.div 
                                className="flex justify-center items-center w-[176px] h-[57px] font-medium bg-[#ffffff] p-3 w-40 h-12 rounded-md"
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                                transition={{  ease: "easeInOut" }}>
                                    <Link>
                                        Explore
                                    </Link>
                            </motion.div>
                           
                        </div>
                        <div className="bg-[#72B955] h-[20px]"></div>
                    </div>
                    <div className="basis-1/2">
                        <div className="bg-[url('/src/assets/bg1.png')] bg-right bg-cover bg-no-repeat h-[565px]">
                            {/* <img src={images.bg1} alt="linkedin" className="h-full w-full" /> */}
                        </div>
                        <div className="bg-[#DE2223] h-[20px]"></div>
                    </div>
                </div>
                 {/* where entrepreneur go section ended */}
                 {/* what are you looking for section */}
                 <div className="flex flex-col md:items-center sm:items-center  h-fit p-16">
                    <h4 className="font-sans font-bold text-3xl text-[#252524] mb-5">
                        What are you looking for today?
                    </h4>
                    <div className="grid md:grid-cols-2 sm:grid-cols-1 grid-cols-4 gap-3 h-fit">
                        <div 
                            className="flex flex-col w-[280px] sm:w-[285px] h-[350px] sm:h-[360px] bg-[#DFFFD4] p-5 sm:p-10 mt-5 sm:mt-5 rounded-lg">
                            <img src={images.table} alt="table" className="rounded-full" width="100px" height="100px" />
                            <div className="h-fit">
                                <h4 className="font-xl font-semibold  font-sans mt-3">Office Space</h4>
                                <p className="w-[220px] text-[#252524] text-base flex-wrap leading-[24px] my-3">We have state of the art office spaces to cater for your needs</p>
                            </div>
                            <Link to="/book-space" className="flex justify-center items-center w-[108px] h-[45px] text-[#fff] font-medium bg-[#E8332C] p-3 w-28 h-11 rounded-md mt-16 mb-4">
                                Book now
                            </Link>
                        </div>
                        <div 
                            className="flex flex-col w-[280px] sm:w-[285px] h-[350px] sm:h-[370px] bg-[#FBF6AF] p-5 sm:p-10 mt-5 sm:mt-5 rounded-lg">
                            <img src={images.map} alt="table" className="rounded-full" width="100px" height="100px" />
                            <div className="h-fit">
                                <h4 className="font-xl font-semibold font-sans mt-2">Virtual Office</h4>
                                <p className="w-[220px] h-[72px] text-base  text-[#252524] flex-wrap my-5">
                                    Take control of your business,by having a business address in the heart of Lagos Nigeria. 
                                </p>
                            </div>
                            <Link to="/book-space"  className="flex justify-center items-center w-[108px] h-[45px] text-[#fff] font-medium bg-[#E8332C] p-3 w-28 h-11 rounded-md mt-5">
                                Book now
                            </Link>
                        </div>
                        <div
                            className="flex flex-col w-[280px] sm:w-[285px] h-[350px] sm:h-[370px] sm:h-[360px] bg-[#FFDEDD] p-5 sm:p-10 mt-5 sm:mt-5 rounded-lg">
                            <img src={images.tv} alt="table" className="rounded-full" width="100px" height="100px" />
                            <div className="h-fit">
                                <h4 className="font-xl font-semibold font-sans mt-3">Professional Services</h4>
                                <p className="w-[220px] text-[#252524] text-base flex-wrap my-5">
                                    We support entrepreneurs, by offering professional services at a reduced cost
                                </p>
                            </div>
                            <Link to="/professional" className="flex justify-center items-center w-[108px] h-[45px] text-[#fff] font-medium bg-[#E8332C] p-3 w-28 h-11 rounded-md mt-5">
                                Learn more
                            </Link>
                        </div>
                        <div
                            className="flex flex-col w-[280px] sm:w-[285px] h-[350px] sm:h-[360px] bg-[#F0F0F0] p-5 sm:p-10 mt-5 sm:mt-5 rounded-lg">
                            <img src={images.board} alt="table" className="rounded-full" width="100px" height="100px" />
                            <div className="h-fit">
                                <h4 className="font-xl font-semibold font-sans mt-3">Training Programs</h4>
                                <p className="w-[220px] text-[#252524] text-base flex-wrap my-3">
                                    Get involve, and participate in our training programs.
                                </p>
                            </div>
                            <Link className="flex justify-center items-center w-[108px] h-[45px] text-[#fff] font-medium bg-[#E8332C] p-3 w-28 h-11 rounded-md mt-16 mb-3">
                                Learn more
                            </Link>
                        </div>
                    </div>
                 </div>
                  {/* what are you looking for section end*/}
                  {/* a system that is redefining */}
                  <div className="bg-[url('/src/assets/interior.png')] w-full bg-no-repeat bg-center h-[506px] flex  items-end">
                    <div className="flex flex-col bg-[#C81F20] h-[435px] sm:h-fit w-[633px] lg:w-[633px] sm:w-full md:w-full ml-16 sm:ml-0">
                        <div className="flex w-12 h-12 justify-end w-[633px]">
                            <div className="flex bg-[#E1D634] w-12 h-12">
                                
                            </div>
                        </div>
                        <div className="flex flex-col flex-wrap p-10 font-sans text-[#fff]">
                            <h4 className="text-3xl font-bold  text-wrap w-[360px] leading-[35px]">
                                A system that is redefining the way we live, work and learn.
                            </h4>
                            <p className="text-base w-[533px] sm:w-fit  my-3 leading-[25px]">
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
                  <div className="flex lg:flex-row  sm:flex-col justify-between  w-full md:w-fit h-[400px] sm:h-fit ">
                    <div className="bg-[#EFE553] flex items-end justify-center md:justify-center sm:justify-center w-[485px] sm:w-[412px] h-[400px] sm:h-[359px]">
                        {/* <div > */}
                            <img src={images.maskgroup} alt="masked group"  width="186px" height="202px"/>
                        {/* </div> */}
                    </div>
                    <div>
                        <div className="flex flex-col h-full justify-center ml-16 lg:mt-0 md:mt-10 sm:mt-10">
                            <h4 className="text-[#252524] font-sans font-bold text-4xl">
                                Why Choose Us
                            </h4>
                            <p className="text-base font-normal font-sans flex-wrap w-[510px] sm:w-fit md:w-fit  mt-5 leading-[25px]">
                                Enterprise Hubs has built a system to unleash collaboration, creativity 
                                and inspiration from passionate entrepreneurs and business people, most 
                                especially a community that promotes learning, collaboration and growth. 
                                Our evolutive virtual and physical offices offer a highly functional infrastructure,
                                exceptional design that enhances your creativity and fosters productivity.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-end w-full h-full sm:hidden">
                            <img src={images.group6} alt="group6" />
                        </div>
                    </div>
                  </div>
                  {/* why choose us end */}
                  {/* building area start */}
                  <div className="flex flex-col items-center bg-[#F3F9F1] py-16">
                    <h4 className="text-[#252524] font-sans font-bold text-4xl mb-5">
                        Building & Area
                    </h4>
                    <p className="text-base text-[#252524] font-normal font-sans flex-wrap w-[510px] sm:w-[340px]">
                        Our private offices, dedicated desks, virtual offices and co-working
                    </p>
                    <p className="flex items-center text-[#252524] text-base font-normal font-sans justify-center flex-wrap w-[510px] sm:w-[340px]">
                        spaces provide flexible solutions for passionate people.
                    </p>
                    <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-2  mt-16 sm:px-2">
                        <motion.div
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            className="flex flex-col items-center w-[187px] sm:w-fit h-[182px]">
                            <img src={images.StateoftheartOffice} alt="state of the art" width="50px" height="50px" />
                            <p className="flex-wrap w-[145px] font-medium text-base text-[#616161] mt-5">State of the art</p>
                            <p className="flex justify-center w-[145px] font-medium text-base text-[#616161]">Offices</p>
                        </motion.div>
                        <motion.div 
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            className="flex flex-col items-center w-[187px] sm:w-fit h-[182px] ">
                            <img src={images.StateoftheartOffice1} alt="state of the art" width="50px" height="50px" />
                            <p className="flex justify-center w-[145px] font-medium text-base text-[#616161] mt-5">Eco-friendly </p>
                            <p className="flex justify-center w-[145px] font-medium text-base text-[#616161]">Environment</p>
                        </motion.div>
                        <motion.div
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            className="flex flex-col items-center w-[187px] sm:w-fit h-[182px] ">
                            <img src={images.ModernAesthetics} alt="state of the art" width="50px" height="50px" />
                            <p className="flex-wrap w-[145px] font-medium text-base text-[#616161] mt-5">Modern Aesthetics</p>
                        </motion.div>
                        <motion.div
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            className="flex flex-col items-center w-[187px] sm:w-fit h-[182px] ">
                            <img src={images.parkingSpace} alt="state of the art" width="50px" height="50px" />
                            <p className="flex justify-center w-[145px] font-medium text-base text-[#616161] mt-5">Parking Space</p>
                        </motion.div>
                        {/* 1 */}
                        <motion.div 
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            className="flex flex-col items-center w-[187px] sm:w-fit h-[182px] ">
                            <img src={images.restaurant} alt="state of the art" width="50px" height="50px" />
                            <p className="flex justify-center w-[145px] font-medium text-base text-[#616161] mt-5">Restaurant</p>
                        </motion.div>
                        <motion.div 
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            className="flex flex-col items-center w-[187px] sm:w-fit h-[182px] ">
                            <img src={images.greatReception} alt="state of the art" width="50px" height="50px" />
                            <p className="flex-wrap w-[145px] font-medium text-base text-[#616161] mt-5">Great Reception</p>
                        </motion.div>
                        <motion.div 
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            className="flex flex-col items-center w-[187px] sm:w-fit h-[182px] ">
                            <img src={images.dedicatedDesk} alt="state of the art" width="50px" height="50px" />
                            <p className="flex-wrap w-[145px] font-medium text-base text-[#616161] mt-5">Dedicated Desks</p>
                        </motion.div>
                        <motion.div 
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            className="flex flex-col items-center w-[187px] sm:w-fit h-[182px] ">
                            <img src={images.conferenceroom} alt="state of the art" width="50px" height="50px" />
                            <p className="flex-wrap w-[145px] font-medium text-base text-[#616161] mt-5">Conference Rooms</p>
                        </motion.div>
                        {/* 2 */}
                        <motion.div 
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            className="flex flex-col items-center w-[187px] sm:w-fit h-[182px] ">
                            <img src={images.StateoftheartOffice} alt="state of the art" width="50px" height="50px" />
                            <p className="flex justify-center w-[145px] font-medium text-base text-[#616161] mt-5">Well Secured</p>
                        </motion.div>
                        <motion.div 
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            className="flex flex-col items-center w-[187px] sm:w-fit h-[182px] ">
                            <img src={images.StateoftheartOffice1} alt="state of the art" width="50px" height="50px" />
                            <p className="flex justify-center w-[145px] font-medium text-base text-[#616161] mt-5">Access to </p>
                            <p className="flex justify-center w-[145px] font-medium text-base text-[#616161]">Networking</p>
                        </motion.div>
                        <motion.div
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            className="flex flex-col items-center w-[187px] sm:w-fit h-[182px] ">
                            <img src={images.flexibleMemberaship} alt="state of the art" width="50px" height="50px" />
                            <p className="flex justify-center w-[145px] font-medium text-base text-[#616161] mt-5">Flexible </p>
                            <p className="flex justify-center w-[145px] font-medium text-base text-[#616161]">Membership</p>
                        </motion.div>
                        <motion.div 
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            className="flex flex-col items-center w-[187px] sm:w-fit h-[182px] ">
                            <img src={images.privateCall} alt="state of the art" width="50px" height="50px" />
                            <p className="flex justify-center w-[145px] font-medium text-base text-[#616161] mt-5">Private Calls</p>
                        </motion.div>
                        {/* 3 */}
                        <div class="grid grid-cols-subgrid col-span-3">
                            <div class="col-start-2">
                                <motion.div 
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.9}}
                                    className="flex flex-col items-center w-[187px] sm:w-fit h-[182px] ">
                                    <img src={images.PrintingScanningPhotocopying} alt="state of the art" width="50px" height="50px" />
                                    <p className="flex justify-center w-[145px] font-medium text-base text-[#616161] mt-5">Printing, Scanning,</p>
                                    <p className="flex justify-center w-[145px] font-medium text-base text-[#616161]">Photocopying</p>
                                </motion.div>
                            </div>
                            <div class="col-start-3">
                                <motion.div
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.9}}
                                    className="flex flex-col items-center w-[187px] sm:w-fit h-[182px] ">
                                    <img src={images.Whiteboards} alt="state of the art" width="50px" height="50px" />
                                    <p className="flex justify-center w-[145px] font-medium text-base text-[#616161] mt-5">Flexible </p>
                                    <p className="flex justify-center w-[145px] font-medium text-base text-[#616161]">Membership</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                  </div>
                  {/* building area end */}
                  {/* what our customer are saying */}
                  <div className="flex flex-col  py-10 px-20 sm:px-0">
                    <div className="w-full">
                        <img src={images.Qotes} alt="quotes" className="pl-24 border-2 border-red-500" />
                    </div>
                    <div className="flex md:flex-col sm:flex-col justify-evenly md:ml-10 sm:ml-5">
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
                            <p className="font-normal text-xl w-[520px] sm:w-fit">
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
                        <div className="md:flex sm:flex justify-between text-2xl mt-5">
                                <p><IoIosArrowBack /></p>
                                <p className="text-[#DE2223]"><IoIosArrowForward /></p>
                        </div>
                    </div>
                  </div>
                  {/* what our customer are saying ends */}
                  {/*  */}
                  {/* news and insight */}
                  <div className="flex flex-col items-center bg-[#F3F9F1] py-16 ">
                    <h4 className="text-[#252524] font-sans font-bold text-4xl mb-5">
                        News and Insights
                    </h4>
                    <p className="text-base text-[#252524] font-normal font-sans flex-wrap my-5 sm:px-5">
                        We regularly publish business tips and corporate articles for your consumption
                    </p>
                    <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 min-[500px]:grid-cols-1 gap-2 bg-[#fff] sm:px-5">
                        <div className="flex flex-col col-span-2 sm:col-span-1 bg-[url('/src/assets/roomInterior.png')] h-[446px] w-[757px] sm:w-fit rounded-xl p-10 sm:px-8">
                            {/* <div className="bg-[#000000] w-full h-full opacity-40 rounded-xl"> */}
                                <p className="font-sans text-base text-[#81C167] font-bold">
                                    ARTICLE | 👨🏼‍🦰Barki Taiwo | 12 Jan 2024
                                </p>
                                <h4 className="font-sans font-bold text-xl text-[#ffffff] w-[312px] my-5">
                                    Enterprise Hubs Hosts Baykins Pharmacy
                                </h4>
                                <p className="text-[#DEDEDE] font-sans font-normal w-[301px]">
                                    We had the pleasure of serving Baykins Pharmacy with our best as 
                                    they held their staff retreat on Friday September …
                                </p>
                            {/* </div> */}
                        </div>
                        <div className="flex flex-col rounded-xl border border-[#DADADA] h-fit">
                            <img src={images.manbag} alt="A man carrying a bag" className="rounded-t-xl" />
                            <div className="p-8">
                                <p className="font-sans text-base text-[#81C167] font-bold">
                                    ARTICLE | 👨🏼‍🦰Barki Taiwo | 12 Jan 2024
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
                        <div className="flex flex-col rounded-xl border border-[#DADADA] h-fit">
                            <img src={images.manbag} alt="A man carrying a bag" className="rounded-t-xl" />
                            <div className="p-8">
                                <p className="font-sans text-base text-[#81C167] font-bold">
                                    ARTICLE | 👨🏼‍🦰Barki Taiwo | 12 Jan 2024
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
                        <div className="flex flex-col rounded-xl border border-[#DADADA] h-fit">
                            <img src={images.manbag} alt="A man carrying a bag" className="rounded-t-xl" />
                            <div className="p-8">
                                <p className="font-sans text-base text-[#81C167] font-bold">
                                    ARTICLE | 👨🏼‍🦰Barki Taiwo | 12 Jan 2024
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
                        <div className="flex flex-col rounded-xl border border-[#DADADA] h-fit">
                            <img src={images.manbag} alt="A man carrying a bag" className="rounded-t-xl" />
                            <div className="p-8">
                                <p className="font-sans text-base text-[#81C167] font-bold">
                                    ARTICLE | 👨🏼‍🦰Barki Taiwo | 12 Jan 2024
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
                    <p className="text-base text-[#252524] font-normal font-sans flex-wrap my-10 sm:px-5">
                        Insights to help you do what you do better, faster and more profitably. Read Full Blog
                    </p>
                  </div>
                  {/* news and insight */}
                  {/* faq section */}
                  <div className="flex flex-col py-10 items-center border border-[#E3E3E3]">
                    <div className="flex flex-col items-center border border-[#E3E3E3] rounded-xl p-10">
                        <img src={images.album} alt="albumm" />
                        <p className="text-wrap my-5 ">Unlock a new chapter - Join the Network of successful entrepreneurs like you</p>
                        <Link to="/contact us" className="flex items-center justify-center bg-[#DE2223] text-[#ffffff] w-60 h-12 rounded-md">Join Enterprise Hubs</Link>
                    </div>
                    <div className="flex justify-evenly md:flex-col sm:flex-col sm:p-5 mt-16 w-full">
                        <div className="flex flex-col">
                            <h4 className="flex-wrap w-[517px] sm:w-fit text-4xl font-bold text-[#252524]">
                                Have a question about renting office space.
                            </h4>
                            <p className="w-[413px] flex-wrap font-normal text-base text-[#616161] my-4 sm:w-fit">
                                Can't see an answer to your question? Get in touch with our team, who 
                                are always happy to help.
                            </p>
                            <Link className="flex justify-center items-center w-[176px] h-[57px] font-medium bg-[#DE2223] text-[#fff] p-3 w-40 h-12 rounded-md ">
                                <motion.p 
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.9}}>
                                        Talk to us
                                </motion.p>
                            </Link>
                        </div>
                        <div className="sm:mt-5">
                            <Accorddion />
                        </div>
                    </div>
                    
                  {/* faq section end */}
                </div>
            </div>
        </>
    );
}
export default Home;