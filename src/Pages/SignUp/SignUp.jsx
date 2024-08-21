/* eslint-disable no-unused-vars */
// import React from 'react'
import FormInput from "../../Components/FormInput/FormInput";
import CustomButton from "../../Components/customButton";
import { Link } from "react-router-dom";
import * as images from "../../image"
import FormNumber from "../../Components/FormNumber/FormNumber";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRegisterMutation } from "../../RTK/Reducers/AuthApi";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
   // eslint-disable-next-line no-unused-vars
   const [ register, { isSuccess, isError, isLoading, error } ] = useRegisterMutation();
   // const phoneRegExp = `/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/`
   const registerSchema = Yup.object({
      email: Yup.string().email("Please enter a valid email address").required("Enter your email address"),
      password: Yup.string()
         .min(6, "your password should contain more than six characters")
         .required("The password field is required"),
      password2: Yup.string()
         .oneOf([Yup.ref("password"), null], "Password doesn't match")
         .required("The confirm password field is required"),
      username: Yup.string().required("Please enter a username"),
      firstName: Yup.string().required("Please enter your first name"),
      lastName: Yup.string().required("Please enter your last name"),
      // phoneNumber: Yup.string().matches(phoneRegExp, "Please enter a valid phone number")
   })
   const formik = useFormik({
      initialValues: {
         email: "",
         username: "",
         first_name: "",
         last_name: "",
         password: "",
         password2: "",
         // phoneNumber: ""
      },
      validationSchema: registerSchema,
      onSubmit: (values)=>{
         console.log(values);
         register({
            email: values.email,
            username: values.username,
            first_name: values.firstName,
            last_name: values.lastName,
            password: values.password,
            password2: values.password2,
            client_type: "enterprisehubs"
            // phoneNumber: values.phoneNumber
         })
         .unwrap()
         .then(res=>{
            toast.success("Your account have been created successfully you will redirected to the login page");
            window.location.href = "/sign-in";
         }).catch(err=>{
            console.log(err);
            const errorMessage = err.data?.email.map(msg=> { return msg });
            console.log(errorMessage.toString());
            toast.error(errorMessage.toString());
         });
      }
   })

   return (
      <div className="w-[569px] sm:w-screen sm:px-5 flex flex-col my-10">
         <ToastContainer />
         <div className="flex flex-col items-center">
            {/* <img /> */}
            <img src={images.Enterprise} alt="enterprise" />
            <h3 className="font-bold text-3xl text-[#56923E] my-5">Join Us!</h3>
            <p className="text-[#616161] w-[411px] sm:w-fit text-center">
               Become a prestigious member by registering for our Virtual Office
               today
            </p>
         </div>
         <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col">
               <FormInput
                  type="text"
                  label="Email"
                  placeholder="Enter your email address"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  name="email"
               />
               {formik.touched.email && formik.errors.email ? <p className="text-red-500 text-sm">{formik.errors.email}</p> : null}
               <FormInput
                  type="text"
                  label="Username"
                  placeholder="Enter you preferrable username"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  name="username"
               />
               {formik.touched.username && formik.errors.username ? <p className="text-red-500 text-sm">{formik.errors.username}</p> : null}
               <FormInput
                  type="text"
                  label="First Name"
                  placeholder="Enter your first name"
                  onChange={formik.handleChange}
                  value={formik.values.first_name}
                  name="firstName"
               />
               {formik.touched.first_name && formik.errors.first_name ? <p className="text-red-500 text-sm">{formik.errors.first_name}</p> : null}
               <FormInput
                  type="text"
                  label="Last Name"
                  placeholder="Enter your last name"
                  onChange={formik.handleChange}
                  value={formik.values.last_name}
                  name="lastName"
               />
               {formik.touched.last_name && formik.errors.last_name ? <p className="text-red-500 text-sm">{formik.errors.last_name}</p> : null}
               <FormInput
                  type="password"
                  label="Password"
                  placeholder="Enter your password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  name="password"
               />
               {formik.touched.password && formik.errors.password ? <p className="text-red-500 text-sm">{formik.errors.password}</p> : null}
               <FormInput
                  type="password"
                  label="Confirm password"
                  placeholder="Enter your password"
                  onChange={formik.handleChange}
                  value={formik.values.password2}
                  name="password2"
               />
               {formik.touched.password2 && formik.errors.password2 ? <p className="text-red-500 text-sm">{formik.errors.password2}</p> : null}
               {/* <FormInput
                  type=""
                  label="Phone number"
                  placeholder="Enter your phone number"
               /> */}
               {/* <FormNumber
                  label="Phone Number"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  name="phoneNumber"
               />
               {formik.touched.phoneNumber && formik.errors.phoneNumber ? <p className="text-red-500 text-sm">{formik.errors.phoneNumber}</p> : null} */}
               <div className="flex items-center my-2">
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
               <CustomButton isSignInBtn>{ isLoading ? "Loading..." : "Register" }</CustomButton>
               <div className="flex items-start">
                  <img />
                  <span className="text-[#616161] text-[13px]">
                     By creating an account you agree with our Terms of Service,
                     Privacy Policy, and our default Notification Settings
                  </span>
               </div>

               <p className="my-3">
                  {"Already have an account? "}
                  <span>
                     <Link to="/sign-in" className="text-[#56923E] underline">Sign in</Link>
                  </span>
               </p>
            </div>
         </form>
      </div>
   );
};

export default SignUp;
