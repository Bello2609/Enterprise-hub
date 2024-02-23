import React from "react";
import FormInput from "../../Components/FormInput/FormInput";
import CustomButton from "../../Components/customButton";
import FormSelect from "../../Components/FormSelect/FormSelect";
import FormDate from "../../Components/FormDate/FormDate";
// import {RadioGroup, Radio} from 'react-radio-group';
import { RadioGroup, RadioButton, ReversedRadioButton } from 'react-radio-buttons'


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
    return(
        <>
            <div className="flex items-center justify-center bg-[url('/src/assets/interior1.png')] w-full h-[848px] bg-no-repeat ">
                <div className="flex align-center">
                    <div>
                        <h4 className="font-sans font-bold text-[#fff] text-6xl w-[351px] text-wrap">
                            Reserve Your Space
                        </h4>
                        <p className="mt-5 font-sans font-bold text-[#fff] text-lg w-[341px] text-wrap">Yes, you have the flexibility of picking out your own space</p>
                    </div>
                    <div className="bg-[#fff] w-[766px] h-fit rounded-xl p-10">
                        <p className="text-lg font-medium font-sans text-[#252524]">What location are you booking from?</p>
                        {/* <div>
                            
                            <RadioGroup onChange={ (e)=> console.log(e.target.value) } horizontal>
                                <RadioButton value="apple" iconSize="50px" iconInnerSize="30px">
                                    Apple
                                </RadioButton>
                                <RadioButton value="orange">
                                    Orange
                                </RadioButton>
                                <RadioButton value="melon">
                                    Melon
                                </RadioButton>
                                <ReversedRadioButton value="melon">
                                    Melon
                                </ReversedRadioButton>
                                </RadioGroup>
                        </div> */}
                        <div className="bg-[#DFDFDF] h-px my-5"></div>
                        <div className="flex justify-between">
                            <FormSelect label="Category" options={categoryOption} />
                            <FormSelect label="Unit" options={unitOption} />
                        </div>
                        <div className="flex flex-col my-5">
                            <FormInput type="email" label="Email" />
                            <FormDate label="Booking Date" />
                        </div>
                        <div className="flex justify-between my-5">
                            <FormInput type="text" label="Full Name" />
                            <FormInput type="text" label="Phone Number" />
                        </div>
                        <CustomButton isSignInBtn>
                            Book Now
                        </CustomButton>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BookSpace;