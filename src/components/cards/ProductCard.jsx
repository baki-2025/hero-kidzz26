"use client";

import Image from "next/image";
import { FaCartPlus, FaStar } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const ProductCard = ({ product }) => {
  const {
    title,
    image,
    price,
    ratings,
    reviews,
    sold,
  } = product;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border border-base-200">
      <figure className="relative h-60 overflow-hidden">
        <Image
          width={200}
          height={180}
          src={image}
          alt={title}
        
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </figure>

      <div className="card-body p-4">
        <h2 className="card-title text-lg line-clamp-2 min-h-[56px]">
          {title}
        </h2>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1 text-yellow-500">
            <FaStar />
            <span className="font-semibold text-base-content">
              {ratings}
            </span>
          </div>

          <span>{reviews} Reviews</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <HiOutlineShoppingBag />
          <span>{sold} Sold</span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-2xl font-bold text-primary">
            ৳ {price}
          </p>

          <button className="btn btn-primary btn-sm">
            <FaCartPlus />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;