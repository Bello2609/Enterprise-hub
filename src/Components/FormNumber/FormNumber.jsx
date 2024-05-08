import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const FormNumber = ({placeholder, label})=>{
    const [value, setValue] = useState()
    return(
        <>
            <div className="flex flex-col gap-5 w-full mt-3">
                <div className="flex">
                <label className="font-medium text-[#252524]">{label}</label>
                </div>
                <div className="flex border-solid rounded-lg border border-[#DFDFDF]  h-11 w-full p-2">
                    <PhoneInput
                        style={{
                            outline: "none",
                            border: "none",
                            height: "100%"
                        }}
                                            
                        placeholder={placeholder}
                        value={value}
                        defaultCountry="NG"
                        onChange={setValue}/>
                </div>
            </div>
         </>
    );
   
  
}
export default FormNumber;
