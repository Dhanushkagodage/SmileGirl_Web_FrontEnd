/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Image from "../../../assets/1.jpg";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../../../components/footer/footer";
import FavouriteDrawer from "../components/favouritedrawer/favouriteDrawer";
import ShopcartDrawer from "../components/shopcartdrawer/shopcartDrawer";
import LoginCard from "../../../components/login/loginCard";
import { getProductByID } from "../../../services/api";

function AboutShoe() {
  const rating = 4;
  const navigate = useNavigate();
  const { productId } = useParams(); // Extract the product ID from the URL
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await getProductByID(productId);
        setProduct(fetchedProduct);
        console.log(fetchedProduct);
      } catch (err) {
        setError(err.response ? err.response.data : err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isfavDrawerOpen, setIsfavDrawerOpen] = useState(false);
  const [iscartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [isLoginCardOpen, setIsLoginCardOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleFavDrawer = () => {
    setIsfavDrawerOpen(!isfavDrawerOpen);
  };

  const toggleCartDrawer = () => {
    setIsCartDrawerOpen(!iscartDrawerOpen);
  };

  const toggleLoginCard = () => {
    setIsLoginCardOpen(!isLoginCardOpen);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div
      className=" justify-center items-center align-middle w-screen
    "
    >
      <div className="fixed inline-flex items-center justify-between w-full bg-white h-14 lg:px-26 xl:px-26 sm:px-12 md:px-20 px-12">
        <div className="inline-flex">
          <h1 className=" font-extrabold text-custom-pink text-[18px] sm:text-[20px] md:text-[26px] lg:text-[32px] font-poppins">
            Smile{" "}
            <span className=" font-extrabold text-black text-[18px] sm:text-[20px] md:text-[26px] lg:text-[32px]  font-ReggaeOne">
              G
            </span>
            irl
          </h1>
        </div>
        <div className="hidden md:block lg:block xl:block">
          <div className="flex items-center">
            <div className="bg-custom-pink w-8 h-14 justify-center items-center text-center mr-2">
              <h1 className="pt-3">🚚</h1>
            </div>
            <h1 className="font-poppins text-[10px] sm:text-[10px] md:text-[13px] lg:text-[14px] text-black font-bold">
                Enjoy free delivery on orders over Rs 10,000... 📦✨
            </h1>
          </div>
        </div>

        {/* Second nav (icons) - always visible */}
        <nav className="items-end">
          <ul className="inline-flex space-x-5 font-extrabold xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px] items-center">
            <li>
              <Link to="/" className="">
                <i className="fas fa-search"></i>
              </Link>
            </li>
            <li>
              <button onClick={toggleCartDrawer} className="text-black">
                {" "}
                {/* Button to open the drawer */}
                <i className="fas fa-shopping-cart"></i>
              </button>
            </li>
            <li>
              <button onClick={toggleFavDrawer} className="text-black">
                {" "}
                {/* Button to open the drawer */}
                <i className="fas fa-heart"></i>
              </button>
            </li>
            <li>
              <button onClick={toggleLoginCard} className="text-black">
                <i className="fas fa-user"></i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="  lg:px-26 xl:px-26 sm:px-8 md:px-20 px-8 xl:pb-14 lg:pb-14 md:pb-10 sm:pb-6 pb-6">
        <div className="flex text-gray-500 font-poppins font-light items-center pt-16 xl:pb-3 lg:pb-3 md:pb-2 sm:pb-2 pb-2  ">
          <button
            className="bg-white rounded-full hover:bg-black-600 border-2 flex justify-center items-center xl:w-8 xl:h-8 lg:w-8 lg:h-8 md:w-6 md:h-6 sm:w-5 sm:h-5 w-5 h-5  mr-1"
            onClick={() => navigate(-1)}
          >
            <i className="fa-solid fa-arrow-left text-[11px] sm:text-[12px] md:text-[15px] lg:text-[16px]"></i>
          </button>
          <h1 className="text-[11px] sm:text-[12px] md:text-[15px] lg:text-[16px]">
            Shop/About Footwear/{product.productName}
          </h1>
        </div>
        <div className="bg-gray-50  rounded-lg lg:p-10 xl:p-10 sm:p-8 md:p-8 p-8 w-full">
          <div className=" grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-6 justify-center ">
            {/* images section */}
            <div className="grid xl:grid-flow-col lg:grid-flow-col sm:grid-flow-row md:grid-flow-col grid-flow-row justify-self-start gap-[10px] justify-center">
              {/* 3 images */}
              <div className="grid xl:grid-flow-row lg:grid-flow-row sm:grid-flow-col md:grid-flow-row grid-flow-col  h-fit gap-[10px]">
                <div className="">
                  <img
                    src={product.imageUrls[1]}
                    alt="shoe"
                    loading="lazy"
                    className="object-contain h-[80px] sm:h-[100px] md:h-[120px] lg:h-[140px] xl:h-[140px] w-full"
                  />
                </div>
                <div className="">
                  <img
                    src={product.imageUrls[2]}
                    alt="shoe"
                    loading="lazy"
                    className="object-contain h-[80px] sm:h-[100px] md:h-[120px] lg:h-[140px] xl:h-[140px]"
                  />
                </div>
                <div className="">
                  <img
                    src={product.imageUrls[3]}
                    alt="shoe"
                    loading="lazy"
                    className="object-contain h-[80px] sm:h-[100px] md:h-[120px] lg:h-[140px] xl:h-[140px]"
                  />
                </div>
              </div>
              {/* 1 large image */}
              <div className="">
                <img
                  src={product.imageUrls[0]}
                  alt="shoe"
                  loading="lazy"
                  className="object-contain h-[260px] sm:h-[320px] md:h-[380px] lg:h-[440px] xl:h-[440px] w-full"
                />
              </div>
            </div>
            {/* description section */}
            <div className="justify-self-start text-[11px] sm:text-[12px] md:text-[15px] lg:text-[16px] font-poppins">
              {/* name */}
              <h1 className=" font-medium text-black mb-1">
                {product.productName}
              </h1>

              {/* price */}
              <h1 className=" font-normal text-black mb-1">
                Rs.{product.rentalPrice}
              </h1>

              {/* rating */}
              <div className="flex  items-center mb-4">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`text-custom-pink text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px]  ${
                      index < rating ? "fill" : ""
                    }`}
                  >
                    {index < rating ? "★" : "☆"}
                  </span>
                ))}
              </div>
              {/* colors */}
              <div className="mb-4 grid ">
                <h1 className="font-medium text-black mb-2">Colors :</h1>
                {/* <div className="flex gap-2">
                  <button className="xl:w-[30px] lg:w-[30px] md:w-[25px] sm:w-[20px] w-[20px] xl:h-[30px] lg:h-[30px] md:h-[25px] sm:h-[20px] h-[20px]  bg-black rounded"></button>
                  <button className="xl:w-[30px] lg:w-[30px] md:w-[25px] sm:w-[20px] w-[20px] xl:h-[30px] lg:h-[30px] md:h-[25px] sm:h-[20px] h-[20px]  bg-white rounded border-[1px] border-black"></button>
                  <button className="xl:w-[30px] lg:w-[30px] md:w-[25px] sm:w-[20px] w-[20px] xl:h-[30px] lg:h-[30px] md:h-[25px] sm:h-[20px] h-[20px] bg-red-500 rounded"></button>
                  <button className="xl:w-[30px] lg:w-[30px] md:w-[25px] sm:w-[20px] w-[20px] xl:h-[30px] lg:h-[30px] md:h-[25px] sm:h-[20px] h-[20px]  bg-yellow-200 rounded"></button>
                </div> */}
                <div className="flex gap-2">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      className={`xl:w-[30px] lg:w-[30px] md:w-[25px] sm:w-[20px] w-[20px] xl:h-[30px] lg:h-[30px] md:h-[25px] sm:h-[20px] h-[20px] rounded border-[1px] border-black`}
                      style={{ backgroundColor: color.colorName.toLowerCase() }} // Using the color name for the background
                    ></button>
                  ))}
                </div>
              </div>

              {/* sizes */}
              <div className="mb-6 grid ">
                <h1 className=" font-medium text-black mb-2 font-poppins">
                  Sizes :
                </h1>
                <div className="  gap-2 flex">
                  <button className="xl:w-[30px] lg:w-[30px] md:w-[25px] sm:w-[20px] w-[20px] xl:h-[30px] lg:h-[30px] md:h-[25px] sm:h-[20px] h-[20px] bg-black rounded text-white">
                    3
                  </button>
                  <button className="xl:w-[30px] lg:w-[30px] md:w-[25px] sm:w-[20px] w-[20px] xl:h-[30px] lg:h-[30px] md:h-[25px] sm:h-[20px] h-[20px]  bg-white rounded border-[1px] border-black">
                    4
                  </button>
                  <button className="xl:w-[30px] lg:w-[30px] md:w-[25px] sm:w-[20px] w-[20px] xl:h-[30px] lg:h-[30px] md:h-[25px] sm:h-[20px] h-[20px]  bg-white rounded border-[1px] border-black">
                    5
                  </button>
                  <button className="xl:w-[30px] lg:w-[30px] md:w-[25px] sm:w-[20px] w-[20px] xl:h-[30px] lg:h-[30px] md:h-[25px] sm:h-[20px] h-[20px]  bg-white rounded border-[1px] border-black">
                    6
                  </button>

                  <button className="xl:w-[30px] lg:w-[30px] md:w-[25px] sm:w-[20px] w-[20px] xl:h-[30px] lg:h-[30px] md:h-[25px] sm:h-[20px] h-[20px] bg-white rounded border-[1px] border-black">
                    7
                  </button>
                  <button className="xl:w-[30px] lg:w-[30px] md:w-[25px] sm:w-[20px] w-[20px] xl:h-[30px] lg:h-[30px] md:h-[25px] sm:h-[20px] h-[20px]   bg-white rounded border-[1px] border-black">
                    8
                  </button>
                  <button className="xl:w-[30px] lg:w-[30px] md:w-[25px] sm:w-[20px] w-[20px] xl:h-[30px] lg:h-[30px] md:h-[25px] sm:h-[20px] h-[20px]  bg-white rounded border-[1px] border-black">
                    9
                  </button>
                </div>
              </div>
              {/* buttons */}
              <div className="grid gap-5 mb-4 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
                <button className="text-white bg-custom-pink  xl:py-2 xl:px-10 lg:py-2 lg:px-10 md:py-1 md:px-6 sm:py-1 sm:px-4  py-1 px-4">
                  ADD TO CART
                </button>
                <button className="text-white bg-black    xl:py-2 xl:px-10 lg:py-2 lg:px-10 md:py-1 md:px-6 sm:py-1 sm:px-4  py-1 px-4">
                  BUY NOW
                </button>
              </div>

              <div className="text-[11px] sm:text-[12px] md:text-[15px] lg:text-[16px] grid justify-start">
                <h1 className=" font-medium text-black">
                  Do you have a question?
                </h1>
                <h1 className="text-[8px] sm:text-[8px] md:text-[10px] lg:text-[12px] font-medium text-gray-600 mb-2">
                  Contact our customer service.
                </h1>
                <div className="grid grid-flow-col gap-8  justify-start text-[6px] sm:text-[8px] md:text-[10px] lg:text-[12px]">
                  <div className="flex flex-col items-center justify-start">
                    <FaWhatsapp className="xl:w-[30px] lg:w-[30px] md:w-[25px] sm:w-[20px] w-[20px] xl:h-[30px] lg:h-[30px] md:h-[25px] sm:h-[20px] h-[20px] mb-1" />
                    <h1>WhatsApp</h1>
                    <h1>+91 123456789</h1>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <MdOutlineEmail className="xl:w-[30px] lg:w-[30px] md:w-[25px] sm:w-[20px] w-[20px] xl:h-[30px] lg:h-[30px] md:h-[25px] sm:h-[20px] h-[20px] mb-1" />
                    <h1>Email</h1>
                    <h1>smilegirl@gmail.com</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 font-poppins">
            <div className="mb-4 bg-gray-300 border-y-2 border-black xl:py-2 lg:py-2 md:py-1 sm:py-1 py-1">
              <h1 className="text-[11px] sm:text-[12px] md:text-[15px] lg:text-[16px] font-medium text-black ml-6">
                More Details
              </h1>
            </div>
            <div className="grid xl:grid-flow- gap-[20px]">
              <div className="grid xl:grid-flow-col px-6 py-2 gap-[20px]">
                <div>
                  <h1 className="text-[11px] sm:text-[12px] md:text-[15px] lg:text-[16px] font-medium text-black underline underline-offset-4">
                    About Product :
                  </h1>
                  <div className="mt-4 ml-2 text-[10px] sm:text-[10px] md:text-[13px] lg:text-[14px] text-gray-600 ">
                    <h1 className="  ">
                      Colors :
                      {product.colors
                        .map((color) => color.colorName)
                        .join(", ")}
                    </h1>
                    <h1 className="  ">Gender : Ladies</h1>
                    <h1 className="">Material : {product.material}</h1>
                    <h1 className=" ">Type of Wear : {product.typeOfWear}</h1>
                  </div>
                </div>
                <div>
                  <h1 className="text-[11px] sm:text-[12px] md:text-[15px] lg:text-[16px] font-medium text-black underline underline-offset-4">
                    Delivery Fee :
                  </h1>
                  <div className="mt-4 ml-2 text-[10px] sm:text-[10px] md:text-[13px] lg:text-[14px] text-gray-600">
                    <h1 className="">
                      - Delivery fees vary based on your location and order
                      total.
                    </h1>
                    <h1 className="">
                      - Enjoy free delivery on orders over Rs 10,000
                    </h1>
                  </div>
                </div>
                <div>
                  <h1 className="text-[11px] sm:text-[12px] md:text-[15px] lg:text-[16px] font-medium text-black underline underline-offset-4">
                    Look After Product :
                  </h1>
                  <div className="mt-4 ml-2 text-[10px] sm:text-[10px] md:text-[13px] lg:text-[14px] text-gray-600">
                    <h1 className="">Just here for the care instructions?</h1>
                    <h1 className=" mt-6">
                      Yeah, we know it. <br />
                      Use a toothbrush or soft shoe brush to remove dirt.
                    </h1>
                  </div>
                </div>
              </div>
              <div className="px-6 md:py-2 ">
                <h1 className="text-[11px] sm:text-[12px] md:text-[15px] lg:text-[16px] font-medium text-black underline underline-offset-4">
                  Description :
                </h1>
                <div className="mt-4 ml-2 text-[10px] sm:text-[10px] md:text-[13px] lg:text-[14px] text-gray-600">
                  <h1 className="">{product.description}</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 font-poppins">
            <div className="mb-4 bg-gray-300 border-y-2 border-black xl:py-2 lg:py-2 md:py-1 sm:py-1 py-1">
              <h1 className="text-[11px] sm:text-[12px] md:text-[15px] lg:text-[16px] font-medium text-black ml-6">
                Reviews
              </h1>
            </div>
            <div className="grid grid-flow-col px-6 py-2 height-auto"></div>
          </div>
        </div>
      </div>
      <Footer />
      <FavouriteDrawer
        isOpen={isfavDrawerOpen}
        toggleFavDrawer={toggleFavDrawer}
      />
      <ShopcartDrawer
        isOpen={iscartDrawerOpen}
        toggleCartDrawer={toggleCartDrawer}
      />
      <LoginCard isOpen={isLoginCardOpen} toggleLoginCard={toggleLoginCard} />
    </div>
  );
}

export default AboutShoe;
