// import React from "react";
// import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";

// const Layout = () => {
//   return (
//     <div className="">
//       {/* Full-width Navbar */}
//       {/* <div className=""> */}
//       {/* </div> */}
//       <Navbar />

//       {/* Centered Content within 1150px */}
//       <div className="w-full  px-4 sm:px-6 md:px-8">
//       {/* <Navbar /> */}
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Layout;


import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

const Layout = () => {
  return (
    <div className="flex flex-col items-center bg-[#fcfcfc]"
    //  gap-[72px] w-[1443px]"
>
      {/* Navbar */}
      <Navbar />

      <ScrollToTop /> 

      {/* Main Content */}
      <main className="max-w-[1200px]">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
