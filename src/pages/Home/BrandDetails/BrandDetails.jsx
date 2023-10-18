import {  useLoaderData, useParams } from "react-router-dom";

const BrandDetails = () => {

    const { id } = useParams();
    const idNumber = parseInt(id);
      const brands = useLoaderData();
      console.log(brands);
      const brand = brands.find((item) => item.id === idNumber);
      console.log(brand);
    return (
      <>
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <img
              src={brand.image1}
              className="w-full"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src={brand.image2}
              className="w-full"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src={brand.image3}
              className="w-full"
            />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
        </div>
      </>
    );
};

export default BrandDetails;