import coracao from "../../assets/images/coracao.png"
import CardFavorites from "../cards/CardFavorites";
import products from "../../json/db.json"

export const Favoritos = () => {
  return (
    <>
      <div className="favorite-container mt-10 p-5">
        <div className="flex gap-5 items-center">
          <img src={coracao} alt="" className="w-7"/>
          <h2 className="text-3xl font-bold text-blue-950">Favoritos</h2>
        </div>
        <div className="favorites-cards-container">
          {
            products.map((products) => {
             return <CardFavorites id={products.id} key={products.id} />
            })
          }
        </div>
      </div>
    </>
  );
};

export default Favoritos;
