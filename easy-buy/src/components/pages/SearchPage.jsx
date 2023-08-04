import Card from "../cards/Card";
import "animate.css";
import { useEffect, useContext } from "react";
import fetchProducts from "../../api/fetchProducts";
import Loading from "../../components/loading/Loading";
import AppContext from "../../context/AppContext";

export const SearchPage = () => {
  const { products, setProducts, loading, setLoading, searchValue } = useContext(AppContext);

  useEffect(() => {
    fetchProducts(`${searchValue}`).then((response) => {
      setProducts(response);
      setLoading(false);
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
        
      </section>
    )
  );
};

export default SearchPage;
