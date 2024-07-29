/* eslint-disable no-unused-vars */
import { useState, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { useVerifyAccountMutation } from "../../RTK/Reducers/AuthApi";


const Verify = ()=>{
    const [ verifyAccount, { isLoading } ] = useVerifyAccountMutation();
    const [ statusMessage, setStatusMessage ] = useState();
    const { search } = useLocation();
    const token = new URLSearchParams(search).get("token");

    useLayoutEffect(()=>{
        verifyAccount({token})
        .unwrap()
        .then(res=>{
            console.log(res);
            window.location.href = "/sign-in";
        })
        .catch(error=>{
            console.log(error);
            setStatusMessage(error.response.data?.message);
            if(statusMessage.value == "Account is already verified"){
                window.location.href = "/sign-in";
            }
        })
    })
    return(
        <>
            <div className="w-screen h-screen flex items-center justify-center">
                <p>{statusMessage}</p>
            </div>
        </>
    );
}
export default Verify;