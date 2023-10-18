import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Brands = () => {
    const [brands, setBrands] = useState([]);
    

 useEffect(() => {
   fetch("brands.json")
     .then((res) => res.json())
     .then((data) => setBrands(data));
 }, []);


    return (
      <div className="bg-white">
        <div className=" px-6 py-10 mx-auto">
          <h1 className="text-2xl font-bold text-center text-gray-800 capitalize lg:text-5xl dark:text-white py-8">
            <span className="text-red-500">Our Brands</span>
          </h1>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex items-end overflow-hidden bg-cover rounded-lg h-96"
                style={{ backgroundImage: `url(${brand.image})` }}
              >
                <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg ">
                  <h2 className="mt-4 text-3xl font-bold pb-8 text-gray-800 capitalize dark:text-white">
                    {brand.name}
                  </h2>
                  <Link
                    to={`/brandDetails/${brand.id}`}
                    className="btn bg-red-500 hover:bg-red-700 text-white"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Brands;