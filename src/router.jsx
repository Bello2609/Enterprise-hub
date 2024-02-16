// eslint-disable-next-line no-unused-vars
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
//pages
const Home = lazy(() => import("./Pages/Home/Home.jsx"));
const Layout = lazy(() => import("./Pages/Layout/Layout.jsx"));
const SignUpLayout = lazy(() => import("./Pages/Layout/SignUpLayout.jsx"));
const SignIn = lazy(() => import("./Pages/SignIn/SignIn.jsx"));
const SignUp = lazy(() => import("./Pages/SignUp/SignUp.jsx"));
const Services = lazy(()=> import("./Pages/Services/Services.jsx"));
const AboutUs = lazy(()=> import ("./Pages/About us/AboutUs.jsx"))

const Router = () => {
   return (
      <>
         <Routes>
            <Route
               path="/"
               exact
               element={
                  <Suspense>
                     <Layout>
                        <Home />
                     </Layout>
                  </Suspense>
               }
            />
            <Route
               path="/services"
               exact
               element={
                  <Suspense>
                     <Layout>
                        <Services />
                     </Layout>
                  </Suspense>
               }
            />
            <Route
               path="/About-us"
               exact
               element={
                  <Suspense>
                     <Layout>
                        <AboutUs />
                     </Layout>
                  </Suspense>
               }
            />
            <Route
               path="/sign-in"
               element={
                  <Suspense>
                     <SignUpLayout>
                        <SignIn />
                     </SignUpLayout>
                  </Suspense>
               }
            />
            <Route
               path="/sign-up"
               element={
                  <Suspense>
                     <SignUpLayout>
                        <SignUp />
                     </SignUpLayout>
                  </Suspense>
               }
            />
         </Routes>
      </>
   );
};
export default Router;
