import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import AddedCard from "../../AddCar/AddedCard";

const BrandDetails = () => {
  const [cars, setCar] = useState([]);
  const carData = async () => {
    const response = await fetch(
      "https://assignment-10-k90fiwama-fakeistiak.vercel.app/car"
    ).then((res) => res.json());
    setCar(response);
  };
  useEffect(() => {
    carData();
  }, []);
  console.log(cars);

  const { id } = useParams();
  const idNumber = parseInt(id);
  const brands = useLoaderData();
  console.log(brands);
  const brand = brands.find((item) => item.id === idNumber);
  console.log(brand);

  const [getFixedBrand, setGetFixedBrand] = useState();
  useEffect(() => {
    fetch(
      `https://assignment-10-k90fiwama-fakeistiak.vercel.app/brand/${brand?.names}`
    )
      .then((res) => res.json())
      .then((data) => setGetFixedBrand(data));
  }, []);
  console.log(getFixedBrand);
  return (
    <>
      <h1 className="text-3xl py-8 text-center font-bold bg-pink-100">
        Let's Explore <span className="text-red-500">{brand.names}</span>
      </h1>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full ">
          <img src={brand.image1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={brand.image2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={brand.image3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="p-20 border-y-2 bg-pink-100">
        <h1 className="text-6xl text-center pb-12 font-bold py-8 text-red-600">
          Our Best Selling Cars
        </h1>
        <div className="grid md:grid-cols-2 gap-16 justify-center">
          {getFixedBrand?.map((car) => (
            <AddedCard key={car._id} car={car}></AddedCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default BrandDetails;
