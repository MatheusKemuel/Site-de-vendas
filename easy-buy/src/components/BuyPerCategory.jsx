import CardCategory from "./cards/CardCategory";

export const BuyPerCatergory = () => {
  return (
    <section className="mt-32">
      <div className="flex justify-center items-center">
        <h2 className="text-5xl font-bold text-blue-950">
          Compre por categoria
        </h2>
      </div>
      <div className="grid grid-cols-3 mt-32">
        <div className="m-auto">
          <CardCategory />
        </div>
        <div className="m-auto">
          <CardCategory />
        </div>
        <div className="m-auto">
          <CardCategory />
        </div>
      </div>
    </section>
  );
};

export default BuyPerCatergory;
