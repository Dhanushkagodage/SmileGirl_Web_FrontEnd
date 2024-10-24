/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Layout from "../../../components/layout/layout";
import Image from "../../../assets/1.jpg";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
import ColorQuantityTable from "../components/colorquantitytable/colorQuantityTable";
import { createProduct } from "../../../services/api";


function addProduct() {
  const [productName, setProductName] = useState("");
  const [sku, setSku] = useState("");
  const [rentalPrice, setRentalPrice] = useState("");
  const [material, setMaterial] = useState("");
  const [typeOfWear, setTypeOfWear] = useState("");
  const [description, setDescription] = useState("");
  const [colors, setColors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      productName: productName,
      sku:sku,
      rentalPrice: rentalPrice,
      material: material,
      typeOfWear: typeOfWear,
      description: description,
      colors: colors.map((color) => ({
        colorName: color.color,
        stocks: color.quantities.map((quantity, index) => ({
          size: index + 3,
          quantity: parseInt(quantity),
        })),
      })),
    };

    try {
      await createProduct(productData);
      alert("Product added successfully!");
    } catch (error) {
      console.error("Failed to add product:", error);
      alert("Failed to add product.");
    }
  };
  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <div className=" bg-gray-100 xl:pb-14 lg:pb-14 md:pb-10 sm:pb-6 pb-6 xl:px-26 lg:px-26 xl:px-26 sm:px-8 md:px-20 px-8 xl:py-8 lg:py-8 md:py-8 sm:py-6 py-6">
          <div>
            <h1 className="text-[11px] sm:text-[12px] md:text-[15px] lg:text-[16px] font-semibold text-black font-poppins">
              Add Product
            </h1>
          </div>
          <div className=" w-full grid bg-white rounded-xl  md:py-[20px] py-[10px] sm:py[10px] md:px-[40px] sm:px[10px]  px-[10px] xl:gap-10 lg:gap-10  xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 text-[10px] sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[14px font-poppins mt-4">
            <div className="">
              <div className="md:mb-7 mb-4">
                <label className="block mb-2  font-medium text-black  ">
                  Product Name :
                </label>
                <input
                  type="text"
                  id="product_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg block w-full xl:p-2 lg:p-2 md:p-2 sm:p-1.5 p-1.5  "
                  placeholder="Enter product name"
                  onChange={(e) => setProductName(e.target.value)}
                  required
                />
              </div>
              <div className="grid grid-flow-col gap-4">
                <div className="md:mb-7 mb-4">
                  <label className="block mb-2  font-medium text-black  ">
                    SKU :
                  </label>
                  <input
                    type="text"
                    id="sku"
                    className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg block w-full xl:p-2 lg:p-2 md:p-2 sm:p-1.5 p-1.5  "
                    placeholder="SKU00001"
                    onChange={(e) => setSku(e.target.value)}
                    required
                    
                  />
                </div>
                <div className="md:mb-7 mb-4">
                  <label className="block mb-2  font-medium text-black  ">
                    Rental Price :
                  </label>
                  <input
                    type="text"
                    id="rental_price"
                    className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg block w-full xl:p-2 lg:p-2 md:p-2 sm:p-1.5 p-1.5  "
                    placeholder="Enter rental price"
                    onChange={(e) => setRentalPrice(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2  gap-4">
                <div className="md:mb-7 mb-4 w-full ">
                  <label className="block mb-2 font-medium text-black ">
                    Material :
                  </label>
                  <select
                    id="options"
                    className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg block w-full xl:p-2 lg:p-2 md:p-2 sm:p-1.5 p-1.5  "
                    value={material}
                    onChange={(e) => setMaterial(e.target.value)}
                  >
                    <option value="default" className="hidden">
                      Select Material
                    </option>
                    <option value="Leather">Leather</option>
                    <option value="synthetic">synthetic</option>
                    <option value="canvas">canvas</option>
                    <option value="velvet">velvet</option>
                  </select>
                </div>
                <div className="md:mb-7 mb-4 w-full ">
                  <label className="block mb-2  font-medium text-black ">
                    Type of Wear :
                  </label>
                  <select
                    id="options"
                    className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg block w-full xl:p-2 lg:p-2 md:p-2 sm:p-1.5 p-1.5  "
                    value={typeOfWear}
                    onChange={(e) => setTypeOfWear(e.target.value)}
                  >
                    <option value="default" className="hidden">
                      Select type of wear
                    </option>
                    <option value="Flat">Flat</option>
                    <option value="Low Heal">Low Heal</option>
                    <option value="High Heal">High Heal</option>
                  </select>
                </div>
              </div>

              <div className="md:mb-7 mb-4 w-full">
                <label className="block mb-4 font-medium text-black ">
                  Stock Quantity :
                </label>

                <ColorQuantityTable onColorsChange={setColors}/>
              </div>
            </div>
            <div className=" md:mb-7 mb-4 w-full">
              <label className="block  font-medium text-black font-poppins mb-2">
                Product Gallery :
              </label>
              <div className="grid xl:grid-flow-col lg:grid-flow-col md:grid-flow-col sm:grid-flow-row grid-flow-row gap-2">
                <div className="md:w-[160px] sm:w-[200px] w-[200px]  md:justify-self-start justify-self-center items-center">
                  <div className="md:h-[200px] sm:h-[250px] h-[250px] bg-gray-50 rounded-md outline-dotted outline-gray-500 outline-1  flex items-center justify-center">
                    <div className="grid grid-flow-row items-center justify-self-center">
                      <div className="flex items-center justify-center mb-[30px]">
                        <CiImageOn className="text-sky-500 text-[35px] text-center " />
                      </div>
                      <p className="text-gray-400 text-[8px]  text-center ">
                        Drop your imager here, or browse <br />
                        Jpeg, png are allowed
                      </p>
                    </div>
                  </div>
                  <div className=" mt-3 ">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700 text-[10px] sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[14px] w-full">
                      Upload Image
                    </button>
                  </div>
                </div>

                <div className="grid grid-flow-row text-[8px] sm:text-[8px] md:text-[8px] lg:text-[8px] w-[100%] md:justify-self-start justify-self-center">
                  <div className="flex  h-[50px] items-center">
                    <img
                      src={Image}
                      alt="shoe"
                      loading="lazy"
                      className="object-cover h-[40px] rounded-md "
                    />
                    <div className=" border-b-4 border-custom-pink  w-full m-3 ">
                      thumbnail :thumbnail.jpg
                    </div>
                    <IoIosCheckmarkCircle className="text-custom-pink text-[30px]" />
                  </div>
                  <div className="flex  h-[50px] items-center">
                    <img
                      src={Image}
                      alt="shoe"
                      loading="lazy"
                      className="object-cover h-[40px] rounded-md "
                    />
                    <div className=" border-b-4 border-custom-pink  w-full m-3 ">
                      thumbnail :thumbnail.jpg
                    </div>
                    <IoIosCheckmarkCircle className="text-custom-pink text-[30px]" />
                  </div>
                  <div className="flex  h-[50px] items-center">
                    <img
                      src={Image}
                      alt="shoe"
                      loading="lazy"
                      className="object-cover h-[40px] rounded-md "
                    />
                    <div className=" border-b-4 border-custom-pink  w-full m-3 ">
                      thumbnail :thumbnail.jpg
                    </div>
                    <IoIosCheckmarkCircle className="text-custom-pink text-[30px]" />
                  </div>
                  <div className="flex  h-[50px] items-center">
                    <img
                      src={Image}
                      alt="shoe"
                      loading="lazy"
                      className="object-cover h-[40px] rounded-md "
                    />
                    <div className=" border-b-4 border-custom-pink  w-full m-3 ">
                      thumbnail :thumbnail.jpg
                    </div>
                    <IoIosCheckmarkCircle className="text-custom-pink text-[30px]" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 mt-5 gap-4">
                <div className="md:mb-7 mb-4 w-full ">
                  <label className="block mb-2  font-medium text-black font-poppins ">
                    Description :
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="block p-2.5 w-full  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 f-blue-500 "
                    placeholder="Leave a comment..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="flex gap-4 justify-end items-end mt-4">
                <button
                  type="submit"
                  className="
                 text-white bg-custom-pink hover:bg-pink-400 f font-medium rounded-lg   xl:py-2 xl:px-10 lg:py-2 lg:px-10 md:py-1 md:px-6 sm:py-1 sm:px-4  py-1 px-4 text-center"
                >
                  Add Product
                </button>
                <button
                  className=" text-white bg-gray-700 hover:bg-gray-400 focus:ring-4  font-medium rounded-lg   xl:py-2 xl:px-10 lg:py-2 lg:px-10 md:py-1 md:px-6 sm:py-1 sm:px-4  py-1 px-4 text-center"
                  type="button"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
}

export default addProduct;
