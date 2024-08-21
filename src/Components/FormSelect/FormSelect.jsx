// import React, { useState } from "react";
import Select from "react-dropdown-select";
const FormSelect = ({options, label, width, field,form, ...props})=>{

    return(
      <>
         <div className="flex flex-col gap-5 w-full mt-3">
            <div className="flex">
               <label className="font-medium text-[#252524]">{label}</label>
            </div>
         <div className="border-solid rounded-lg  h-11 w-full">
           
            <Select 
               {...props}
               name={field.name}
               options={options} 
               value={ options ? options.find(option => option.value === field.value) : "" }
               onChange={(option)=> form.setFieldValue(field.name, option[0].value)}
               style={{
                  width: width,
                  border: "1px solid #DFDFDF",
                  height: "50px",
                  borderRadius: "8px",
            }} />
         </div>
      </div>
      </>
    );
}
export default FormSelect;
 