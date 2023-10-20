import { Link, useNavigate } from "react-router-dom"; // Import useNavigate instead of navigate
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate(); // Use the imported useNavigate

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const name = form.get("name");
    const photo = form.get("photo");
    const password = form.get("password");
    console.log(email, password, name, photo);

    if (
      password.length < 6 ||
      !/[A-Z]/.test(password) ||
      !/[!@#$%^&*]/.test(password)
    ) {
      toast.error(
        "Password must be at least 6 characters long, contain a capital letter, and a special character."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateUser({ name, photo }).then(
          console.log(result.user),
          toast.success("Sign up Successful"),
          navigate("/"),

          window.location.reload()
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <header className="bg-pink-100 pattern">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col items-center py-6 lg:h-[91vh] sm:h-screen lg:flex-row">
            <div>
              <h3 className="mt-2 text-6xl font-bold text-black">
                Hello <span className="text-red-500">Amigos</span>
                <br />
                <span className="text-red-500">Sign up</span> Now
              </h3>

              <p className="mt-4 text-black">
                Please Register to meet our team and know about us also you can
                connect with us
              </p>
            </div>

            <div className="flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0">
              <div className="w-full max-w-md bg-white rounded-lg dark:bg-black">
                <div className="px-6 py-8 text-center">
                  <h2 className="text-3xl font-bold text-gray-700 dark:text-white">
                    Register
                  </h2>

                  <form onSubmit={handleRegister} action="#">
                    <div className="mt-4 text-white">
                      <p className="text-start text-lg pb-2">Name</p>
                      <input
                        className="block w-full px-4 py-2 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring"
                        required
                        type="text"
                        name="name"
                        placeholder="Name"
                        aria-label="Email address"
                      />
                      {/* <p className="text-start text-lg pt-2">Date Of Birth</p>

                      <input
                        className="block w-full px-4 py-2 mt-2 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring"
                        required
                        type="date"
                        name="birth"
                        placeholder="Date Of Birth"
                        aria-label="Email address"
                      /> */}
                      <p className="text-start text-lg pt-2">Image</p>

                      <input
                        className="block w-full px-4 py-2 mt-2 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring"
                        type="text"
                        name="photo"
                        placeholder="Image URL"
                      />
                      <p className="text-start text-lg pt-2">E-mail</p>

                      <input
                        className="block w-full px-4 py-2 mt-2 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring"
                        required
                        type="email"
                        name="email"
                        placeholder="Email"
                      />
                      <p className="text-start text-lg pt-2">Password</p>

                      <input
                        className="block w-full px-4 py-2 mt-2 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring"
                        required
                        type="password"
                        name="password"
                        placeholder="Password"
                        aria-label="Password"
                      />
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <button className="btn bg-red-500 hover:bg-red-700 text-white w-full">
                        Register
                      </button>
                    </div>
                  </form>
                  <p className="text-sm text-white">
                    Already have an Account?{" "}
                    <Link to="/login" className="text-blue-600 pl-2">
                      {" "}
                        Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Register;
