import { useState } from "react";
import { Link } from "react-router-dom";

const AddedCard = ({ car }) => {
  const { name,_id, brandName, photo, type, price, rating, description } = car;
    return (
      <div>
        <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div className="px-6 py-2">
            <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
              {name}
            </h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          </div>

          <img
            className="object-cover w-full h-80 mt-2"
            src={photo}
          />

          <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
            <div className="flex gap-8">
              <h1 className="text-lg font-bold text-white">Price: {price}$</h1>
              <div className="rating flex items-center gap-1">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <h1 className="text-2xl font-bold text-white">{rating}</h1>
              </div>
            </div>
            
            <Link to={`/addedCardDetails/${_id}`} className="btn bg-red-500 hover:bg-red-700 text-white">
              View More
            </Link>
          </div>
        </div>
      </div>
    );
};

export default AddedCard;