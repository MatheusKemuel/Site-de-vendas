import Card from "./cards/Card";
import { BsChevronDown } from "react-icons/bs";
import 'animate.css';

export const ProductsSession = () => {
  return (
    <section className="mt-32">
      <div className="products-section grid lg:grid-cols-3 gap-y-32 md:grid-cols-2">
        <div className="m-auto ">
          <Card />
        </div>
        <div className="m-auto">
          <Card />
        </div>
        <div className="m-auto">
          <Card />
        </div>
        <div className="m-auto">
          <Card />
        </div>
        <div className="m-auto">
          <Card />
        </div>
        <div className="m-auto">
          <Card />
        </div>


      </div>
        <div className="show-more flex justify-center flex-col items-center mt-24 ">
            <h3 className="font-bold text-2xl text-orange-400">Mostrar mais</h3>
            <BsChevronDown className="w-12 h-12 link bob-on-hover cursor-pointer"/>
        </div>
    </section>
  );
};

export default ProductsSession;
