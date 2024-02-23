import React, { useState } from "react";
import Select from "react-dropdown-select";

const style = {
   height: "44px"
}
const FormSelect = ({options, label})=>{
   const [selectedOption, setSelectedOption] = useState("Hustle Hall (Co-working Hub)");
    return(
      <>
         <div className="flex flex-col gap-4">
            <div className="flex mt-3">
               <label className="font-medium text-[#252524]">{label}</label>
            </div>
         <div className="border-solid rounded-lg  h-11 w-full ">
            {/* <input
               className="w-full h-full border-0 outline-0"
               placeholder={placeholder}
               type={type}
               {...(register && {
                  ...register(name, {
                     required: `This field is required`,
                     // Add other validation rules as needed
                  }),
               })}
               onChange={onChange}
               value={value}
            /> */}
            {/* <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            className={style}
            /> */}
            <Select options={options} onChange={(values) => console.log(values) } style={{
               width: "300px",
               border: "1px solid #DFDFDF",
               height: "50px",
               borderRadius: "8px",
               // color: options[0] ? "#81C167" : null
            }} />
         </div>
         {/* {error && error[name] && (
            <p className="error text-danger m-0">{error[name].message}</p>
         )} */}
      </div>
      </>
    );
}
export default FormSelect;
 