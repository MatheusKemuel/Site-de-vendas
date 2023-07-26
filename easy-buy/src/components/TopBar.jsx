import { Link } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import logo from "../assets/images/logo1.jpeg";
import { useState } from "react";

export const TopBar = () => {
  let [open, setOpen] = useState(false);

  return (
    <>
      <div className="topBarContainer flex items-center justify-between h-20 bg-blue-950">
        <Link
        to="/">
        <div className="logo flex items-center text-orange-400 text-xl font-bold ml-10">
          <img src={logo} alt="" className="w-20 logo" />
          <p>EasyBuy</p>
        </div>
        </Link>

        <select
          id="countries"
          className=" text-xl border-none text-gray-900 rounded-lg ml-20 mr-2 p-2.5 dark:bg-blue-950 dark:border-none dark:placeholder-gray-400 dark:text-white hidden lg:block"
        >
          <option>Categorias</option>
          <option value="fone">Fone</option>
          <option value="teclado">Teclado</option>
          <option value="mouse">Mouse</option>
        </select>

        <form className="w-1/2 form-search hidden lg:block">
          <input
            className="search-bar h-10 rounded-3xl ml-auto mr-2 w-full p-5 "
            type="text"
            placeholder="Pesquisar..."
          />
        </form>

        <div className="links-wrapper hidden lg:block">
          <ul className="flex mr-10">
            <li>
              <Link
                to="/favorites"
                className="flex items-center gap-1 ml-10 text-xl text-white"
                href=""
              >
                <p className="">Favoritos</p> <FcLike />
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="flex items-center gap-1 ml-10 text-xl text-white"
                href=""
              >
                <p className="">Carrinho</p> <AiOutlineShoppingCart />
              </Link>
            </li>
            <li>
              <Link
                to="/account"
                className="flex items-center gap-1 ml-10 text-xl text-white"
                href=""
              >
                <p className="">Conta</p> <BiUser />
              </Link>
            </li>
          </ul>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-white text-5xl lg:hidden"
        >
          <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
        </button>
      </div>

      <div
        className={`p-5 absolute bg-blue-950 w-full transition-all z-10 duration-500 ease-in ${
          open ? "top-25 " : "top-[-490px]"
        }`}
      >
        <ul className="lg:hidden flex flex-col gap-2">
          <li className="hover:bg-blue-900">
            <Link to="/favorites" className="flex items-center gap-3 text-xl text-white" href="">
              <p className="">Favoritos</p> <FcLike />
            </Link>
          </li>
          <li className="hover:bg-blue-900">
            <Link to="/cart" className="flex items-center gap-3 text-xl text-white" href="">
              <p className="">Carrinho</p> <AiOutlineShoppingCart />
            </Link>
          </li>
          <li className="hover:bg-blue-900 flex ">
            <Link to="/account" className="flex items-center gap-3 text-xl text-white" href="">
              <p className="">Conta</p> <BiUser />
            </Link>
          </li>

          <li>
            <select
              id="countries"
              className="flex text-xl border-none text-gray-900 rounded-lg -ml-1 dark:bg-blue-950 dark:border-none dark:placeholder-gray-400 dark:text-white"
            >
              <option>Categorias</option>
              <option value="fone">Fone</option>
              <option value="teclado">Teclado</option>
              <option value="mouse">Mouse</option>
            </select>
          </li>
        </ul>
      </div>

      <form className="w-full block lg:hidden bg-blue-950 px-5">
        <input
          className="search-bar h-10 rounded-3xl w-full p-5 mb-5"
          type="text"
          placeholder="Pesquisar..."
        />
      </form>
    </>
  );
};

export default TopBar;
