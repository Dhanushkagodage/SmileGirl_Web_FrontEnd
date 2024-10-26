
// import React, { useState } from "react";
// import Cropper from "react-easy-crop";
// import axios from "axios";

// function ImageCropper({ image, onCropDone, onCropCancel }) {
//   const [crop, setCrop] = useState({ x: 0, y: 0 });
//   const [zoom, setZoom] = useState(1);
//   const [cropArea, setCropArea] = useState(null);
//   const aspectRatio = 4 / 5;

//   const onCropComplete = (_, croppedAreaPixels) => {
//     setCropArea(croppedAreaPixels);
//   };

//   const getCroppedImg = async () => {
//     // Assuming you have some logic to get the cropped image from Cropper
//     try {
//       const canvas = document.createElement("canvas");
//       const ctx = canvas.getContext("2d");
//       const img = new Image();
//       img.src = image;
//       await new Promise((resolve) => {
//         img.onload = () => {
//           const { width, height } = cropArea;
//           canvas.width = width;
//           canvas.height = height;
//           ctx.drawImage(
//             img,
//             cropArea.x,
//             cropArea.y,
//             width,
//             height,
//             0,
//             0,
//             width,
//             height
//           );
//           resolve();
//         };
//       });

//       return new Promise((resolve) => {
//         canvas.toBlob((blob) => {
//           const fileUrl = URL.createObjectURL(blob);
//           resolve(fileUrl);
//         }, "image/jpeg");
//       });
//     } catch (error) {
//       console.error("Failed to crop image:", error);
//       return null;
//     }
//   };

//   const handleCropDone = async () => {
//     const croppedImage = await getCroppedImg();
//     if (croppedImage) {
//       onCropDone(croppedImage);
//     }
//   };

//   return (
//     <div className=" grid grid-cols-1 bg-black">
//         <div className="bg-black">
//         <Cropper
//         image={image}
//         crop={crop}
//         zoom={zoom}
//         aspect={aspectRatio}
//         onCropChange={setCrop}
//         onZoomChange={setZoom}
//         onCropComplete={onCropComplete}
//         style={{
//             containerStyle: {
//               width: "100%",
//               height: "80%",
//               backgroundColor: "#c0c0c0",
              
//             },
//             cropAreaStyle: {
//               color: "#c0c0c0",
//               border: "2px solid white",
//             },
//           }}
//       />
//         </div>
//       <div className="z-50 flex  mt-[100%] justify-between">
//       <button onClick={onCropCancel} className="text-white bg-custom-pink hover:bg-pink-400 font-medium rounded-lg py-1 px-4 text-center">
//         Cancel
//       </button>
//       <button onClick={handleCropDone} className="text-white bg-custom-pink hover:bg-pink-400 font-medium rounded-lg py-1 px-4 text-center">
//         Crop
//       </button>
//       </div>
      
//     </div>
//   );
// }

// export default ImageCropper;

import React, { useState } from "react";
import Cropper from "react-easy-crop";

function ImageCropper({ image, onCropDone, onCropCancel }) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [cropArea, setCropArea] = useState(null);
  const aspectRatio = 4 / 5;

  const onCropComplete = (_, croppedAreaPixels) => {
    setCropArea(croppedAreaPixels);
  };

  const getCroppedImg = async () => {
    try {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.src = image;
      await new Promise((resolve) => {
        img.onload = () => {
          const { width, height } = cropArea;
          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(
            img,
            cropArea.x,
            cropArea.y,
            width,
            height,
            0,
            0,
            width,
            height
          );
          resolve();
        };
      });

      return new Promise((resolve) => {
        canvas.toBlob((blob) => {
          const fileUrl = URL.createObjectURL(blob);
          resolve(fileUrl);
        }, "image/jpeg");
      });
    } catch (error) {
      console.error("Failed to crop image:", error);
      return null;
    }
  };

  const handleCropDone = async () => {
    const croppedImage = await getCroppedImg();
    if (croppedImage) {
      onCropDone(croppedImage);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
      <div className="rounded-lg   w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 ">
        <h2 className="text-center text-lg font-semibold py-4 bg-black text-white ">
          Crop Image
        </h2>
        <div className="relative w-full h-96 items-center  ">
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={aspectRatio}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
            style={{
              containerStyle: {
                width: "100%",
                height: "100%",
                backgroundColor: "#fff",
                padding: "20px",
              },
              cropAreaStyle: {
                color: "#f3f4f6",
                border: "2px solid white",
              },
            }}
          />
        </div>
        <div className="flex gap-2 justify-center px-4 py-3 bg-gray-100 border-t border-gray-200">
          <button
            onClick={onCropCancel}
            className="text-white bg-gray-600 hover:bg-gray-300 font-medium rounded-md py-2 px-4 w-full"
          >
            Cancel
          </button>
          <button
            onClick={handleCropDone}
            className="text-white bg-custom-pink hover:bg-pink-400 font-medium rounded-md py-2 px-4 w-full"
          >
            Crop
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageCropper;
