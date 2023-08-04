import coracao from "../../assets/images/coracao.png";
import CardFavorites from "../cards/CardFavorites";
import { useState, useEffect } from "react";

export const Favoritos = () => {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/favorites", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setFavorites(data);
      })
      .catch((err) => console.log(err));
  }, []);

  


  return (
    <div className="favorite-container mt-10 p-5">
      <div className="flex gap-5 items-center">
        <img src={coracao} alt="" className="w-7" />
        <h2 className="text-3xl font-bold text-blue-950">Favoritos</h2>
      </div>
      <div className="favorites-cards-container">
      {favorites.length > 0 &&
          favorites.map((favorites) => (
            <CardFavorites
              key={favorites.id}
              id={favorites.id}
              productname={favorites.productname}
              oldprice={favorites.oldprice}
              currentprice={favorites.currentprice}
              image={favorites.image}
            />
          ))}
      </div>
    </div>
  );
};

export default Favoritos;
