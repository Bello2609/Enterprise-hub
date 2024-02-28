import React from "react";
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

const CancelPaymentModal = ({isOpen, onClose})=>{
    return(
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent maxW="490px">
                    <ModalCloseButton />
                    <ModalBody>
                        <div className="flex flex-col">
                            <h4 className="font-bold text-3xl my-10">We're sad to see you go.</h4>
                            <div className="flex justify-evenly items-center w-[437px] h-[177px] bg-[#FFFBC1] rounded-lg">
                                <div className="flex flex-col">
                                    <p className="font-semibold text-[#252524] text-lg w-[243px] ">
                                        Before you cancel your plan, see if our Support team can help.
                                    </p>
                                    <Link className="flex justify-center items-center w-[109px] h-[38px] font-medium bg-[#DE2223] text-[#fff] p-3 w-40 h-12 rounded-md ">
                                        Talk to us
                                    </Link>
                                </div>
                                <div className="w-[142px] h-[151px]">
                                    <img src={images.modalimg} className="w-[142px] h-[151px]" alt="woman" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <p className="font-semibold text-base text-[#252524] my-10">Why are you cancelling your plan?</p>
                                <Stack spacing={5} direction='column'>
                                    <Checkbox colorScheme='green' fontWeight="normal" className="text-red">It's too expensive</Checkbox>
                                    <Checkbox colorScheme='green'>I'm subscribing to another provider</Checkbox>
                                    <Checkbox colorScheme='green'>I didn't get what I expected</Checkbox>
                                    
                                </Stack>
                            </div>
                            <FormInput type="text" label="What could we do to improve?" />
                            <div className="flex flex-col my-5">
                                <p className="text-[#252524] text-base font-normal">Note: Once you cancel your plan, you cannot undo it. </p>
                                <div className="flex justify-between my-5">
                                    <Button bgColor="#DE2223" color="#fff">
                                        Permanently cancel my plan
                                    </Button>
                                    <Button bgColor="#fff" border="1px" borderColor="#252524" onClick={onClose}>
                                        Go back
                                    </Button>
                                </div>          
                            </div>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
export default CancelPaymentModal; 