import estrelaContorno from "../../assets/images/contorno-de-estrela.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import ImageDisplay from "../imageDisplay";

export const Card = ({ productname, oldprice, currentprice, image }) => {
  let [open, setOpen] = useState(false);

  return (
    <div className="card h-96 w-80">
      <div className="card-img w-80 m-auto">
        <ImageDisplay imageName={image} />
      </div>
      <div className="card-content flex flex-col justify-between gap-10">
        <div className="flex justify-between items-center mt-4">
          <Link to="/product">
            <h2 className="text-xl text-blue-950 font-bold">{productname}</h2>
          </Link>
          <div
            className="text-red-500 text-3xl cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={open ? "heart" : "heart-outline"}></ion-icon>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <div className="text-red-600 text-sm font-bold line-through">
              R$ {oldprice}
            </div>
            <div className="text-green-700 text-3xl font-bold">
              R$ {currentprice}
            </div>
          </div>
          <div className="flex gap-1">
            <div>
              <img
                className="w-4 cursor-pointer"
                src={estrelaContorno}
                alt=""
              />
            </div>
            <div>
              <img
                className="w-4 cursor-pointer"
                src={estrelaContorno}
                alt=""
              />
            </div>
            <div>
              <img
                className="w-4 cursor-pointer"
                src={estrelaContorno}
                alt=""
              />
            </div>
            <div>
              <img
                className="w-4 cursor-pointer"
                src={estrelaContorno}
                alt=""
              />
            </div>
            <div>
              <img
                className="w-4 cursor-pointer"
                src={estrelaContorno}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
