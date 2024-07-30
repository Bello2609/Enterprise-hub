/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import FormInput from "../../Components/FormInput/FormInput";
import CustomButton from "../../Components/customButton";
import * as images from "../../image";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useLoginMutation } from "../../RTK/Reducers/AuthApi";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const SignIn = () => {
   const [ login, { data, isLoading } ] = useLoginMutation();
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
            toast.success("You are logged in successfully");
            window.location.href = "/user-profile"
         })
         .catch(err=>{
            console.log(err);
            const errorMessage = err.data.detail;
            console.log(errorMessage.toString());
            toast.error(errorMessage);
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
               <FormInput
                  type="password"
                  label="Password"
                  placeholder="Enter your password"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}

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
      </div>
   );
};

export default SignIn;
