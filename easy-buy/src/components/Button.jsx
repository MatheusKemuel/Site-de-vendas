import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const Button = () => {
  return (
    <>
      <Link to="/product">
        <div className="btn-fav bg-orange-400 hover:bg-orange-500 duration-200  rounded-xl text-white font-bold text-2xl flex justify-center items-center gap-2">
          <AiOutlineShoppingCart />
          Comprar
        </div>
      </Link>
    </>
  );
};

export default Button;
