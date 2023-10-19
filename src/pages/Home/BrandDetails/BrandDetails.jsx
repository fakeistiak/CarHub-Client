import { useEffect, useState } from "react";
import {  useLoaderData, useParams } from "react-router-dom";
import AddedCard from "../../AddCar/AddedCard";

const BrandDetails = () => {
  const [cars, setCar] = useState([]);
    const carData = async () => {
      const response = await fetch('http://localhost:5000/car').then(res => res.json())
      setCar(response);
    }
    useEffect(() => {
      carData()
    }, [])
  console.log(cars);
  
    const { id } = useParams();
    const idNumber = parseInt(id);
      const brands = useLoaderData();
      console.log(brands);
      const brand = brands.find((item) => item.id === idNumber);
      console.log(brand);
    return (
      <>
        <h1 className="text-3xl py-8 text-center font-bold">
          Let's Explore <span className="text-red-500">{brand.names}</span>
        </h1>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
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
        <div className="m-20">
          <h1 className="text-6xl text-center pb-8">Total Card: {cars.length}</h1>
          <div className="grid md:grid-cols-2 gap-4">
        {
          cars.map(car => <AddedCard
            key={car._id}
            car={car}
            ></AddedCard>)
          }
          </div>
          </div>
      </>
    );
};

export default BrandDetails;