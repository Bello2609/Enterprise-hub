import React from "react";
import Header from "../../Components/Footer/Footer.jsx";
import Footer from "../../Components/Header/Header.jsx";

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