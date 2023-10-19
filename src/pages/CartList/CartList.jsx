import axios from "axios";
import { useEffect, useState } from "react";
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
      <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Price{" "}
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Update
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Delete
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {allCart?.map((cart, i) => {
            return (
              <tr key={i}>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={cart.photo}
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {cart.name}
                      </div>
                      <div className="text-sm text-gray-500">{cart.type}</div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4">${cart.price}</td>
                <td className="whitespace-nowrap px-6 py-4">
                  <button
                    type="button"
                    className="px-8 py-3 font-semibold rounded dark:bg-gray-100 dark:text-gray-800"
                  >
                    Update
                  </button>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <button
                    type="button"
                    onClick={() => handleDelete(cart._id)}
                    className="px-8 py-3 font-semibold rounded dark:bg-rose-100 dark:text-gray-800"
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
  );
};

export default CartList;
