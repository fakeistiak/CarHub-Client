import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Brands = () => {
  const { brands } = useContext(AuthContext);


    return (
      <div>
        <div className=" px-6 py-10 mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 capitalize lg:text-5xl dark:text-white py-8">
            <span className="text-black">Our Brands</span>
          </h1>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2 ">
            {brands.map((brand, index) => (
              <Link to={`/brandDetails/${brand.id}`}
                key={index}
                className="flex items-end overflow-hidden bg-cover rounded-3xl shadow-black shadow-xl h-96"
                style={{ backgroundImage: `url(${brand.image})` }}
              >
                <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg ">
                  <h2 className="mt-4 text-3xl font-bold pb-8 text-gray-800 capitalize dark:text-white">
                    {brand.names}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Brands;