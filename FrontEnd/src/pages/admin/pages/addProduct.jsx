// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import Layout from "../../../components/layout/layout";

// import { CiImageOn } from "react-icons/ci";
// import ColorQuantityTable from "../components/colorquantitytable/colorQuantityTable";
// import { createProduct } from "../../../services/api";

// import axios from "axios";

// function addProduct() {
//   const [productName, setProductName] = useState("");
//   const [sku, setSku] = useState("");
//   const [rentalPrice, setRentalPrice] = useState("");
//   const [material, setMaterial] = useState("");
//   const [typeOfWear, setTypeOfWear] = useState("");
//   const [description, setDescription] = useState("");
//   const [colors, setColors] = useState([]);

//   const [galleryImages, setGalleryImages] = useState([]);
//   const [cloudinaryUrls, setCloudinaryUrls] = useState([]);

//   async function handleImageUpload(e) {
//     const files = Array.from(e.target.files);
//     const newImages = files.map((file) => URL.createObjectURL(file));

//     if (galleryImages.length + newImages.length > 4) {
//       alert("You can only upload a maximum of 4 images.");
//       return;
//     }

//     setGalleryImages([...galleryImages, ...newImages]);

//     try {
//       const uploadedImages = await Promise.all(
//         files.map(async (file) => {
//           const formData = new FormData();
//           formData.append("file", file);
//           formData.append("upload_preset", "SmileGirl"); // replace with your upload preset
//           formData.append("cloud_name", "dxkaiqscs"); // replace with your Cloudinary cloud name

//           const response = await axios.post(
//             `https://api.cloudinary.com/v1_1/dxkaiqscs/image/upload`,
//             formData
//           );
//           // console.log(response.data.url);
//           return response.data.secure_url;
//         })
//       );

//       setCloudinaryUrls([...cloudinaryUrls, ...uploadedImages]);
//       //console.log(cloudinaryUrls);
//       if (uploadedImages.length === 4) {
//         alert("All 4 images have been uploaded successfully.");
//       }
//     } catch (error) {
//       console.error("Failed to upload images to Cloudinary:", error);
//       alert("Failed to upload images.");
//     }
//   }

//   function handleRemoveImage(index) {
//     const updatedImages = galleryImages.filter((_, i) => i !== index);
//     const updatedCloudinaryUrls = cloudinaryUrls.filter((_, i) => i !== index);
//     setGalleryImages(updatedImages);
//     setCloudinaryUrls(updatedCloudinaryUrls);
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();

//     if (galleryImages.length !== 4) {
//       alert("Please upload exactly 4 images before adding the product.");
//       return;
//     }

//     if (colors.length === 0) {
//       alert("Please select at least one color before adding the product.");
//       return;
//     }

//     const productData = {
//       productName: productName,
//       sku: sku,
//       rentalPrice: rentalPrice,
//       material: material,
//       typeOfWear: typeOfWear,
//       description: description,
//       imageUrls: cloudinaryUrls,
//       colors: colors.map((color) => ({
//         colorName: color.color,
//         stocks: color.quantities.map((quantity, index) => ({
//           size: index + 3,
//           quantity: parseInt(quantity),
//         })),
//       })),
//     };

//     try {
//       await createProduct(productData);
//      // resetForm();
//       alert("Product added successfully!");
//     } catch (error) {
//       console.error("Failed to add product:", error);
//       alert("Failed to add product.");
//     }
//   }
//   // function resetForm() {
//   //   setProductName("");
//   //   setSku("");
//   //   setRentalPrice("");
//   //   setMaterial("default");
//   //   setTypeOfWear("default");
//   //   setDescription("");
//   //   setColors([]);
//   //   setGalleryImages([]);
//   //   setCloudinaryUrls([]);
//   // }

//   function handleCancel() {
//     resetForm();
//   }

