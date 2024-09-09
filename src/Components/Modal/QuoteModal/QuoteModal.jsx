/* eslint-disable no-unused-vars */
import { useState, useRef } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    Button,
  } from '@chakra-ui/react';
import * as Yup from "yup";
import { useFormik, Field, FormikProvider } from 'formik';
import * as images from "../../../image";
import FormInput from "../../FormInput/FormInput";
import { IoIosAddCircle } from "react-icons/io";
import FormNumber from '../../FormNumber/FormNumber';
import CustomButton from '../../customButton';
import { usePostServiceMutation } from '../../../RTK/Reducers/TestimonialApi';
import { useCloud } from '../../../Hooks/useCloud';



const screenWidth = window.screen.width < "768px";
const QuoteModal = ({isOpen, onClose, modalText})=>{
    const [ img, setImg ]  = useState("");
    const [ imgName, setImgName ] = useState("");
    const [ postService, { isLoading } ] = usePostServiceMutation();
    const { uploadImageToCloud } = useCloud();
    const quoteValidation = Yup.object({
        nameOfProject: Yup.string().required("please enter the name of your project"),
        brief: Yup.string().required("Please give us a brief about your project"),
        name: Yup.string().required("please enter your full name"),
        email: Yup.string().required("please enter your email")
    })
    const formik = useFormik({
        initialValues: {
            nameOfProject: "",
            brief: "",
            name: "",
            email: "",
            phone: ""
        },
        validationSchema: quoteValidation,
        onSubmit: async (values)=>{
            try{
                const cloudResponse = await uploadImageToCloud(img);
                console.log(cloudResponse);
                const data = {
                    project_name: values.nameOfProject,
                    brief: values.brief,
                    name: values.name,
                    email: values.email,
                    file: cloudResponse.data?.media_url,
                    phone: values.phone,
                    s_type: modalText
                }
                const responses = await postService(data);
                console.log(responses);
            }catch(err){
                console.log(err);
                throw err;
            }
        }
    })
    const hiddenRefInput = useRef(null);
    const handleClick = ()=>{
        hiddenRefInput.current.click();
    }
    const handleChange = (e)=>{
        console.log(e.target.files[0]);
        setImg(e.target.files[0]);
        setImgName(e.target.files[0].name);
    }
    return(
        <>
            <FormikProvider value={formik}>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent  maxW={["583px", "583px", "630px"]}>
                        <ModalCloseButton />
                        <ModalBody>
                            {/* <div className="flex justify-center items-center sm:justify-center py-10 w-full sm:w-fit border border-red-500"> */}
                            <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
                                    <div className="flex flex-col items-center justify-center sm:items-center w-[583px] sm:w-[340px]  h-fit bg-[#fff]">
                                        <img src={images.Enterprise} className="w-[145px] h-[51px]" />
                                        <h4 className="text-[#56923E] text-center font-bold text-2xl  w-full sm:w-full">
                                            Thank you for your interest in our {modalText}
                                        </h4>
                                        <h4 className="text-[#56923E] font-bold text-2xl">back office service.</h4>
                                        <p className="text-[#616161] text-base my-5">Tell us a little bit more about your request</p>
                                        <div className="flex flex-col sm:items-center w-[483px] sm:w-full">
                                            <FormInput 
                                                type="text" 
                                                label="Name of project" 
                                                name="nameOfProject"
                                                value={formik.values.nameOfProject}
                                                onChange={formik.handleChange}
                                                placeholder="e.g Pillar Shed Branding" />
                                            <div className="flex flex-col my-5 sm:w-full">
                                                <label htmlFor="text">Briefs</label>
                                                <textarea 
                                                    value={formik.values.brief}
                                                    name="brief"
                                                    onChange={formik.handleChange}
                                                    className="border border-[#DFDFDF] mt-3 rounded-sm" 
                                                    placeholder="Can you tell us a little bit more about this project?" rows="10" cols="50">

                                                    </textarea>
                                            </div>
                                            <FormInput 
                                                type="text" 
                                                name="name"
                                                value={formik.values.name}
                                                onChange={formik.handleChange}
                                                label="Name" />
                                            <FormInput 
                                                type="email" 
                                                name="email"
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                                label="Email" />
                                            <div className="flex flex-col items-center justify-center bg-[#F6F6F6] text-[#616161] w-[483px] sm:w-full h-[120px] my-5">
                                                <div className="flex flex-col items-center">
                                                    <label onClick={handleClick} htmlFor="set image" className="font-normal text-base flex items-center cursor-pointer">
                                                        <IoIosAddCircle />Set Image
                                                    </label>
                                                    <input 
                                                        type="file" 
                                                        ref={hiddenRefInput}
                                                        accept="image/*" 
                                                        name="image" 
                                                        onChange={handleChange}
                                                        className="hidden w-full"
                                                        />
                                                </div>
                                                <p className="text-xs">{imgName ? `${imgName} is uploaded` : "Max:10MB"}</p>
                                            </div>
                                        </div>
                                        <div className='w-[483px] sm:w-full'>
                                            <Field 
                                                name="phone" 
                                                component={FormNumber}
                                                label="Phone Number"  />
                                            
                                        </div>
                                        <div className="flex flex-wrap w-[483px] sm:w-full mt-2">
                                            <CustomButton isSignInBtn>{ isLoading ? "Loading..." : "Submit" }</CustomButton>
                                        </div>
                                        <p className="text-[#616161] text-base mt-5">Want to skip the wait?</p>
                                        <p className="text-[#616161] text-center text-base">Contact us through any of the phone numbers provided below</p>
                                        <p className="text-[#616161] text-base underline">+2349060009685</p>
                                        <p className="text-[#616161] text-base underline">+2349060009684</p>
                                    </div>
                            </form>
                            {/* </div> */}
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </FormikProvider>
        </>
    );
}
export default QuoteModal; 