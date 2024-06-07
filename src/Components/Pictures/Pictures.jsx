import React, { useState, useEffect } from "react";
import * as Images from "../../image";
import GalleryModal from "../Modal/GalleryModal/GalleryModal";
import {
    useDisclosure
} from "@chakra-ui/react";
const Pictures = ({tabItem})=>{
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [ index, setIndex ] = useState();

    // useEffect(()=>{
    //     setIndex(0);
    // }, [tabItem]);
    return (
        <>
                    <div className="flex border my-10">
                        <div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4">
                            
                                {
                                    
                                    tabItem.map((img, i) => (
                                        <div className="flex mb-1" key={i}>
                                            <div className="relative">
                                                <img src={img.name} alt="gallery" />
                                                <div className="absolute right-2 bottom-2 w-[36px] h-[36px] bg-[#fff] m-2 z-50">
                                                    <div className="flex items-center justify-center w-full h-full cursor-pointer"
                                                    onClick={()=>{
                                                        onOpen()
                                                        setIndex(i);
                                                    }}>
                                                        <img src={Images.vector} alt="Dash square" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            
                        </div>
                        <GalleryModal isOpen={isOpen} onClose={onClose} images={tabItem} index={index} />
                    </div>
        </>
    );
}
export default Pictures;