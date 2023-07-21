import { FcLike } from "react-icons/fc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import logo from "../assets/images/logo1.jpeg";

export const TopBar = () => {
  return (
    <div className="topBarContainer flex items-center h-20 bg-blue-950">
      <div className="logo flex items-center text-orange-400 text-xl font-bold ml-10">
        <img src={logo} alt="" className="w-20 logo" />
        <p>EasyBuy</p>
      </div>

      <select
        id="countries"
        className=" text-xl border-none text-gray-900 rounded-lg ml-20 block w-23 h-20 p-2.5 dark:bg-blue-950 dark:border-none dark:placeholder-gray-400 dark:text-white "
      >
        <option selected>Categorias</option>
        <option value="fone">Fone</option>
        <option value="teclado">Teclado</option>
        <option value="mouse">Mouse</option>
      </select>
      <form className="w-full">
        <input
          className="search-bar h-10 rounded-3xl ml-5 mr-2 w-full p-5"
          type="text"
          placeholder="Pesquisar..."
        />
      </form>
      <span className="cursor-pointer">
        <BsSearch />
      </span>

      <div className="links-wrapper hidden lg:block">
        <ul className="flex mr-10">
          <li>
            <a
              className="flex items-center gap-1 ml-10 text-xl text-white"
              href=""
            >
              Favoritos <FcLike />
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-1 ml-10 text-xl text-white"
              href=""
            >
              Carrinho <AiOutlineShoppingCart />
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-1 ml-10 text-xl text-white"
              href=""
            >
              Conta <BiUser />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
