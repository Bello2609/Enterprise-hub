import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const TabItems = ["All", "Training Room", "Board Room", "General Offices", "Privates Offices", "Cafetaria", "Executive Offices", "Events", "Courtyard", "Kano Offices"]
const Gallery = ()=>{
    return(
        <>
            <div className="flex flex-col">
                <div className="bg-[url('/src/assets/gallery/gallery.png')] w-full h-[388px] bg-no-repeat bg-center flex items-center pl-20">
                    <h4 className="font-bold text-[#fff] text-6xl">Gallery</h4>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center justify-between ml-20 mr-20 w-[1150px] border border-red-500">
                        <div className="flex items-center justify-center cursor-pointer  w-[40px] h-[40px] border border-[#DFDFDF] rounded-full">
                            <p className="text-[#DFDFDF]"><IoIosArrowBack /></p>
                        </div>
                        <div className="flex items-center w-[1100px]  overflow-x-auto scroll-smooth">
                            {/* <div className="flex overflow-x-auto scroll-smooth border border-green-500"> */}
                                {/* {
                                    TabItems.map(tabData=>(
                                        <span className="flex items-center p-4  border border-green-500 rounded-full w-[500px] h-fit font-semibold text-[#616161] ml-5">{tabData}</span>
                                    ))
                                } */}
                            {/* </div> */}
                            {TabItems.map((item, index) => (
        <span key={index} className="flex items-center p-5  border border-green-500 rounded-full w-full h-fit font-semibold text-[#616161] ml-5">
          {item}
          
        </span>
      ))}
                            
                        </div>
                        <div className="flex items-center justify-center cursor-pointer w-[40px] h-[40px] border border-[#DFDFDF] rounded-full">
                            <p className="text-[#DFDFDF]"><IoIosArrowForward /></p>
                        </div>
                    </div>
                    <div></div>
                </div>

            </div>
        </>
    );
}
export default Gallery;