/* eslint-disable no-unused-vars */
import React from 'react';
import Image from '../../assets/1.jpg';
import { FaRegHeart , FaRegEye  } from 'react-icons/fa';
import AboutShoe from '../../pages/user/pages/aboutShoe';
import { useNavigate } from 'react-router-dom';


function Shoecard({ product }) {
  const rating = 4;
  const navigate = useNavigate();

  return (
    <div className="w-full " onClick={() => navigate('/aboutShoe')}>
      <div className="grid h-fit shadow-[0_0_10px_0_rgba(0,0,0,0.2)] relative">
        {/* image row */}
        <div className="relative h-fit">
          <img
            src={product.imageUrl}
            alt="shoe"
            loading="lazy"
            className="object-cover w-full h-full"
          />
          {/* Icons stack on top-right of the image */}
          <div className="absolute top-1 right-1  space-y-1  sm:top-1 md:top-1 lg:top-2 xl:top-2 lg:right-2 xl:right-2 lg:space-y-2 xl:space-y-2 justify-center">
            <FaRegHeart  className="text-black  cursor-pointer font-thin text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]" />
            <FaRegEye  className="text-black  cursor-pointer font-thin text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]" />
          </div>
        </div>

        {/* text row */}
        <div className="text-center h-fit text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-Poppins  text-black flex flex-col justify-center pt-3 pb-3 ">
          <h1 className='font-medium'>{product.productName}</h1>

          {/* Review stars */}
          <div className="flex justify-center items-center mb-2">
            {[...Array(5)].map((_, index) => (
              <span key={index} className={`text-custom-pink  ${index < rating ? 'fill' : ''}`}>
                {index < rating ? '★' : '☆'}
              </span>
            ))}
          </div>

          <h1 className='font-normal'>Rs.{product.rentalPrice}</h1>
        </div>
      </div>
    </div>
  );
}

export default Shoecard;
