/* eslint-disable no-unused-vars */
import DatePicker, { DateObject } from "react-multi-date-picker";
import { FaCalendarAlt } from "react-icons/fa";


const FormDate = ({label, field, value, change, ...props}) => {
  
   
    return (
       <div className="flex flex-col gap-3">
          <div className="flex mt-3">
             <label className="font-medium text-[#252524]">{label}</label>
          </div>
 
          <div className="flex justify-between items-center border-solid border border-[#DFDFDF] rounded-lg px-2 h-[46px]">
          <DatePicker
            {...props}
            value={value}
            name={field.name}
            onChange={change}
            numberOfMonths={2}
            range
            style={{
               height: "43px",
               marginTop: "0px",
               border: "none",
               outline: "none"
            }}
            />
            <p className="text-[#81C167] text-lg"><FaCalendarAlt /></p>
          </div>
       </div>
    );
 };
 
 export default FormDate;
 