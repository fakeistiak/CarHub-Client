
const Banner = () => {
    return (
      <div>
        <div className="container px-6 py-16 mx-auto bg-white border-y-2">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-3xl font-bold text-black lg:text-4xl">
                  Best place to choose <br /> your{" "}
                  <span className="text-blue-500">Cars</span>
                </h1>

                <p className="mt-3 text-black">
                  Innovative automaker crafting cutting-edge vehicles with
                  precision engineering, sustainable solutions, and a commitment
                  to redefining the future of transportation.
                </p>

                <button className="w-full px-5 font-bold py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-red-500 rounded-lg lg:w-auto hover:bg-red-700 focus:outline-none focus:bg-red-700">
                  Shop Now
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w-full h-full lg:max-w-3xl"
                src="https://i.ibb.co/N2ZnNV9/peter-broomfield-m3m-ln-R90u-M-unsplash-1.jpg"
                alt="Catalogue-pana.svg"
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;