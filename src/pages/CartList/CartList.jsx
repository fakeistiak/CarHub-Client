import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CartList = () => {
  const [allCart, setAllCart] = useState([]);
  const [refetch, setrefetch] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/carts").then((res) => {
      setAllCart(res.data);
    });
  }, [refetch]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/carts/${id}`).then((res) => {
          setrefetch(!refetch);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-purple-500">
          <thead className="bg-gray-200">
            <tr>
              <th
                scope="col"
                className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm uppercase tracking-wider font-semibold"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-4 py-2 sm:px-8 sm:py-3 text-left text-xs sm:text-sm font-semibold uppercase tracking-wider"
              >
                Price
              </th>
              <th
                scope="col"
                className="px-4 py-2 sm:px-12 sm:py-3 text-left text-xs sm:text-sm font-semibold uppercase tracking-wider"
              >
                Update
              </th>
              <th
                scope="col"
                className="px-4 py-2 sm:px-8 sm:py-3 text-left text-xs sm:text-sm font-medium uppercase tracking-wider"
              >
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-green-300">
            {allCart?.map((cart, i) => {
              return (
                <tr key={i}>
                  <td className="whitespace-nowrap px-4 py-3 sm:px-6 sm:py-4">
                    <div className="flex items-center">
                      <div className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0">
                        <img
                          className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
                          src={cart.photo}
                          alt=""
                        />
                      </div>
                      <div className="ml-2 sm:ml-4">
                        <div className="text-xs sm:text-sm font-medium text-gray-900">
                          {cart.name}
                        </div>
                        <div className="text-xs text-gray-500">{cart.type}</div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap font-semibold px-4 py-3 sm:px-6 sm:py-4">
                    ${cart.price}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 sm:px-6 sm:py-4">
                    <Link
                      to={`/updateCar/${cart?._id}`}
                      className="px-4 sm:px-8 py-2 sm:py-3 font-semibold rounded dark:bg-sky-400 hover:bg-blue-500 dark:text-white"
                    >
                      Update
                    </Link>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 sm:px-6 sm:py-4">
                    <button
                      type="button"
                      onClick={() => handleDelete(cart._id)}
                      className="px-4 sm:px-8 py-2 sm:py-3 font-bold rounded dark:bg-rose-500 hover:bg-red-600 text-xl sm:text-2xl dark:text-white"
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="h-60"></div>
    </div>
  );
};

export default CartList;
