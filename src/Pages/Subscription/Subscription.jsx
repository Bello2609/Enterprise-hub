/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import FormInput from "../../Components/FormInput/FormInput";
import FormSelect from "../../Components/FormSelect/FormSelect";
import FormNumber from "../../Components/FormNumber/FormNumber";
import CustomButton from "../../Components/customButton";
import { LuUpload } from "react-icons/lu";
import * as images from "../../image";
import { useFormik, Field, FormikProvider } from "formik";
import * as Yup from "yup";
const genderOption = [
    {
        value: "Select Gender", label: "Select Gender"
    },
    {
        value: "Male", label: "Male"
    },
    {
        value: "Female", label: "Female"
    },
]

const Subscription = () => {
   const [ cac, setCac ] = useState();
   const [ cacName, setCacName ] = useState();
   const [ validId, setValidId ] = useState();
   const [ validIdName, setValidIdName ] = useState();

   const hiddenFileInputCac = useRef(null);
   const handleClickCac = ()=>{
      hiddenFileInputCac.current.click();
  }
   const handleChangeCac = (e)=>{
      console.log(e.target.files[0]);
      setCac(e.target.files[0]);
      setCacName(e.target.files[0].name);
  }
  const hiddenFileInputId = useRef(null);
   const handleClickId = ()=>{
      hiddenFileInputId.current.click();
  }
   const handleChangeId = (e)=>{
      console.log(e.target.files[0]);
      setValidId(e.target.files[0]);
      setValidIdName(e.target.files[0].name);
  }
   const subscriptionValidation = Yup.object({
      gender: Yup.string().required("Please select your gender"),
      designation: Yup.string().required("Enter whether you are a mr, miss or mrs "),
      firstName: Yup.string().required("Enter your first name"),
      lastName: Yup.string().required("Enter your last name"),
      phoneNumber:Yup.string().required("Enter your valid phone number"),
      companyName: Yup.string().required("Enter your company name"),
   })
   const formik = useFormik({
      initialValues: {
         gender: "",
         designation: "",
         firstName: "",
         lastName: "",
         phoneNumber: "",
         companyName: ""
      },
      validationSchema: subscriptionValidation,
      onSubmit: async (values) =>{
         console.log(values);
      }
   });
   return (
      <FormikProvider value={formik} className="w-[569px]">
         <div className="w-[569px] sm:w-screen sm:px-5 flex flex-col my-10">
            <div className="flex flex-col">
               {/* <img /> */}
               <img src={images.Enterprise} width="145px" height="90px" alt="enterprise" />
               <h3 className="font-bold text-3xl text-[#56923E] my-5">Get Your Virtual Address</h3>
            </div>
            <form onSubmit={formik.handleSubmit}>
               <div className="flex sm:flex-col">
                  <div className="flex border border-[#DFDFDF] p-4 w-fit rounded-sm items-start mr-2 sm:mb-2">
                     <div  className="mr-4">
                        <input type="radio" id="virtual" style={{ accentColor: "green", borderColor: "green", width: "15px", height: "15px" }} />
                     </div>
                     <div className="flex flex-col justify-start">
                        <p className="font-bold text-base text-[#56923E]">Enterprise Hubs Virtual Office</p>
                        <p className="font-bold text-4xl">₦107,500/annum</p>
                     </div>
                  </div>
                  <div className="flex border border-[#DFDFDF] p-4 w-fit rounded-sm items-start">
                     <div  className="mr-4">
                        <input type="radio" id="later" style={{ accentColor: "green", borderColor: "green", width: "15px", height: "15px" }} />
                     </div>
                     <div className="flex flex-col justify-start">
                        <p className="font-bold text-base text-[#56923E]">Skip Payment</p>
                        <p className="font-bold text-4xl text-nowrap">Pay Later</p>
                     </div>
                  </div>
               </div>
               <div className="w-full h-[1px] bg-[#DFDFDF] my-5"></div>
               <p className="font-normal text-[#616161] text-lg">Just one more step. Tell us a few about you</p>
               <div className="flex sm:flex-col gap-4">
                  <Field 
                     component={FormSelect} 
                     label="Gender" 
                     options={genderOption}
                     name="gender"
                      
                  />
                  <FormInput
                     type="text"
                     label="Designation"
                     placeholder="Mr/Mrs/Dr"
                     name="designation"
                     onChange={formik.handleChange}
                     value={formik.values.designation}
                  />
               </div>
               <div className="flex sm:flex-col gap-4">
                  <FormInput
                     type="text"
                     label="First Name"
                     placeholder="Enter your first name"
                     name="firstName"
                     onChange={formik.handleChange}
                     value={formik.values.firstName}
                  />
                  <FormInput
                     type="text"
                     label="Last Name"
                     placeholder="Enter your last name"
                     name="lastName"
                     onChange={formik.handleChange}
                     value={formik.values.lastName}
                  />
               </div>
               <div className="flex sm:flex-col gap-4">
                  <Field
                     name="phoneNumber"
                     component={FormNumber}
                     label="Phone Number"
                     
                  />
                  <FormInput
                     type="text"
                     label="Company Name"
                     placeholder="Enter your company name"
                     name="companyName"
                     onChange={formik.handleChange}
                     value={formik.values.companyName}
                  />
               </div>
               <div className="flex flex-col items-center justify-center bg-[#F6F6F6] text-[#616161] w-full h-auto mb-3 py-5 mt-5">
                  <div className="flex flex-col items-center w-full">
                     {/* <p className="pointer-cursor" ></p> */}
                     <label className="font-normal text-base flex items-center cursor-pointer" onClick={handleClickCac}>
                           <LuUpload />CAC Document
                     </label>
                     <input 
                           type="file"  
                           ref={hiddenFileInputCac}
                           onChange={handleChangeCac}
                           accept="image/*"
                           name="image" 
                           className="hidden" 
                     />
                  </div>
                  <p className="text-xs">{cacName ? `${cacName} is uploaded` : "Max:10MB"}</p>
               </div>
               <div className="flex flex-col items-center justify-center bg-[#F6F6F6] text-[#616161] w-full h-auto mb-3 py-5 mt-5">
                  <div className="flex flex-col items-center w-full">
                     <label className="font-normal text-base flex items-center cursor-pointer" onClick={handleClickId}>
                           <LuUpload />Upload Valid Identity
                     </label>
                     <input 
                           type="file"  
                           ref={hiddenFileInputId}
                           onChange={handleChangeId}
                           accept="image/*" 
                           name="image" 
                           className="hidden" 
                     />
                  </div>
                  <p className="text-xs">{validIdName ? `${validIdName} is uploaded` : "Max:10MB"}</p>
               </div>
            <CustomButton isSignInBtn>Submit</CustomButton>
            </form>
         </div>
      </FormikProvider>
   );
};

export default Subscription;
