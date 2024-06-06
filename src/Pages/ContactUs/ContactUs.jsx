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
                <div className="flex sm:flex-col sm:px-10 justify-evenly my-10">
                    <div className="flex flex-col">
                        <h4 className="my-5 font-bold text-[] text-4xl">Find us on Maps</h4>
                        <img src={images.map1} alt="google map" />
                        <div className="flex sm:flex-col justify-between mt-10 ">
                            <div className="flex flex-col sm:w-full">
                                <h4 className="text-base font-sans text-[#DE2223] font-bold">Visit Our Office</h4>
                                <div className="flex flex-col mt-3">
                                    <h4 className="text-base font-sans text-[#252524] font-medium">LAGOS</h4>
                                    <a href="https://maps.app.goo.gl/S8rswaq5NSrgv3a1A" className="flex-wrap w-[218px] text-base text-[#252524] hover:text-red-500">
                                        Trinity Avenue by Landmark, Off Ligali Ayorinde, Victoria 
                                        Island, Lagos.
                                    </a>
                                </div>
                                <div className="flex flex-col mt-3">
                                    <h4 className="text-base font-sans text-[#252524] font-medium">KANO</h4>
                                    <a href="https://maps.app.goo.gl/ZRP9cAMtxhBy1miY7" className="flex-wrap w-[218px] text-base text-[#252524] hover:text-red-500">
                                        14, Ibrahim Dabo Road, Tarauni G.R.A, Kano State.
                                    </a>
                                </div>
                                <div className="flex flex-col mt-3">
                                    <h4 className="text-base font-sans text-[#252524] font-medium">ABUJA</h4>
                                    <a href="https://maps.app.goo.gl/hModQscm1pH5W8yX9" className="flex-wrap w-[218px] text-base text-[#252524] hover:text-red-500">
                                        Ground Floor, Wells Carlton Hotel. 8 Gado Nasko Street, Asokoro, Abuja
                                    </a>
                                </div>
                            </div>
                            <div className="flex flex-col sm:w-fit sm:my-5">
                                <h4 className="text-base font-sans text-[#DE2223] font-bold">CONTACT US</h4>
                                <div className="flex flex-col mt-3 font-normal sm:w-fit">
                                    <a href="mailto:info@enterprisehubs.com" className="flex-wrap w-[218px] text-base text-[#252524] hover:text-red-500">
                                        📧 info@enterprisehubs.com 
                                    </a>
                                    <a href="tel:+2349060009685" className="flex-wrap w-[218px] text-base text-[#252524] hover:text-red-500">
                                        📞 +2349060009685 
                                    </a >
                                    <a href="tel:+2348122244752" className="flex-wrap w-[218px] text-base text-[#252524] hover:text-red-500">
                                        📞 +2348122244752
                                    </a >
                                    <a href="tel:+2348095862293" className="flex-wrap w-[218px] text-base text-[#252524] hover:text-red-500">
                                        📞 +2348095862293
                                    </a >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:w-full">
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