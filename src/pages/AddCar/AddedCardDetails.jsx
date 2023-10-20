import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const AddedCardDetails = () => {
  const cars = useLoaderData();
  const { id } = useParams();
  const [singleCarDetails, setSingleCardDetails] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/carDetails/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleCardDetails(data));
  }, []);
  console.log(singleCarDetails);
  console.log(cars);
  const singleCar = cars.find((car) => car._id == id);
  const { name, brandName, photo, type, price, rating, description } =
    singleCar;

  const handleAddToCart = () => {
    const details = {
      name: singleCar?.name,
      photo: singleCar?.photo,
      type: singleCar?.type,
      price: singleCar?.price,
    };
    axios.post("http://localhost:5000/carts", details).then((res) => {
        console.log("ädded");
        Swal.fire({
          title: "Success!",
          text: "Product Added in Cart Successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
    });
  };
  return (
    <div className=" py-20 flex justify-center bg-pink-100">
      <div className="max-w-7xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img className="object-cover w-full h-[600px]" src={photo} alt="Article" />

        <div className="p-6">
          <div>
            <span className="text-2xl font-semibold text-blue-600 uppercase dark:text-blue-400">
              {brandName}
            </span>
            <h1 className="text-white text-2xl font-semibold">{name}</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400"></p>
            <p className="text-white font-semibold text-xl pb-2">
              Type: {type}
            </p>
            <p className="text-gray-300 font-semibold text-sm pb-2">
              {description}A sedan is a four-door br passenger car with a <br />{" "}
              separate trunk. It offers comfort, style, and practicality for
              everyday driving.
            </p>
            <p className="text-white font-semibold text-xl pb-2">
              Price: {price} $
            </p>
          </div>
          <button
            onClick={handleAddToCart}
            button
            className="btn bg-red-500 hover:bg-red-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddedCardDetails;
