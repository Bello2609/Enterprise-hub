/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import * as images from "../../image"
import { IoIosAddCircle } from "react-icons/io";
import FormInput from "../../Components/FormInput/FormInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNewTestimonialMutation } from "../../RTK/Reducers/TestimonialApi";
import { useCloud } from "../../Hooks/useCloud";
import CustomButton from "../../Components/customButton";


const AddTestimonial = ()=>{
    const [ img, setImg ]  = useState("");
    const [ imgName, setImgName ] = useState("");
    const [ newTestimonial, { isLoading } ] = useNewTestimonialMutation();
    const { uploadImageToCloud } = useCloud();
    const hiddenRefInput = useRef(null);
    const handleClick = ()=>{
        hiddenRefInput.current.click();
    }
    const handleChange = (e)=>{
        console.log(e.target.files[0]);
        setImg(e.target.files[0]);
        setImgName(e.target.files[0].name);
    }
    const testimonialValidation = Yup.object({
        name: Yup.string().required("Please enter a full name"),
        position: Yup.string().required("This field cannot be empty"),
        company: Yup.string().required("Enter the company empty"),
        content: Yup.string().required("This field cannot be empty")

    })
    const formik = useFormik({
        initialValues: {
            name: "",
            position: "",
            company: "",
            content: ""
        },
        validationSchema: testimonialValidation,
        onSubmit: async (values)=>{
            try{
                const cloudResponse = await uploadImageToCloud(img);
                const data = {
                    name: values.name,
                    position: values.position,
                    company: values.company,
                    content: values.content,
                    image: cloudResponse.data?.media_url
                }
                console.log(data);
                const response = await newTestimonial(data);
                console.log(response);
            }catch(error){
                console.log(error);
            }
            
           
        }
    })
    return(
        <>
            <div className="flex justify-center items-center bg-[#F3F9F1] py-10">
                <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
                    <div className="flex flex-col items-center w-[583px] h-fit bg-[#fff] p-10">
                        <img src={images.Enterprise} className="w-[145px] h-[51px]" />
                        <h4 className="text-[#56923E] font-bold text-3xl my-5">Add Testimonial</h4>
                        <div className="flex flex-col items-center justify-center bg-[#F6F6F6] text-[#616161] w-[483px] h-[120px]">
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
                        <div className="flex flex-col w-[483px]">
                            <FormInput 
                                type="text" 
                                label="Name" 
                                name="name"
                                placeholder="Full Name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                            />
                            { formik.touched.name && formik.errors.name ? <p className="text-red-500 text-sm">{formik.errors.name}</p> : null }
                            <FormInput 
                                type="text" 
                                label="Position" 
                                name="position"
                                placeholder="Enter the user position in the company"
                                value={formik.values.position}
                                onChange={formik.handleChange}
                            />
                            { formik.touched.position && formik.errors.position ? <p className="text-red-500 text-sm">{formik.errors.position}</p> : null }
                            <FormInput 
                                type="text" 
                                label="Company"
                                name="company"
                                value={formik.values.company}
                                onChange={formik.handleChange}
                            />
                            { formik.touched.company && formik.errors.company ? <p className="text-red-500 text-sm">{formik.errors.company}</p> : null }
                            <div className="flex flex-col my-5">
                                <label htmlFor="text">Testimonials</label>
                                <textarea 
                                    name="content"
                                    value={formik.values.content}
                                    onChange={formik.handleChange}
                                    className="border border-[#DFDFDF] mt-3 rounded-sm" 
                                    placeholder="What do you love about Enterprise Hubs?" 
                                    rows="10" 
                                    cols="50">
                                </textarea>
                                { formik.touched.content && formik.errors.content ? <p className="text-red-500 text-sm">{formik.errors.content}</p> : null }
                            </div>
                        </div>
                        <div className="flex justify-evenly flex-wrap w-[483px] mt-2">
                           
                            <CustomButton isSignInBtn>{ isLoading ? "Loading..." : "Add Testimonial" }</CustomButton>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
export default AddTestimonial;