//   return (
//     <Layout>
//       <form onSubmit={handleSubmit}>
//         <div className=" bg-gray-100 xl:pb-14 lg:pb-14 md:pb-10 sm:pb-6 pb-6 xl:px-26 lg:px-26 xl:px-26 sm:px-8 md:px-20 px-8 xl:py-8 lg:py-8 md:py-8 sm:py-6 py-6">
//           <div>
//             <h1 className="text-[11px] sm:text-[12px] md:text-[15px] lg:text-[16px] font-semibold text-black font-poppins">
//               Add Product
//             </h1>
//           </div>
//           <div className=" w-full grid bg-white rounded-xl  md:py-[20px] py-[10px] sm:py[10px] md:px-[40px] sm:px[10px]  px-[10px] xl:gap-10 lg:gap-10  xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 text-[10px] sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[14px font-poppins mt-4">
//             <div className="">
//               <div className="md:mb-7 mb-4">
//                 <label className="block mb-2  font-medium text-black  ">
//                   Product Name :
//                 </label>
//                 <input
//                   type="text"
//                   value={productName}
//                   className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg block w-full xl:p-2 lg:p-2 md:p-2 sm:p-1.5 p-1.5  "
//                   placeholder="Enter product name"
//                   onChange={(e) => setProductName(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="grid grid-flow-col gap-4">
//                 <div className="md:mb-7 mb-4">
//                   <label className="block mb-2  font-medium text-black  ">
//                     SKU :
//                   </label>
//                   <input
//                     type="text"
//                     value={sku}
//                     className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg block w-full xl:p-2 lg:p-2 md:p-2 sm:p-1.5 p-1.5  "
//                     placeholder="SKU00001"
//                     onChange={(e) => setSku(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="md:mb-7 mb-4">
//                   <label className="block mb-2  font-medium text-black  ">
//                     Rental Price :
//                   </label>
//                   <input
//                     type="text"
//                     value={rentalPrice}
//                     className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg block w-full xl:p-2 lg:p-2 md:p-2 sm:p-1.5 p-1.5  "
//                     placeholder="Enter rental price"
//                     onChange={(e) => setRentalPrice(e.target.value)}
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="grid grid-cols-2  gap-4">
//                 <div className="md:mb-7 mb-4 w-full ">
//                   <label className="block mb-2 font-medium text-black ">
//                     Material :
//                   </label>
//                   <select
//                     id="options"
//                     className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg block w-full xl:p-2 lg:p-2 md:p-2 sm:p-1.5 p-1.5  "
//                     value={material}
//                     required
//                     onChange={(e) => setMaterial(e.target.value)}
//                   >
//                     <option value="default" className="hidden">
//                       Select Material
//                     </option>
//                     <option value="Leather">Leather</option>
//                     <option value="synthetic">synthetic</option>
//                     <option value="canvas">canvas</option>
//                     <option value="velvet">velvet</option>
//                   </select>
//                 </div>
//                 <div className="md:mb-7 mb-4 w-full ">
//                   <label className="block mb-2  font-medium text-black ">
//                     Type of Wear :
//                   </label>
//                   <select
//                     id="options"
//                     className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg block w-full xl:p-2 lg:p-2 md:p-2 sm:p-1.5 p-1.5  "
//                     value={typeOfWear}
//                     required
//                     onChange={(e) => setTypeOfWear(e.target.value)}
//                   >
//                     <option value="default" className="hidden">
//                       Select type of wear
//                     </option>
//                     <option value="Flat">Flat</option>
//                     <option value="Low Heal">Low Heal</option>
//                     <option value="High Heal">High Heal</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="md:mb-7 mb-4 w-full">
//                 <label className="block mb-4 font-medium text-black ">
//                   Stock Quantity :
//                 </label>

