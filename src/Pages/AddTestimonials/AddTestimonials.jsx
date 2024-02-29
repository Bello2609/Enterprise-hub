import React, { useState } from "react";
import {
    Button
} from "@chakra-ui/react"
import * as images from "../../image"
import { IoIosAddCircle } from "react-icons/io";
import FormInput from "../../Components/FormInput/FormInput";
import FormSelect from "../../Components/FormSelect/FormSelect";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const categoryOption = [
    {
        value: "Select Category", label: "Select Category"
    },
    {
        value: "News", label: "News"
    },
    {
        value: "Articles", label: "Articles"
    },
    {
        value: "Trends", label: "Trends"
    },

]
const authorOption = [
    {
        value: "Select Category", label: "Select Category"
    },
    {
        value: "Enterprise Hubs", label: "Enterprise Hubs"
    },
    {
        value: "Emmanuel Olaleye", label: "Emmanuel Olaleye"
    },
    {
        value: "Barki Taiwo", label: "Barki Taiwo"
    },

]
const AddTestimonial = ()=>{
    const [ value, setValue ] = useState('');
    return(
        <>
            <div className="flex justify-center items-center bg-[#F3F9F1] py-10">
                <div className="flex flex-col items-center w-[583px] h-fit bg-[#fff] p-10">
                    <img src={images.Enterprise} className="w-[145px] h-[51px]" />
                    <h4 className="text-[#56923E] font-bold text-3xl my-5">Add Testimonial</h4>
                    <div className="flex flex-col items-center justify-center bg-[#F6F6F6] text-[#616161] w-[483px] h-[120px]">
                        <div className="flex items-center">
                            <p><IoIosAddCircle /></p>
                            <p className="font-normal text-base">Set Image</p>
                        </div>
                        <p className="text-xs">Max:2MB</p>
                    </div>
                    <div className="flex flex-col w-[483px]">
                        <FormInput type="text" label="Name" placeholder="Full Name" />
                        <FormInput type="text" label="Position" placeholder="Enter your email address" />
                        <FormInput type="text" label="Company" />
                        <div className="flex flex-col my-5">
                            <label for="text">Testimonials</label>
                            <textarea className="border border-[#DFDFDF] mt-3 rounded-sm" placeholder="What do you love about Enterprise Hubs?" rows="10" cols="50"></textarea>
                        </div>
                    </div>
                    <div className="flex justify-evenly flex-wrap w-[483px] mt-2">
                        <Button width="394px" bgColor="#81C167" color="#fff">Add Testimonial</Button>
                    </div>
                </div>

            </div>
        </>
    );
}
export default AddTestimonial;