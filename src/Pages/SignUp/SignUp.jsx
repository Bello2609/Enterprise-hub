// import React from 'react'
import FormInput from "../../Components/FormInput/FormInput";
import CustomButton from "../../Components/customButton";
import { Link } from "react-router-dom";

const SignUp = () => {
   return (
      <div className="w-[569px] flex flex-col gap-7">
         <div className="flex flex-col items-center gap-4">
            <img />
            <h3 className="font-bold text-3xl text-[#56923E]">Join Us!</h3>
            <p className="text-[#616161] w-[411px] text-center">
               Become a prestigious member by registering for our Virtual Office
               today
            </p>
         </div>
         <div className="flex flex-col gap-4">
            <FormInput
               type="text"
               label="Email"
               placeholder="Enter your email address"
            />
            <FormInput
               type="text"
               label="Password"
               placeholder="Enter your password"
            />
            <FormInput
               type="text"
               label="Confirm password"
               placeholder="Enter your password"
            />
            <FormInput
               type=""
               label="Phone number"
               placeholder="Enter your password"
            />

            <div className="flex items-center gap-3">
               <div className="w-full h-[1px] bg-[#DFDFDF]"></div>
               <span className="text-[#616161]">or</span>
               <div className="w-full h-[1px] bg-[#DFDFDF]"></div>
            </div>

            <CustomButton isSignInWithGoogle>
               <img
                  className=""
                  width="30"
                  height="30"
                  src="https://img.icons8.com/color/48/google-logo.png"
                  alt="google-logo"
               />
               Sign up with google
            </CustomButton>
            <CustomButton isSignInBtn>Register</CustomButton>
            <div className="flex items-start">
               <img />
               <span className="text-[#616161] text-[13px]">
                  By creating an account you agree with our Terms of Service,
                  Privacy Policy, and our default Notification Settings
               </span>
            </div>

            <p>
               {"Already have an account? "}
               <span>
                  <Link className="text-[#56923E] underline">Sign in</Link>
               </span>
            </p>
         </div>
      </div>
   );
};

export default SignUp;
