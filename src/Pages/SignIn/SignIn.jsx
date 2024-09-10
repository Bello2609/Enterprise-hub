/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import * as images from "../../image";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDisclosure } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import Notification from "../../Components/Modal/Notification/Notification";
import FormInput from "../../Components/FormInput/FormInput";
import CustomButton from "../../Components/customButton";
import { useLoginMutation } from "../../RTK/Reducers/AuthApi";

const SignIn = () => {
   const [ login, { data, isLoading, isSuccess } ] = useLoginMutation();
   const [ errMessage, setErrMessage ] = useState("");
   const navigate = useLocation().state?.previousLocationPathName;
   const { isOpen, onOpen, onClose } = useDisclosure();
   console.log(navigate);
   const loginSchema = Yup.object({
      email: Yup.string().email("please enter a valid email").required("Email is required"),
      password: Yup.string()
         .min(6, "your password should contain more than six characters")
         .required("The password field is required"),
      
   });
   const formik = useFormik({
      initialValues: {
         email: "",
         password: ""
      },
      validationSchema: loginSchema,
      onSubmit: (values)=>{
         login({
            email: values.email,
            password: values.password
         })
         .unwrap()
         .then(res=>{
            console.log(res);
            onOpen();
         })
         .catch(err=>{
            onOpen();
            const errorMessage = err.data.message;
            console.log(err);
            setErrMessage(errorMessage);
         })
      }
   })
   return (
      <div className="w-[569px] sm:w-screen sm:px-5 flex flex-col my-10">
         <ToastContainer />
         <div className="flex flex-col text-center items-center">
            {/* <img /> */}
            <img src={images.Enterprise} width="145px" height="90px" alt="enterprise" />
            <h3 className="font-bold text-3xl text-[#56923E] my-5">Welcome back!</h3>
         </div>
         <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col items-center sm:w-full gap-4">
               <FormInput
                  type="text"
                  label="Email"
                  placeholder="Enter your email address"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
               />
               { formik.touched.email && formik.errors.email ? 
                  <p className="text-red-500 text-sm">{formik.errors.email}</p> 
                  : null 
               }
               <FormInput
                  type="password"
                  label="Password"
                  placeholder="Enter your password"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
               />
               { formik.touched.password && formik.errors.password ?
                <p className="text-red-500 text-sm">{formik.errors.password}</p> 
                : null
               }

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
               <CustomButton isSignInBtn>{ isLoading ? "Loading..." : "Register" }</CustomButton>
               <span className="w-full">
                     <Link to="/forget-password" className="text-[#56923E] underline">Forget Password</Link>
               </span>

               <p>
                  
                  {"Don't have an account? "}
                  <span>
                     <Link to="/sign-up" className="text-[#56923E] underline">Sign up</Link>
                  </span>
               </p>
            </div>
         </form>
         <Notification 
            isOpen={isOpen} 
            onClose={()=>{
               onClose();
               if(isSuccess){
                  if(navigate == "/" || navigate == undefined){
                     window.location.href = "/user-profile"
                  }else{
                     return window.location.href = navigate;
                  }
               }else{
                  return false;
               }
            }} 
            message={ isSuccess ? "You are logged in successfully" : errMessage }
          />
      </div>
   );
};

export default SignIn;
