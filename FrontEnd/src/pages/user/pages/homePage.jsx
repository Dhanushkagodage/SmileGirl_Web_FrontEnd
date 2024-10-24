/* eslint-disable no-unused-vars */
import React from "react";
import homepageBg from "../../../assets/homepagebg.png";
import Layout from "../../../components/layout/layout";
import Shoecard from "../../../components/shoecard/shoecard";

function HomePage() {
  return (
    <Layout>
      {/* Page-specific content */}
      <div className="xl:h-[550px] md:h-[400px] sm:h-[350px] bg-gradient-to-r from-white to-pink-500 relative  w-full">
        <div className="grid grid-flow-col justify-between lg:px-26 xl:px-26 sm:px-8 md:px-20 px-8 xl:h-[550px] md:h-[400px] sm:h-[350px]">
          {/* Text content */}
          <div className="text-left lg:py-28 xl:py-28 md:py-20 sm:py-16 py-6 xl:h-[550px] md:h-[400px] sm:h-[350px]">
            <h1 className="font-bold text-black sm:text-[25px] md:text-[30px] lg:text-[40px] xl:text-[48px] text-[20px] font-Poppins">
              Step Confidently In Style.
            </h1>
            <p className="text-[11px] sm:text-[12px] md:text-[15px] lg:text-[20px] font-Poppins font-light text-gray-500  xl:pt-3 lg:pt-3 md:pt-2 sm:pt-1 pt-1">
              All footwear collection designed for the modern woman by Smile
              Girl
            </p>
            <div className="text-left xl:py-10  lg:py-10  md:py-6  sm:py-4  py-3 ">
              <button className="bg-black hover:bg-black-600 text-white  justify-center text-[11px] sm:text-[12px] md:text-[15px] lg:text-[20px] font-Poppins xl:py-2 xl:px-10 lg:py-2 lg:px-10 md:py-1 md:px-6 sm:py-1 sm:px-4  py-1 px-4">
                Shop Now!
              </button>
            </div>
          </div>

          {/* Responsive image */}
          <div className="object-cover w-full xl:px-10 xl:h-[550px] md:h-[400px] sm:h-[350px]">
            <img
              src={homepageBg}
              alt="homepage background"
              loading="lazy"
              className="xl:h-[550px] md:h-[400px] sm:h-[350px] h-[178px] xl:w-full lg:w-full md:w-full sm:w-full w-[116px] object-fit"
            />
          </div>
        </div>
      </div>

      {/* New Arrivals Section */}
      <div className="w-full  grid xl:mt-[60px] lg:mt-[60px] md:mt-[50px] sm:mt-[40px] mt-[20px] lg:px-26 xl:px-26 sm:px-8 md:px-20 px-8">
        <div className="text-center grid ">
          <h1 className="font-normal text-black text-[20px] sm:text-[25px] md:text-[30px] lg:text-[40px] xl:text-[48px] font-Poppins">
            New Arrivals
          </h1>
          <h1 className="text-[11px] sm:text-[12px] md:text-[14px] lg:text-[18px] xl:text-[20px] font-Poppins font-light text-gray-500">
            Say hello to our newest collection
          </h1>
        </div>
        <div className="w-full grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 xl:mt-[60px] lg:mt-[60px] md:mt-[50px] sm:mt-[40px] mt-[20px] lg:gap-10 xl:gap-10 sm:gap-4 md:gap-6 gap-4">
          {/* <Shoecard />
          <Shoecard />
          <Shoecard /> */}
          {/* Display a 4th card only on md and larger screens */}
          {/* <div className="hidden md:block">
            <Shoecard />
          </div> */}
        </div>
      </div>

      <div className="w-full grid xl:mt-[60px] lg:mt-[60px] md:mt-[50px] sm:mt-[40px] mt-[20px] lg:px-26 xl:px-26 sm:px-8 md:px-20 px-8 xl:pb-14 lg:pb-14 md:pb-10 sm:pb-6 pb-6">
        <div className="text-center grid">
          <h1 className="font-normal text-blacktext-[20px] sm:text-[25px] md:text-[30px] lg:text-[40px] xl:text-[48px] font-Poppins">
            This Month’s Best Sellers
          </h1>
          <h1 className="text-[11px] sm:text-[12px] md:text-[14px] lg:text-[18px] xl:text-[20px] font-Poppins font-light text-gray-500">
            Discover the hottest picks of the month!
          </h1>
        </div>
        <div className="w-full grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 xl:mt-[60px] lg:mt-[60px] md:mt-[50px] sm:mt-[40px] mt-[20px] lg:gap-10 xl:gap-10 sm:gap-4 md:gap-6 gap-4 ">
          {/* <Shoecard />
          <Shoecard />
          <Shoecard /> */}
          {/* Display a 4th card only on md and larger screens */}
          {/* <div className="hidden md:block">
            <Shoecard />
          </div> */}
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
