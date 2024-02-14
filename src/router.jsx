// eslint-disable-next-line no-unused-vars
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
//pages
const Home = lazy(() => import("./Pages/Home/Home.jsx"));
const Layout = lazy(() => import("./Pages/Layout/Layout.jsx"));
const SignUpLayout = lazy(() => import("./Pages/Layout/SignUpLayout.jsx"));
const SignIn = lazy(() => import("./Pages/SignIn/SignIn.jsx"));
const SignUp = lazy(() => import("./Pages/SignUp/SignUp.jsx"));

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
               path="sign-in"
               exact
               element={
                  <Suspense>
                     <SignUpLayout>
                        <SignIn />
                     </SignUpLayout>
                  </Suspense>
               }
            />
            <Route
               path="sign-up"
               exact
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
