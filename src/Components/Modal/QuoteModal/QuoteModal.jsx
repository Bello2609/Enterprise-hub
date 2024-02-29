import React,{ useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    Button,
    Checkbox,
    Stack
  } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import * as images from "../../../image";
import FormInput from "../../FormInput/FormInput";
import { IoIosAddCircle } from "react-icons/io";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';


const style={
    width: "483px"
}

const QuoteModal = ({isOpen, onClose})=>{
    const [ phone, setPhone ] = useState();
    return(
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent maxW="750px">
                    <ModalCloseButton />
                    <ModalBody>
                        <div className="flex justify-center items-center py-10">
                            <div className="flex flex-col items-center w-[583px] h-fit bg-[#fff] p-10">
                                <img src={images.Enterprise} className="w-[145px] h-[51px]" />
                                <h4 className="text-[#56923E] font-bold text-3xl w-[619px]">Thank you for your interest in our Graphic</h4>
                                <h4 className="text-[#56923E] font-bold text-3xl">Design back office service.</h4>
                                <p className="text-[#616161] text-base my-5">Tell us a little bit more about your request</p>
                                <div className="flex flex-col w-[483px]">
                                    <FormInput type="text" label="Name of project" placeholder="e.g Pillar Shed Branding" />
                                    <div className="flex flex-col my-5">
                                        <label for="text">Briefs</label>
                                        <textarea className="border border-[#DFDFDF] mt-3 rounded-sm" placeholder="Can you tell us a little bit more about this project?" rows="10" cols="50"></textarea>
                                    </div>
                                    <FormInput type="text" label="Name" />
                                    <FormInput type="email" label="Email" />
                                </div>
                                {/* upload section */}
                                <div className="flex flex-col items-center justify-center bg-[#F6F6F6] text-[#616161] w-[483px] h-[120px] my-5">
                                    <div className="flex items-center">
                                        <p><IoIosAddCircle /></p>
                                        <p className="font-normal text-base">Set Image</p>
                                    </div>
                                    <p className="text-xs">Max:2MB</p>
                                </div>
                                <PhoneInput
                                    country={'ng'}
                                    value={phone}
                                    onChange={setPhone}
                                    inputStyle={{
                                        width: "483px",
                                        height: "50px"
                                    }}
                                />
                                <div className="flex flex-wrap w-[483px] mt-2">
                                    <Button width="584px" bgColor="#81C167" color="#fff">Submit</Button>
                                </div>
                                <p className="text-[#616161] text-base mt-5">Want to skip the wait?</p>
                                <p className="text-[#616161] text-base">Contact us through any of the phone numbers provided below</p>
                                <p className="text-[#616161] text-base underline">+2349060009685</p>
                                <p className="text-[#616161] text-base underline">+2349060009684</p>
                            </div>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
export default QuoteModal; 