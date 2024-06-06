import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useLocation, NavLink, Link } from "react-router-dom";
import Pictures from "../../Components/Pictures/Pictures";
import ImageList from "../../Config/ImagesList";


const TabItems = ["All", "Training Room", "Board Room", "General Offices", "Privates Offices", "Cafetaria", "Executive Offices", "Events", "Courtyard", "Kano Offices"]
// Define Tailwind CSS classes for active and inactive states
const activeClasses = "flex items-center p-5 text-nowrap border border-[#DFDFDF] rounded-full w-fit h-[40px] font-semibold text-[#fff] bg-[#DE2223] ml-5";
const inactiveClasses = "flex items-center p-5 text-nowrap border border-[#DFDFDF] rounded-full w-fit h-[40px] font-semibold text-[#616161] ml-5";

const Gallery = ()=>{
    const [ isQuery, setIsQuery ] = useState(null);
    const [ images, setImages ] = useState([]);
    const { search } = useLocation();

    useEffect(()=>{
        const query = new URLSearchParams(search).get("id");
        setIsQuery(query || "All");
    }, [search]);
    const handleFilter = ()=>{
        if(isQuery !== "All"){
            const filterImages = ImageList.filter(filt=> filt.category === isQuery);
            setImages(filterImages);
        }else{
            const filterImages = ImageList.map(filt=>{ return filt } );
            setImages(filterImages);
        }
        
    }
    useEffect(()=>{
        handleFilter();
    }, [isQuery])
    return(
        <>
            <div className="flex flex-col">
                <div className="bg-[url('/src/assets/gallery/gallery.png')] w-full h-[388px] bg-no-repeat bg-center flex items-center pl-20">
                    <h4 className="font-bold text-[#fff] text-6xl">Gallery</h4>
                </div>
                {/* tabs to filter the gallery */}
                <div className="flex flex-col ml-20 mr-20">
                    <div className="flex items-center my-10 justify-between h-[100px]  w-[1150px]">
                        <div className="flex items-center justify-center cursor-pointer  w-[40px] h-[40px] border border-[#DFDFDF] rounded-full">
                            <p className="text-[#DFDFDF]"><IoIosArrowBack /></p>
                        </div>
                        <div className="flex items-center pt-4 w-[1050px] overflow-x-auto scroll-smooth">
                            {TabItems.map((item, index) => (
                                <NavLink 
                                    to={`/gallery?id=${item}`} 
                                    key={index} 
                                    // onClick={handleQuery}
                                    className={ ({ isActive })=> (isActive && item === isQuery) ? 
                                    activeClasses :
                                    inactiveClasses}>
                                        {item}
                                </NavLink>
                            ))}
                        </div>
                        <div className="flex items-center justify-center cursor-pointer w-[40px] h-[40px] border border-[#DFDFDF] rounded-full">
                            <p className="text-[#DFDFDF]"><IoIosArrowForward /></p>
                        </div>
                    </div>
                    {/* gallery section */}
                    <Pictures tabItem={images} />
                </div>

            </div>
        </>
    );
}
export default Gallery;