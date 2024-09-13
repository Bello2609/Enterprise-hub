// eslint-disable-next-line no-unused-vars
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
//pages
import Layout from "./Pages/Layout/Layout.jsx";
import PrivateRoute from "./Utils/PrivateRoutes.jsx";
import SignUpLayout from "./Pages/Layout/SignUpLayout.jsx";
const Home = lazy(() => import("./Pages/Home/Home.jsx"));
const SignIn = lazy(() => import("./Pages/SignIn/SignIn.jsx"));
const SignUp = lazy(() => import("./Pages/SignUp/SignUp.jsx"));
const ForgetPassword = lazy(()=>import("./Pages/ForgetPassword/ForgetPassword.jsx"));
const Services = lazy(()=> import("./Pages/Services/Services.jsx"));
const AboutUs = lazy(()=> import ("./Pages/About us/AboutUs.jsx"));
const UserProfile = lazy(()=> import ("./Pages/UserProfile/UserProfile.jsx"));
const UserProfileEdit = lazy(()=> import ("./Pages/UserProfileEdit/UserProfileEdit.jsx"));
const BookSpace = lazy(()=> import ("./Pages/BookSpace/BookSpace.jsx"));
const Professional = lazy(()=> import ("./Pages/Professional/Professional.jsx"));
const Franchise = lazy(()=> import("./Pages/Franchise/Franchise.jsx"));
const AllBlog = lazy(()=> import("./Pages/Blog/AllBlog.jsx"));
const Articles = lazy(()=> import("./Pages/Blog/Articles.jsx"));
const News = lazy(()=> import("./Pages/Blog/News.jsx"));
const EachArticle = lazy(()=> import("./Pages/Blog/EachArticle.jsx"));
const GetStarted = lazy(()=> import("./Pages/GetStarted/GetStarted.jsx"));
const Lagos = lazy(()=> import("./Pages/Lagos/Lagos.jsx"));
const Kano = lazy(()=> import("./Pages/Kano/Kano.jsx"));
const Abuja = lazy(()=> import("./Pages/Abuja/Abuja.jsx"));
const ContactUs = lazy(()=> import("./Pages/ContactUs/ContactUs.jsx"));
const AddBlog = lazy(()=> import("./Pages/AddBlog/AddBlog.jsx"));
const AddTestimonials = lazy(()=> import("./Pages/AddTestimonials/AddTestimonials.jsx"));
const Gallery = lazy(()=>import("./Pages/Gallery/Gallery.jsx"));
const Subscription = lazy(()=> import("./Pages/Subscription/Subscription.jsx"));
const ResetPassword = lazy(()=> import("./Pages/ResetPassword/ResetPassword.jsx"));
const Verify = lazy(()=>import("./Pages/Verify/Verify.jsx"));
const AdminBlog = lazy(()=> import("./Pages/Blog/AllAdminBlog.jsx"))



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
               path="/service"
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
               path="/about-us"
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
               path="/user-profile"
               exact
               element={
                  <Suspense>
                     <Layout>
                        <PrivateRoute>
                           <UserProfile />
                        </PrivateRoute>
                     </Layout>
                  </Suspense>
               }
            />
            <Route
               path="/user-profile-edit"
               exact
               element={
                  <Suspense>
                     <Layout>
                        <PrivateRoute>
                           <UserProfileEdit />
                        </PrivateRoute>
                     </Layout>
                  </Suspense>
               }
            />
            <Route
               path="/book-space"
               exact
               element={
                  <Suspense>
                     <Layout>
                        <PrivateRoute>
                           <BookSpace />
                        </PrivateRoute>
                     </Layout>
                  </Suspense>
               }
            />
            <Route
               path="/professional"
               exact
               element={
                  <Suspense>
                     <Layout>
                        <PrivateRoute>
                           <Professional />
                        </PrivateRoute>
                     </Layout>
                  </Suspense>
               }
            />
            <Route
               path="/franchise"
               exact
               element={
                  <Suspense>
                     <Layout>
                        <Franchise />
                     </Layout>
                  </Suspense>
               }
            />
            <Route
               path="/blog"
               exact
               element={
                  <Suspense>
                     <Layout>
                        
                           <AllBlog />
                        
                     </Layout>
                  </Suspense>
               }
            />
            {/* this is a private route */}
            <Route
               path="/admin/add-blog"
               exact
               element={
                  <Suspense>
                     <Layout>
                           <AddBlog />
                     </Layout>
                  </Suspense>
               }
            />
            <Route
               path="/admin/all-blog"
               exact
               element={
                  <Suspense>
                     <Layout>
                           <AdminBlog />
                     </Layout>
                  </Suspense>
               }
            />
             <Route
               path="/admin/add-testimonials"
               exact
               element={
                  <Suspense>
                     <Layout>
                           <AddTestimonials />
                     </Layout>
                  </Suspense>
               }
            />
            <Route
               path="/articles"
               exact
               element={
                  <Suspense>
                     <Layout>
                        <PrivateRoute>
                           <Articles />
                        </PrivateRoute>
                     </Layout>
                  </Suspense>
               }
            />
            <Route
               path="/contact-us"
               exact
               element={
                  <Suspense>
                     <Layout>
                        <ContactUs />
                     </Layout>
                  </Suspense>
               }
            />
            <Route
               path="/articles/:id"
               exact
               element={
                  <Suspense>
                     <Layout>
                        <PrivateRoute>
                           <EachArticle />
                        </PrivateRoute>
                     </Layout>
                  </Suspense>
               }
            />
            <Route
               path="/news"
               exact
               element={
                  <Suspense>
                     <Layout>
                        <PrivateRoute>
                           <News />
                        </PrivateRoute>
                     </Layout>
                  </Suspense>
               }
            />
            <Route
               path="/lagos"
               exact
               element={
                  <Suspense>
                     <Layout>
                        <Lagos />
                     </Layout>
                  </Suspense>
               }
            />
            <Route
               path="/abuja"
               exact
               element={
                  <Suspense>
                     <Layout>
                        <Abuja />
                     </Layout>
                  </Suspense>
               }
            />
            <Route
               path="/kano"
               exact
               element={
                  <Suspense>
                     <Layout>
                        <Kano />
                     </Layout>
                  </Suspense>
               }
            />
            <Route
               path="/get-started"
               exact
               element={
                  <Suspense>
                     <Layout>
                        <GetStarted />
                     </Layout>
                  </Suspense>
               }
            />
             <Route
               path="/gallery"
               exact
               element={
                  <Suspense>
                     <Layout>
                        <Gallery />
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
            <Route
               path="/forget-password"
               element={
                  <Suspense>
                     {/* <SignUpLayout> */}
                        <ForgetPassword />
                     {/* </SignUpLayout> */}
                  </Suspense>
               }
            />
            <Route
               path="/accounts/auth/password-reset"
               element={
                  <Suspense>
                     <ResetPassword />
                  </Suspense>
               }
            />
            <Route
               path="/accounts/auth/verify_account"
               element={
                  <Suspense>
                     <Verify />
                  </Suspense>
               }
            />
            <Route
               path="/subscription"
               element={
                  <Suspense>
                        <PrivateRoute>
                           <SignUpLayout>
                              <Subscription />
                           </SignUpLayout>
                        </PrivateRoute>
                  </Suspense>
               }
            />
         </Routes>
      </>
   );
};
export default Router;
