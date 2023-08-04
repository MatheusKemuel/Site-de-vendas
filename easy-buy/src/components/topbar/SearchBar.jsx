import { useState, useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai"
import fetchProducts from "../../api/fetchProducts";
import AppContext from "../../context/AppContext";

import { useNavigate } from "react-router-dom"

export const SearchBar = () => {

  const history = useNavigate()
  
  const { setProducts, setLoading } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState("");



  const handleSubmit = async (event) => {
    history(`/search`)
    event.preventDefault();
    setLoading(true)
    const products = await fetchProducts(searchValue);
    setProducts(products)
    setLoading(false)
    setSearchValue("")
  }
  return (
    <>
      <form className="w-1/2 form-search hidden lg:flex" onSubmit={handleSubmit}>
        <input
          className="search-bar h-10 rounded-l-3xl ml-auto w-full p-5 "
          type="text"
          value={searchValue}
          placeholder="Pesquisar..."
          onChange={({ target }) => setSearchValue(target.value)}
          required
        />
        <button type="submit" className="text-2xl bg-white pr-3 rounded-r-full">
          <AiOutlineSearch />
        </button>
      </form>
    </>
  );
};
export default SearchBar;
