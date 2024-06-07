import { useState, useEffect, useMemo } from 'react';
import {  
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

  const GalleryModal = ({ isOpen, onClose, images, index })=>{
    const [ imgIndex, setImgIndex ] = useState();
    const [ imgUrl, setImgUrl ] = useState();

    const nextImage = ()=>{
      setImgIndex(prevState =>
        prevState === images.length - 1 ? 0 : prevState + 1 
      ) 
    }
    const prevImage = ()=>{
      setImgIndex(prevIndex=>
        prevIndex === 0 ? prevIndex + images.length - 1 : prevIndex - 1
      )
    }

  // this useEffect is for the slider to work
    useEffect(()=>{
      const img_index = images.map(img=>{
          return img.name;
      });
      setImgUrl(img_index[imgIndex]);
      
      
  }, [imgIndex]);

    useEffect(()=>{
      console.log(index);
        const img_index = images.map(img=>{
            return img.name;
        });
        setImgUrl(img_index[index]);
        setImgIndex(index);
        console.log(img_index[index]);
    }, [index, images])
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose} size="lg">
          <ModalOverlay />
          <ModalContent maxW="700px">
            <ModalHeader></ModalHeader>
            <ModalCloseButton />
              <div className="flex items-center">
                <div className="flex items-center justify-center cursor-pointer  w-[40px] h-[40px] border border-[#DFDFDF] rounded-full"
                  onClick={prevImage}>
                  <p className="text-[#252524]"><IoIosArrowBack /></p>
                </div>
                <ModalBody className='m-5'>
                  <img src={imgUrl} alt="ksdfklm" />
                </ModalBody>
                <div 
                  className="flex items-center justify-center cursor-pointer w-[40px] h-[40px] border border-[#DFDFDF] rounded-full"
                  onClick={nextImage} >
                  <p className="text-[#252524]"><IoIosArrowForward /></p>
                </div>
              </div>
                
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default GalleryModal;