import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
//pages
const Home = lazy( ()=> import("./Pages/Home/Home.jsx") );
const Layout = lazy( ()=> import("./Pages/Layout/Layout.jsx") );

const Router = ()=>{
    return(
        <>
            <Routes>
                <Route path="/" exact element={
                    <Suspense>
                    <Layout>
                        <Home />
                    </Layout>
                </Suspense>
                } />
                
            </Routes>
        </>
    );
}
export default Router;