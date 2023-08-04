import Card from "./cards/Card";
import { BsChevronDown } from "react-icons/bs";
import "animate.css";
import { useEffect, useContext } from "react";
import fetchProducts from "../api/fetchProducts";
import Loading from "./loading/Loading";
import AppContext from "../context/AppContext";

export const ProductsSession = () => {
  
  const { products, setProducts, loading, setLoading } = useContext(AppContext)
  

  useEffect(() => {
    fetchProducts("perifericos gamer").then((response) => {
      setProducts(response);
      setLoading(false)
    });
    console.log(products);
  }, []);

  return (
    (loading && <Loading />) || (
      <section className="mt-32">
      <div className="products-section grid lg:grid-cols-3 gap-y-32 md:grid-cols-2">
        {products.length > 0 &&
          products.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              productname={product.title}
              oldprice={product.original_price}
              currentprice={product.price}
              image={product.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
            />
          ))}
      </div>
      <div className="show-more flex justify-center flex-col items-center mt-32 ">
        <h3 className="font-bold text-2xl text-orange-400">Mostrar mais</h3>
        <BsChevronDown className="w-12 h-12 link bob-on-hover cursor-pointer" />
      </div>
    </section>
    )
  )
};

export default ProductsSession;
