import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const AddedCardDetails = () => {
    const cars = useLoaderData();
    const { id } = useParams();
    const [singleCarDetails, setSingleCardDetails] = useState()
    useEffect(() => {
        fetch(`http://localhost:5000/carDetails/${id}`)
          .then((res) => res.json())
            .then((data) => setSingleCardDetails(data));
    }, [])
    console.log(singleCarDetails);
    console.log(cars)
    const singleCar = cars.find(car => car._id == id);
    const { name, brandName, photo, type, price, rating, description } = singleCar;

    
    return ( 
      
    <div className="pl-32 py-20">
      <div className="max-w-7xl max-h-3x overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img
          className="object-cover w-full h-96"
          src={photo}
          alt="Article"
        />

        <div className="p-6">
          <div>
            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
              Product
            </span>
            <a
              href="#"
              className="block mt-2 text-xl font-semibold  transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
              tabindex="0"
              role="link"
            >
              I Built A Successful Blog In One Year
            </a>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
             
            </p>
            <p className="text-white"></p>
            <p className="text-white">hi</p>
            <p className="text-white">hi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddedCardDetails;
