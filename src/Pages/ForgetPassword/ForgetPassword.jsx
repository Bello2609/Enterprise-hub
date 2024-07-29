/* eslint-disable no-unused-vars */
import FormInput from "../../Components/FormInput/FormInput";
import CustomButton from "../../Components/customButton";
import * as images from "../../image";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useForgetPasswordMutation } from "../../RTK/Reducers/AuthApi";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const ForgetPassword = () => {
   const [ forgetPassword, { isLoading } ] = useForgetPasswordMutation();
   const forgetSchema = Yup.object({
      email: Yup.string().email("please enter a valid email").required("Email is required"),
   });
   const formik = useFormik({
      initialValues: {
         email: ""
      },
      validationSchema: forgetSchema,
      onSubmit: (values)=>{
         forgetPassword({
            email: values.email
         })
         .unwrap()
         .then(res=>{
            console.log(res);
            toast.success(res.message);
         })
         .catch(err=>{
            console.log(err);
            toast.warn(err.data.message);
         })
      }
   })
   return (
      <div className="w-full h-full sm:w-screen sm:px-5 flex flex-col items-center justify-center  my-10">
         <ToastContainer />
         <div className="flex flex-col text-center items-center">
            {/* <img /> */}
            <img src={images.Enterprise} width="145px" height="90px" alt="enterprise" />
            <h3 className="font-bold text-3xl text-[#56923E] my-5">Forget Password</h3>
         </div>
         <form onSubmit={formik.handleSubmit}className="w-1/2 h-full" >
            <div className="flex flex-col items-center   sm:w-full gap-4">
               <FormInput
                  type="email"
                  label="Email"
                  placeholder="Enter your email address"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
               />
               <CustomButton isSignInBtn>{
                  isLoading ? "Loading..." : "Submit"
               }</CustomButton>
            </div>
         </form>
      </div>
   );
};

export default ForgetPassword;
