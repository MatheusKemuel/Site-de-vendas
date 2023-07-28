import placeholder from "../../assets/images/Placeholder_view_vector.svg.png";
import estrelaContorno from "../../assets/images/contorno-de-estrela.png";
import coracao from "../../assets/images/coracao.png"
import { Link } from "react-router-dom"
import Button from "../Button";

export const CardFavorites = () => {
  return (
    <>
      <div className="flex mt-10 bg-white p-5 rounded-2xl">
        <div className="w-44 p-2 flex items-center">
          <img src={placeholder} alt="" />
        </div>
        <div className="md:grid md:grid-cols-2 sm:grid-cols-1 w-full pl-2 flex flex-col gap-5 justify-center items-center relative">
          <div className="flex flex-col justify-center gap-7">
            <div>
              <Link to="/product">
                <h2 className="font-bold text-gray-500"></h2>
              </Link>
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
          <div className="md:border-2 md:border-l-gray-200 md:border-r-0 md:border-t-0 md:border-b-0 md:pl-5 flex justify-evenly ">
            <div className="flex flex-col justify-center gap-2">
              <div className="text-red-600 text-sm font-bold line-through">
                R$ 149,99
              </div>
              <div className="text-green-700 text-3xl font-bold">R$ 99,99</div>
            </div>
            <div className="md:flex items-center hidden">
                <Button />
            </div>
          </div>
            <img src={coracao} alt="" className="coracaoCardFav w-7 h-7 absolute right-0 top-0"/>
        </div>
      </div>
    </>
  );
};

export default CardFavorites;
