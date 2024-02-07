import React from "react";
import Footer from "../../Components/Footer/Footer.jsx";
import Header from "../../Components/Header/Header.jsx";

const Layout = ({children})=>{
    return(
        <>
            <Header />
                {children}
            <Footer />
        </>
    );
}
export default Layout;