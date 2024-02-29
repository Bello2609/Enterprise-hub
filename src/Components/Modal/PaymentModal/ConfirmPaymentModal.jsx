import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import * as images from "../../../image"; 
import { MdArrowOutward } from "react-icons/md";

const ConfirmPaymentModal = ({isOpen, onClose, status})=>{
    return(
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                    <div className='flex flex-col items-center my-10'>
                        <img src={images.Enterprise} className="w-[145px] h-[51px]" alt="enterprise" />
                        {
                            status==="success"
                            ? <img src={images.check} className="w-[44px] h-[44px] my-5" alt="checkbox" /> 
                            : <img src={images.checkred} className="w-[44px] h-[44px] my-5" alt="checkbox" /> 
                        }
                        {
                            status==="success"
                            ? <h4 className="text-[#56923E] font-bold text-3xl my-5">Payment Successful!</h4>
                            : <h4 className="text-[#DE2223] font-bold text-3xl my-5">Plan Cancelled</h4>
                        }
                        {
                            status==="success"
                            ? 
                            <div className="flex flex-col items-center text-[#616161] text-base">
                                <p>Thank you for subscribing to our Virtual Office Plan.</p>
                                <p>Please check your email to view your receipt.</p>
                                <p className='flex'>You can also find it in your &nbsp;<span className='flex text-[#56923E]'>profile<MdArrowOutward /></span>.</p>
                            </div>
                            :
                            <div className="flex flex-col items-center text-[#616161] text-base">
                                <p>You have successfully cancelled your virtual office plan.</p>
                                <p className='flex'>Feel free to &nbsp;<span className='flex text-[#56923E]'>reactivate your plan</span> &nbsp; at any time.</p>
                            </div>
                        }
                    </div>
                </ModalBody>

                
                </ModalContent>
            </Modal>
        </>
    );
}
export default ConfirmPaymentModal;