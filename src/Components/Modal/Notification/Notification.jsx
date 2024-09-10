
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react';

const Notification = ({isOpen, onClose, message})=>{
    return(
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent maxW="490px">
                    <ModalCloseButton />
                    <ModalBody>
                        <div className="flex items-center justify-center flex-col h-[200px]">
                            <p className='text-[#56923E] font-sans'>{message}</p>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
export default Notification; 