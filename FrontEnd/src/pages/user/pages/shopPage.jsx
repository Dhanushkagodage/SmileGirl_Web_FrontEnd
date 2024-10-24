// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import Layout from "../../../components/layout/layout";
// import shopbgimage from "../../../assets/shoppagebg.png";
// import Shoecard from "../../../components/shoecard/shoecard";
// import Pagination from "../../../components/pagination/pagination";

// function ShopPage() {
//   const [selectedOption, setSelectedOption] = useState("");

//   const handleChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   const shoecardsArray = Array(12).fill(0);

//   return (
//     <Layout>
//       <div className="relative h-auto sm:h-[300px] md:h-[400px] xl:h-[550px]">
//         {/* Background Image */}
//         <img
//           src={shopbgimage}
//           alt="shopbgimage"
//           className="w-full h-auto sm:h-[300px] md:h-[400px] xl:h-[550px] object-cover"
//         />

//         {/* Gradient Overlay */}
//         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/20 to-pink-400/65"></div>

//         {/* Additional Content */}
//         <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-center">
//           <h1 className="font-bold text-black text-[20px] sm:text-[25px] md:text-[30px] lg:text-[48px] font-Poppins">
//             Find your sole mate <br /> at Smile Girl
//           </h1>
//         </div>
//       </div>
//       <div className="lg:px-26 xl:px-26 sm:px-8 md:px-20 px-8">
//       <div className=" grid-cols-2 flex justify-between lg:pt-[40px] xl:pt-[40px] md:pt-[30px] sm:pt-[20px] xs:pt-[20px] pt-[20px]  items-center text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
//         <div>
//           <h1 className="text-gray-500">Showing 1–18 of 348 results</h1>
//         </div>
//         <div className="flex justify-end">
//           <select
//             id="options"
//             value={selectedOption}
//             onChange={handleChange}
//             className=" bg-black text-white px-[10px] py-[5px] "
//           >
//             <option value="">Sorted by all</option>
//             <option value="option1">Sorted by latest</option>
//             <option value="option2">Sorted by popular</option>
//             <option value="option3">Sorted by all</option>
//           </select>
//         </div>
//       </div>
//       <div className="text-center w-full grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-3  mt-10 lg:gap-10 xl:gap-10 sm:gap-4 md:gap-6 gap-4">
//         {shoecardsArray.map((_, index) => (
//           <div key={index}>
//             <Shoecard />
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-center xl:pt-10 lg:pt-10 md:pt-8 sm:pt-6 xs:pt-6 pt-6 xl:pb-14 lg:pb-14 md:pb-10 sm:pb-6 pb-6">
//         <Pagination />
//       </div>
//       </div>
//     </Layout>
//   );
// }

// export default ShopPage;


import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout/layout";
import shopbgimage from "../../../assets/shoppagebg.png";
import Shoecard from "../../../components/shoecard/shoecard";
import Pagination from "../../../components/pagination/pagination";
import { getProducts } from "../../../services/api";

function ShopPage() {
  const [products, setProducts] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    // Fetch products from the backend
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Layout>
      {/* Existing layout and background code */}
      <div className="lg:px-26 xl:px-26 sm:px-8 md:px-20 px-8">
        <div className=" grid-cols-2 flex justify-between lg:pt-[40px] xl:pt-[40px] md:pt-[30px] sm:pt-[20px] xs:pt-[20px] pt-[20px]  items-center text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
          <div>
            <h1 className="text-gray-500">Showing 1–18 of {products.length} results</h1>
          </div>
          <div className="flex justify-end">
            <select
              id="options"
              value={selectedOption}
              onChange={handleChange}
              className=" bg-black text-white px-[10px] py-[5px] "
            >
              <option value="">Sorted by all</option>
              <option value="option1">Sorted by latest</option>
              <option value="option2">Sorted by popular</option>
              <option value="option3">Sorted by all</option>
            </select>
          </div>
        </div>
        <div className="text-center w-full grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-3  mt-10 lg:gap-10 xl:gap-10 sm:gap-4 md:gap-6 gap-4">
          {products.map((product) => (
            <Shoecard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex justify-center xl:pt-10 lg:pt-10 md:pt-8 sm:pt-6 xs:pt-6 pt-6 xl:pb-14 lg:pb-14 md:pb-10 sm:pb-6 pb-6">
          <Pagination />
        </div>
      </div>
    </Layout>
  );
}

export default ShopPage;
