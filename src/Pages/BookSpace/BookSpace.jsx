/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { DateObject } from "react-multi-date-picker";
import { useFormik, FormikProvider, Field } from 'formik';
import * as Yup  from "yup";
import FormNumber from "../../Components/FormNumber/FormNumber";
import FormInput from "../../Components/FormInput/FormInput";
import CustomButton from "../../Components/customButton";
import FormSelect from "../../Components/FormSelect/FormSelect";
import FormDate from "../../Components/FormDate/FormDate";


const categoryOption = [
    {
        value: "Select Category", label: "Select Category"
    },
    {
        value: "Hustle Hall (Co-working Hub)", label: "Hustle Hall (Co-working Hub)"
    },
    {
        value: "The BeeHive (Dedicated Desks)", label: "The BeeHive (Dedicated Desks)"
    },
    {
        value: "Training Rooms", label: "Training Rooms"
    },

]
const unitOption = [
    {
        value: "Select Unit", label: "Select Unit"
    },
    {
        value: "Ikoyi (4-Man Office) ₦10,000", label: "Ikoyi (4-Man Office) ₦10,000"
    },
    {
        value: "Lekki (3-Man Office) ₦10,000", label: "Lekki (3-Man Office) ₦10,000"
    },
    {
        value: "Abuja (7-Man Office) ₦20,000", label: "Abuja (7-Man Office) ₦20,000"
    },

]

const BookSpace = ()=>{

    const [values, setValues] = useState([
        new DateObject().subtract(4, "days"),
        new DateObject().add(4, "days")
      ])
    // const bookingVaidation = Yup.object({
    //     category: Yup.string().required("Please select category"),
    //     unit: Yup.string().required("Select the required unit"),
    //     email: Yup.string().required("Enter a valid email"),
    //     date: Yup.array().of(Yup.date()).required("please pick a date"),
    //     fullName: Yup.string().required("Enter your full name"),
    //     phoneNumber: Yup.string().required("Enter you phone number")
    // })
    const formik = useFormik({
        initialValues: {
            category: "",
            unit: "",
            email: "",
            date: "",
            fullName: "",
            phoneNumber: "",
            location: ""
            
        },
        // validationSchema: bookingVaidation,
        onSubmit: (values)=>{
            console.log(values);
        }
    })
    return(
        <>
            <FormikProvider value={formik}>
                <div className="flex items-center justify-center bg-[url('/src/assets/interior1.png')] w-full h-[848px] sm:h-fit bg-no-repeat">
                    <div className="flex sm:flex-col sm:items-center">
                        <div className="flex flex-col sm:items-center">
                            <h4 className="font-sans font-bold text-[#fff] text-6xl  sm:text-center sm:text-3xl w-[351px] text-wrap">
                                Reserve Your Space
                            </h4>
                            <p className="mt-5 font-sans font-bold text-[#fff] sm:text-center text-lg sm:text-base w-[341px]   text-wrap">
                                Yes, you have the flexibility of picking out your own space
                            </p>
                        </div>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="flex flex-col sm:items-center bg-[#fff] w-[766px] sm:w-fit h-fit rounded-xl p-10 sm:px-10">
                                <p className="text-lg font-medium font-sans text-[#252524]">What location are you booking from?</p>
                                <div className="flex sm:flex-col justify-between">
                                    <div className="flex border border-[#DFDFDF] rounded-full p-4 w-fit items-start mr-2">
                                        <div className="flex items-center mr-4">
                                            <input 
                                                name="location"
                                                onClick={formik.handleChange}
                                                type="radio" 
                                                id="virtual"  
                                                style={
                                                    { accentColor: "green",
                                                      borderColor: "green",
                                                      width: "15px", 
                                                      height: "15px", 
                                                      marginRight: "20px"
                                                       }} 
                                            /> Atlantic Center, Lagos
                                        </div>
                                    </div>
                                    <div className="flex border border-[#DFDFDF] rounded-full p-4 w-fit  items-start mr-2">
                                        <div  className="flex items-center mr-4">
                                            <input 
                                                name="location"
                                                onClick={formik.handleChange}
                                                type="radio" 
                                                id="later" 
                                                style={
                                                    { accentColor: "green", 
                                                      borderColor: "green", 
                                                      width: "15px", 
                                                      height: "15px", 
                                                      marginRight: "20px" }}
                                             /> QSC, Abuja
                                        </div>
                                    </div>
                                    <div className="flex border border-[#DFDFDF] rounded-full p-4 w-fit items-start">
                                        <div  className="flex items-center mr-4">
                                            <input 
                                                name="location"
                                                onClick={formik.handleChange}
                                                type="radio" 
                                                id="later" 
                                                style={
                                                    { accentColor: "green", 
                                                    borderColor: "green", 
                                                    width: "15px", 
                                                    height: "15px", 
                                                    marginRight: "20px" }}
                                             /> Kano
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#DFDFDF] h-px my-5"></div>
                                <div className="flex  sm:flex-col justify-between">
                                    <Field
                                        component={FormSelect} 
                                        name="category"
                                        label="Category" 
                                        options={categoryOption} 
                                        width="300px" />
                                    <Field
                                        component={FormSelect} 
                                        name="unit"
                                        label="Unit" 
                                        options={unitOption} 
                                        width="300px"
                                    />
                                </div>
                                <div className="flex flex-col sm:flex-col sm:w-[80vw] my-5">
                                    <FormInput 
                                        type="email" 
                                        label="Email"
                                        placeholder="Email"
                                        value={formik.values.email}
                                        name="email"
                                        onChange={formik.handleChange}
                                    />
                                    <Field 
                                        value={values}
                                        change={setValues}
                                        label="Booking Date" 
                                        name="date"
                                        component={FormDate}
                                     />
                                        
                                </div>
                                <div className="flex sm:flex-col justify-evenly sm:w-[80vw] my-5">
                                    <div className="w-full mr-1">
                                        <FormInput 
                                            type="text" 
                                            label="Full Name"
                                            placeholder="Full Name"
                                            value={formik.values.fullName}
                                            name="fullName"
                                            onChange={formik.handleChange}
                                        />
                                    </div>
                                    <div className="w-full">
                                    <Field
                                        component={FormNumber}
                                        name="phoneNumber"
                                        label="Phone Number"
                                    />
                                    </div>
                                </div>
                                <CustomButton isSignInBtn className="sm:px-10">
                                    Book Now
                                </CustomButton>
                            </div>
                        </form>
                    </div>
                </div>
            </FormikProvider>
        </>
    );
}

export default BookSpace;