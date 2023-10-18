import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const AddCar = () => {
  const handleAddCar = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const photo = form.photo.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const newCar = { name, photo, type, price, rating, description };
    console.log(newCar);
  };

  const { user } = useContext(AuthContext);
  console.log(user?.displayName);

  return (
    <div className="pt-10">
      <div className="flex flex-col items-center p-2 ">
        <i>
          <h1 className="text-4xl font-bold">
            Hi <span className="text-red-500">{user && user?.displayName}</span>{" "}
            want to add a Car? Let's make it
          </h1>
        </i>
      </div>
      <p className="text-center text-gray-400 pb-6">
        By filling this form you can add a car with your desired requirements
      </p>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <form onSubmit={handleAddCar}>
          <h1 className="text-3xl font-bold text-center text-white pb-2 pr-4 border-b-2">
            Add a Car
          </h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 pt-4 pb-4">
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Car Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Car Name"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                for="password"
              >
                Type
              </label>
              <input
                type="text"
                name="type"
                placeholder="Sedan / SUV"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                for="passwordConfirmation"
              >
                Price
              </label>
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">Rating</label>
              <input
                type="number"
                name="rating"
                placeholder="Rating"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Description
              </label>
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <button
            type="submit"
            value="Add Coffee"
            className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-red-500 rounded-md hover:bg-red-700 w-full focus:outline-none"
          >
            Add Car
          </button>
        </form>
      </section>
    </div>
  );
};

export default AddCar;
