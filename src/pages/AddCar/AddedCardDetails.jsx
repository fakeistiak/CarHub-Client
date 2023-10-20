import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const AddedCardDetails = () => {
  const cars = useLoaderData();
  const { id } = useParams();
  const [singleCarDetails, setSingleCardDetails] = useState();
  useEffect(() => {
    fetch(
      `https://assignment-10-k90fiwama-fakeistiak.vercel.app/carDetails/${id}`
    )
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
    axios
      .post(
        "https://assignment-10-k90fiwama-fakeistiak.vercel.app/carts",
        details
      )
      .then((res) => {
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
    <>
      <h1 className="text-4xl underline font-bold text-center bg-pink-100 pt-4">
        This is
        <span className="text-red-500"> {name}</span> one of the best selling{" "}
        <br />
        Vehicle of <span className="text-red-500">{brandName}</span>
      </h1>
      <div className=" py-20 flex justify-center bg-pink-100">
        <div className="w-full overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
          <img
            className="object-cover w-full lg:h-[700px] md:h-[500px] sm:h-[400px] "
            src={photo}
            alt="Article"
          />

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
                {description}A sedan is a four-door br passenger car with a{" "}
                <br /> separate trunk. It offers comfort, style, and
                practicality for everyday driving.
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
    </>
  );
};

export default AddedCardDetails;
