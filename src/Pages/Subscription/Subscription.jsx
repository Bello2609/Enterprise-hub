import { Link } from "react-router-dom";
import FormInput from "../../Components/FormInput/FormInput";
import FormSelect from "../../Components/FormSelect/FormSelect";
import FormNumber from "../../Components/FormNumber/FormNumber";
import CustomButton from "../../Components/customButton";
import { LuUpload } from "react-icons/lu";
import * as images from "../../image";
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
   return (
      <div className="w-[569px] sm:w-screen sm:px-5 flex flex-col my-10">
         <div className="flex flex-col">
            {/* <img /> */}
            <img src={images.Enterprise} width="145px" height="90px" alt="enterprise" />
            <h3 className="font-bold text-3xl text-[#56923E] my-5">Get Your Virtual Address</h3>
         </div>
         <div className="flex">
            <div className="flex border border-[#DFDFDF] p-4 w-fit rounded-sm items-start mr-2">
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
         <div className="flex gap-4">
            <FormSelect label="Gender" options={genderOption} />
            <FormInput
               type="text"
               label="Designation"
               placeholder="Mr/Mrs/Dr"
            />
         </div>
         <div className="flex gap-4">
            <FormInput
               type="text"
               label="First Name"
            />
            <FormInput
               type="text"
               label="Last Name"
            />
         </div>
         <div className="flex gap-4">
            <FormNumber
               label="Phone Number"
            />
            <FormInput
               type="text"
               label="Company Name"
            />
         </div>
         <Link className="flex justify-center items-center my-5 w-full h-[57px] text-[#252524] font-medium bg-[#F4F4F4] p-3 w-40 h-12 rounded-md ">
            <span className="mr-2"><LuUpload /></span>CAC Registration.pdf
        </Link>
        <Link className="flex justify-center items-center w-full h-[57px] text-[#252524] font-medium bg-[#F4F4F4] p-3 w-40 h-12 rounded-md ">
            <span className="mr-2"><LuUpload /></span>Valid Card.pdf
        </Link>
        <CustomButton isSignInBtn>Submit</CustomButton>
      </div>
   );
};

export default Subscription;
