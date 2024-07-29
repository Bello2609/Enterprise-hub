/* eslint-disable no-unused-vars */
import FormInput from "../../Components/FormInput/FormInput";
import CustomButton from "../../Components/customButton";
import * as images from "../../image";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useResetPasswordMutation } from "../../RTK/Reducers/AuthApi";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from "react-router-dom";
const ResetPassword = () => {
   const { search } = useLocation();
   const query = new URLSearchParams(search).get("token");
   console.log(query);
   const [ resetPassword, { isLoading } ] = useResetPasswordMutation();
   const resetSchema = Yup.object({
    new_password: Yup.string()
    .min(6, "your password should contain more than six characters")
    .required("The password field is required"),
   });
   const formik = useFormik({
      initialValues: {
         new_password: ""
      },
      validationSchema: resetSchema,
      onSubmit: (values)=>{
         resetPassword({
            new_password: values.new_password,
            token: query
         })
         .unwrap()
         .then(res=>{
            console.log(res);
            toast.success(res.message);
            window.location.href = "/sign-in"
         })
         .catch(err=>{
            console.log(err);
            toast.warn(err.data.error);
         })
      }
   })
   return (
      <div className="w-full h-full sm:w-screen sm:px-5 flex flex-col items-center justify-center  my-10">
         <ToastContainer />
         <div className="flex flex-col text-center items-center">
            {/* <img /> */}
            <img src={images.Enterprise} width="145px" height="90px" alt="enterprise" />
            <h3 className="font-bold text-3xl text-[#56923E] my-5">Reset Password</h3>
         </div>
         <form onSubmit={formik.handleSubmit}className="w-1/2 h-full" >
            <div className="flex flex-col items-center   sm:w-full gap-4">
               <FormInput
                  type="password"
                  label="New Password"
                  placeholder="Enter your new password"
                  name="new_password"
                  onChange={formik.handleChange}
                  value={formik.values.new_password}
               />
               {formik.touched.new_password && formik.errors.new_password ? <p className="text-red-500 text-sm">{formik.errors.new_password}</p> : null}
               <CustomButton isSignInBtn>{
                  isLoading ? "Loading..." : "Submit"
               }</CustomButton>
            </div>
         </form>
      </div>
   );
};

export default ResetPassword;
