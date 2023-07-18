import placeholder from "../../assets/images/Placeholder_view_vector.svg.png";
import coracaoContorno from "../../assets/images/contorno-em-forma-de-coracao.png";
import estrelaContorno from "../../assets/images/contorno-de-estrela.png"


export const Card = () => {
  return (
    <div className="card h-96 w-80 ">
      <div className="card-img w-80 m-auto">
        <img src={placeholder} alt="" className=" rounded-xl" />
      </div>
      <div className="card-content flex flex-col justify-between gap-10">
        <div className="flex justify-between items-center mt-4">
          <h2 className="text-xl text-blue-950 font-bold">Nome do produto</h2>
          <img className="w-7 h-7 cursor-pointer"  src={coracaoContorno} alt="" />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <div className="text-red-600 text-sm font-bold line-through">R$ 149,99</div>
            <div className="text-green-700 text-3xl font-bold">R$ 99,99</div>
          </div>
          <div className="flex gap-1">
            <div><img className="w-4 cursor-pointer" src={estrelaContorno} alt="" /></div>
            <div><img className="w-4 cursor-pointer" src={estrelaContorno} alt="" /></div>
            <div><img className="w-4 cursor-pointer" src={estrelaContorno} alt="" /></div>
            <div><img className="w-4 cursor-pointer" src={estrelaContorno} alt="" /></div>
            <div><img className="w-4 cursor-pointer" src={estrelaContorno} alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
