import React from "react";
import Footer from "../../Components/Footer/Footer.jsx";
import Header from "../../Components/Header/Header.jsx";

const Layout = ({children})=>{
    return(
        <>
        <div className="w-screen h-screen m-0 p-0 overflow-x-hidden">
            <Header />
                {children}
            <Footer />
        </div>
            
        </>
    );
}
export default Layout;