//                 <ColorQuantityTable onColorsChange={setColors}  required/>
//               </div>
//             </div>
//             <div className=" md:mb-7 mb-4 w-full">
//               <div className="md:mb-7 mb-4 w-full ">
//                 <label className="block  font-medium text-black font-poppins mb-2">
//                   Product Gallery :
//                 </label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   multiple
//                   onChange={handleImageUpload}
//                   required
//                   disabled={galleryImages.length >= 4}
//                 />
//                 <div className="grid  xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 grid-cols-2 gap-4 mt-4">
//                   {galleryImages.map((image, index) => (
//                     <div
//                       key={index}
//                       className="w-[120px] h-[150px] border rounded-lg  relative"
//                     >
//                       <img
//                         src={image}
//                         alt={`Gallery ${index}`}
//                         className="w-full h-full object-cover"
//                       />
//                       <button
//                         type="button"
//                         onClick={() => handleRemoveImage(index)}
//                         className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 "
//                       >
//                         &times;
//                       </button>
//                     </div>
//                   ))}
//                   {galleryImages.length < 4 && (
//                     <div className="w-[120px] h-[150px] border rounded-md flex items-center justify-center text-gray-400">
//                       <CiImageOn size={40} />
//                     </div>
//                   )}
//                 </div>
//               </div>
//               <div className="grid grid-cols-1 mt-5 gap-4">
//                 <div className="md:mb-7 mb-4 w-full ">
//                   <label className="block mb-2  font-medium text-black font-poppins ">
//                     Description :
//                   </label>
//                   <textarea
//                     id="message"
//                     rows="5"
//                     className="block p-2.5 w-full  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 f-blue-500 "
//                     placeholder="Leave a comment..."
//                     value={description}
//                     required
//                     onChange={(e) => setDescription(e.target.value)}
//                   ></textarea>
//                 </div>
//               </div>
//               <div className="flex gap-4 justify-end items-end mt-4">
//                 <button
//                   type="submit"
//                   className="
//                  text-white bg-custom-pink hover:bg-pink-400 f font-medium rounded-lg   xl:py-2 xl:px-10 lg:py-2 lg:px-10 md:py-1 md:px-6 sm:py-1 sm:px-4  py-1 px-4 text-center"
//                 >
//                   Add Product
//                 </button>
//                 <button
//                   className=" text-white bg-gray-700 hover:bg-gray-400 focus:ring-4  font-medium rounded-lg   xl:py-2 xl:px-10 lg:py-2 lg:px-10 md:py-1 md:px-6 sm:py-1 sm:px-4  py-1 px-4 text-center"
//                   type="button"
//                   onClick={handleCancel}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//     </Layout>
//   );
// }

// export default addProduct;

/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Layout from "../../../components/layout/layout";

import { CiImageOn } from "react-icons/ci";
import ColorQuantityTable from "../components/colorquantitytable/colorQuantityTable";
import { createProduct } from "../../../services/api";
import ImageCropper from "../../../components/imageCropper/imageCropper";

import axios from "axios";

