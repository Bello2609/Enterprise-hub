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
               path="/user-profile/:name"
               exact
               element={
                  <Suspense>
                     <Layout>
                        <UserProfile />
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
                        <UserProfileEdit />
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
                        <BookSpace />
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
                        <Professional />
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
                        <Articles />
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
                        <EachArticle />
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
                        <News />
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
