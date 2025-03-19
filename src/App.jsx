import React from "react";
// import Navbar from "./components/Navbar";
import Features from "./pages/Features";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Pricing from "./pages/Pricing";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import Layout from "./layout/Layout";
import LoginPage from "./pages/LoginPage";
import BlogSection from "./components/blogs/BlogSection";
import BlogDetails from "./components/blogs/BlogDetails";
import WhitepaperDetail from "./components/whitepappers/WhitepaperDetail";
import WhitepapperSection from "./components/whitepappers/WhitepapperSection";
// import ScrollToTop from "./components/ScrollToTop";
// import WhitepapperSection from "./components/whitepappers/WhitePapperSection";

// const App = () => {
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout component that includes Navbar
    children: [
      {
        index: true, // This sets the Home page as the default page when the root route is accessed
        element: <HomePage />, // Home component will be rendered by default
      },
      {
        path: "features",
        element: <Features />, // Features page will be rendered here
      },
      {
        path: "pricing",
        element: <Pricing />, // Pricing page will be rendered here
      },
      {
        path: "insights",
        element: <Insights />, // Insights page will be rendered here
      },
      {
        path: "contact",
        element: <Contact />, // Contact page will be rendered here
      },
      {
        path: "login",
        element: <LoginPage />, // Contact page will be rendered here
      },
      {
        path: "blog",
        element: <BlogSection />, // Contact page will be rendered here
      },
      {
        path: "blogdetail",
        element: <BlogDetails />, // Contact page will be rendered here
      },
      {
        path: "whitepaper",
        element: <WhitepapperSection />, // Contact page will be rendered here
      },
      {
        path: "whitepaperdetail",
        element: <WhitepaperDetail />, // Contact page will be rendered here
      },
    ],
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
