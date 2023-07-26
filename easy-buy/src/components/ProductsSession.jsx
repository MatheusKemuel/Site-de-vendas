import Card from "./cards/Card";
import { BsChevronDown } from "react-icons/bs";
import "animate.css";
import image1 from "../assets/images/mouse.jpg"
import image2 from "../assets/images/jbl.jpg"
import image3 from "../assets/images/teclado.jpeg"
import image4 from "../assets/images/teclado-gamer-mecanico-logitech-g-pro-rgb-lightsync-11.jpg"
import image5 from "../assets/images/mous.jpg"
import image6 from "../assets/images/astro.png"


export const ProductsSession = () => {
  return (
    <section className="mt-32">
      <div className="products-section grid lg:grid-cols-3 gap-y-32 md:grid-cols-2">
        <div className="m-auto ">
          <Card
            oldPrice="R$ 99.99"
            currentPrice="R$ 49.99"
            productName="Mouse Gamer Logitech"
            image={image1}
          />
        </div>
        <div className="m-auto">
          <Card
            oldPrice="R$ 149.99"
            currentPrice="R$ 99.99"
            productName="Teclado Gamer RedDragon"
            image={image3}
          />
        </div>
        <div className="m-auto">
          <Card
            oldPrice="R$ 199.99"
            currentPrice="R$ 149.99"
            productName="Headset JBL"
            image={image2}
          />
        </div>
        <div className="m-auto">
          <Card
            oldPrice="R$ 249.99"
            currentPrice="R$ 199.99"
            productName="Teclado Logitech"
            image={image4}
          />
        </div>
        <div className="m-auto">
          <Card
            oldPrice="R$ 149.99"
            currentPrice="R$ 99.99"
            productName="Mouse Logitech"
            image={image5}
          />
        </div>
        <div className="m-auto">
          <Card
            oldPrice="R$ 499.99"
            currentPrice="R$ 349.99"
            productName="Astro A20"
            image={image6}
          />
        </div>
      </div>
      <div className="show-more flex justify-center flex-col items-center mt-32 ">
        <h3 className="font-bold text-2xl text-orange-400">Mostrar mais</h3>
        <BsChevronDown className="w-12 h-12 link bob-on-hover cursor-pointer" />
      </div>
    </section>
  );
};

export default ProductsSession;
