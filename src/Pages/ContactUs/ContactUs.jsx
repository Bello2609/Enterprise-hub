import React from "react";
import * as images from "../../image"
import FormInput from "../../Components/FormInput/FormInput";
import CustomButton from "../../Components/customButton";


const ContactUs = ()=>{
    return(
        <>
            <div className="flex flex-col">
                <div className="w-full h-[388px] bg-[url('/src/assets/contact.png')] bg-no-repeat bg-center ">

                </div>
                <div className="flex justify-evenly my-10">
                    <div className="flex flex-col">
                        <h4 className="my-5 font-bold text-[] text-4xl">Find us on Maps</h4>
                        <img src={images.map1} alt="google map" />
                        <div className="flex justify-between mt-10">
                            <div className="flex flex-col">
                            <h4 className="text-base font-sans text-[#DE2223] font-bold">Visit Our Office</h4>
                            <div className="flex flex-col mt-3">
                                <h4 className="text-base font-sans text-[#252524] font-medium">LAGOS</h4>
                                <p className="flex-wrap w-[218px] text-base text-[#252524]">
                                    Trinity Avenue by Landmark, Off Ligali Ayorinde, Victoria 
                                    Island, Lagos.
                                </p>
                            </div>
                            <div className="flex flex-col mt-10">
                                <h4 className="text-base font-sans text-[#252524] font-medium">KANO</h4>
                                <p className="flex-wrap w-[218px] text-base text-[#252524]">
                                    14, Ibrahim Dabo Road, Tarauni G.R.A, Kano State.
                                </p>
                            </div>
                            <div className="flex flex-col mt-3">
                                <h4 className="text-base font-sans text-[#252524] font-medium">ABUJA</h4>
                                <p className="flex-wrap w-[218px] text-base text-[#252524]">
                                    Ground Floor, Wells Carlton Hotel. 8 Gado Nasko Street, Asokoro, Abuja
                                </p>
                            </div>
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-base font-sans text-[#DE2223] font-bold">CONTACT US</h4>
                                <div className="flex flex-col mt-3 font-normal">
                                    <p className="flex-wrap w-[218px] text-base text-[#252524]">
                                    📧 info@enterprisehubs.com 
                                    </p>
                                    <p className="flex-wrap w-[218px] text-base text-[#252524]">
                                    📞 +2349060009685 
                                    </p>
                                    <p className="flex-wrap w-[218px] text-base text-[#252524]">
                                    📞 +2348122244752
                                    </p>
                                    <p className="flex-wrap w-[218px] text-base text-[#252524]">
                                    📞 +2348095862293
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <form>
                            <FormInput type="text" label="Email"  />
                            <FormInput type="email" label="First Name"  />
                            <div className="flex flex-col my-5">
                                <label for="textarea">Message</label>
                                <textarea className="border border-[#DFDFDF] mt-3 rounded-sm" placeholder="Type your message" rows="10" cols="50"></textarea>
                            </div>
                            <CustomButton isSignInBtn>Send</CustomButton>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ContactUs;