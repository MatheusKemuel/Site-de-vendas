import "animate.css";

export const CardCategory = ({category}) => {
  return (
    <div className="card-category bg-red-500 hover:bg-red-800 duration-500 category-img cursor-pointer flex justify-center items-center h-72 w-80 bob-on-hover">
      <div className="category-name h-72 w-80 flex justify-center items-center font-bold text-white text-5xl">
        <p className="">{category}</p>
      </div>
    </div>
  );
};

export default CardCategory;
