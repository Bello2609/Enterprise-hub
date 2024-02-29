import React from "react";
import * as images from "../../image"
import { useDisclosure } from "@chakra-ui/react";
import QuoteModal from "../../Components/Modal/QuoteModal/QuoteModal";

const professionalData = [
    {
        img: images.pro2,
        professionTitle: "GRAPHICS DESIGN",
        professionInfo: "We provide full-service design with a room of experts who are uniquely equiped with great design intellects."
    },
    {
        img: images.pro6,
        professionTitle: "MOTION DESIGN",
        professionInfo: "We provide full-service design with a room of experts who are uniquely equiped with great design intellects."
    },
    {
        img: images.pro3,
        professionTitle: "WEB DEVELOPMENT",
        professionInfo: "We provide full-service design with a room of experts who are uniquely equiped with great design intellects."
    },
    {
        img: images.pro4,
        professionTitle: "LEGAL DRAFTING AND REVIEW",
        professionInfo: "We provide full-service design with a room of experts who are uniquely equiped with great design intellects."
    },
    {
        img: images.pro1,
        professionTitle: "DISPUTE RESOLUTION, MEDIATION AND ARBITRATION",
        professionInfo: "We provide full-service design with a room of experts who are uniquely equiped with great design intellects."
    },
    {
        img: images.pro5,
        professionTitle: "TRAVEL SERVICES",
        professionInfo: "We provide full-service design with a room of experts who are uniquely equiped with great design intellects."
    },
]
const Professional = ()=>{
    const { isOpen, onOpen, onClose  } = useDisclosure();
    return(
        <>
            <div className="flex flex-col w-full items-center">
                <div className="flex justify-evenly my-10 w-full">
                    <h4 className="flex-wrap w-[517px] text-6xl font-bold text-[#252524]">
                        Professional Services
                    </h4>
                    <p className="w-[413px] flex-wrap font-normal text-base text-[#252524] my-4">
                        We support entrepreneurs, by offering professional services at a reduced cost
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-6 my-16">
                    {
                        professionalData.map(data=>{
                            return (
                                <div className="flex flex-col rounded-xl border border-[#DFDFDF] w-[360px] h-fit">
                                    <img src={data.img} alt="A man carrying a bag" className="rounded-t-xl" />
                                    <div className="p-8">
                                        <p className="font-sans text-base text-[#81C167] font-bold">
                                            {data.professionTitle}
                                        </p>
                                        <h4 className="font-sans font-normal text-base text-[#616161] w-[312px] my-5">
                                            {data.professionInfo}
                                        </h4>
                                        <button onClick={onOpen} type="submit" className="text-[#fff] bg-[#E8332C] w-[277px] h-[45px]">
                                            Get a quote
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <QuoteModal isOpen={isOpen} onClose={onClose} />
            </div>
        </>
    );
}

export default Professional;