function addProduct() {
  const [productName, setProductName] = useState("");
  const [sku, setSku] = useState("");
  const [rentalPrice, setRentalPrice] = useState("");
  const [material, setMaterial] = useState("");
  const [typeOfWear, setTypeOfWear] = useState("");
  const [description, setDescription] = useState("");
  const [colors, setColors] = useState([]);

  const [galleryImages, setGalleryImages] = useState([]);
  const [cloudinaryUrls, setCloudinaryUrls] = useState([]);
  const [croppingImage, setCroppingImage] = useState(null);

  async function handleCroppedImage(croppedImageUrl) {
    try {
      const blob = await fetch(croppedImageUrl).then((res) => res.blob());
      const formData = new FormData();
      formData.append("file", blob);
      formData.append("upload_preset", "SmileGirl");
      formData.append("cloud_name", "dxkaiqscs");

      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dxkaiqscs/image/upload`,
        formData
      );

      const uploadedUrl = response.data.secure_url;
      setCloudinaryUrls((prev) => [...prev, uploadedUrl]);
      setGalleryImages((prev) => [...prev, croppedImageUrl]);
      setCroppingImage(null);
    } catch (error) {
      console.error("Failed to upload cropped image:", error);
      alert("Failed to upload cropped image.");
    }
  }

  async function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    if (galleryImages.length >= 4) {
      alert("You can only upload a maximum of 4 images.");
      return;
    }

    const fileUrl = URL.createObjectURL(file);
    setCroppingImage(fileUrl);
  }
  function handleRemoveImage(index) {
    const updatedImages = galleryImages.filter((_, i) => i !== index);
    const updatedCloudinaryUrls = cloudinaryUrls.filter((_, i) => i !== index);
    setGalleryImages(updatedImages);
    setCloudinaryUrls(updatedCloudinaryUrls);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (galleryImages.length !== 4) {
      alert("Please upload exactly 4 images before adding the product.");
      return;
    }

    if (colors.length === 0) {
      alert("Please select at least one color before adding the product.");
      return;
    }

    const productData = {
      productName: productName,
      sku: sku,
      rentalPrice: rentalPrice,
      material: material,
      typeOfWear: typeOfWear,
      description: description,
      imageUrls: cloudinaryUrls,
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
      // resetForm();
      alert("Product added successfully!");
    } catch (error) {
      console.error("Failed to add product:", error);
      alert("Failed to add product.");
    }
  }
  // function resetForm() {
  //   setProductName("");
  //   setSku("");
  //   setRentalPrice("");
  //   setMaterial("default");
  //   setTypeOfWear("default");
  //   setDescription("");
  //   setColors([]);
  //   setGalleryImages([]);
  //   setCloudinaryUrls([]);
  // }

  function handleCancel() {
    resetForm();
  }

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
                  value={productName}
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
                    value={sku}
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
                    value={rentalPrice}
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
                    required
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
                    required
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

                <ColorQuantityTable onColorsChange={setColors} required />
              </div>
            </div>
            <div className=" md:mb-7 mb-4 w-full">
              <div className="md:mb-7 mb-4 w-full ">
                <label className="block  font-medium text-black font-poppins mb-2">
                  Product Gallery :
                </label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  required
                  disabled={galleryImages.length >= 4}
                />
                <div className="grid  xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 grid-cols-2 gap-4 mt-4">
                  {galleryImages.map((image, index) => (
                    <div
                      key={index}
                      className="w-[120px] h-[150px] border rounded-lg  relative"
                    >
                      <img
                        src={image}
                        alt={`Gallery ${index}`}
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(index)}
                        className="absolute top-1 right-1 bg-custom-pink text-white rounded-full w-5 h-5 "
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                  {galleryImages.length < 4 && (
                    <div className="w-[120px] h-[150px] border rounded-md flex items-center justify-center text-gray-400">
                      <CiImageOn size={40} />
                    </div>
                  )}
                </div>
                {croppingImage && (
                  <div className="fixed inset-0 flex items-center justify-center rounded-lg">
                    <div className=" rounded-lg ">
                      <ImageCropper
                        image={croppingImage}
                        onCropDone={handleCroppedImage}
                        onCropCancel={() => setCroppingImage(null)}
                      />
                    </div>
                  </div>
                )}
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
                    required
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="flex gap-4 justify-end items-end mt-4">
                
                <button
                  className=" text-white bg-gray-700 hover:bg-gray-400 focus:ring-4  font-medium rounded-lg   xl:py-2 xl:px-10 lg:py-2 lg:px-10 md:py-1 md:px-6 sm:py-1 sm:px-4  py-1 px-4 text-center"
                  type="button"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="
                 text-white bg-custom-pink hover:bg-pink-400 f font-medium rounded-lg   xl:py-2 xl:px-10 lg:py-2 lg:px-10 md:py-1 md:px-6 sm:py-1 sm:px-4  py-1 px-4 text-center"
                >
                  Add Product
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
