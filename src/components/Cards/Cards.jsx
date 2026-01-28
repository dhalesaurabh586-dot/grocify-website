import React from 'react';
import { FaHeart, FaPlus } from 'react-icons/fa';
import Button from "../Button/Button";

const Cards = ({ image, name, price }) => {
  return (
    <div className="bg-zinc-100 p-5 rounded-xl shadow-sm">
      {/* Card Icons */}
      <div className="flex justify-between mb-4">
        <span className="text-3xl text-zinc-800 cursor-pointer hover:text-red-500 transition">
          <FaHeart />
        </span>
        <button className="bg-orange-500 text-white text-xl px-3 py-2 rounded-lg hover:bg-orange-600 transition">
          <FaPlus />
        </button>
      </div>

      {/* Card Image */}
      <div className="w-full h-48 flex items-center justify-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Card Content */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p className="text-2xl font-bold mt-4 mb-3">
          ${typeof price === "number" ? price.toFixed(2) : price}
        </p>
        <Button content="Shop Now" />
      </div>
    </div>
  );
};

export default Cards;