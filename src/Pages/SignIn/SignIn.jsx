// import React from "react";

import { Link } from "react-router-dom";
import FormInput from "../../Components/FormInput/FormInput";
import CustomButton from "../../Components/customButton";
import * as images from "../../image";

const SignIn = () => {
   return (
      <div className="w-[569px] flex flex-col">
         <div className="flex flex-col text-center items-center">
            {/* <img /> */}
            <img src={images.Enterprise} width="145px" height="90px" alt="enterprise" />
            <h3 className="font-bold text-3xl text-[#56923E]">Welcome back!</h3>
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
               Sign in with google
            </CustomButton>
            <CustomButton isSignInBtn>Register</CustomButton>

            <p>
               {"Don't have an account? "}
               <span>
                  <Link className="text-[#56923E] underline">Sign up</Link>
               </span>
            </p>
         </div>
      </div>
   );
};

export default SignIn;
