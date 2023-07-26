import CardCategory from "./cards/CardCategory";

export const BuyPerCatergory = () => {
  return (
    <section className="mt-32">
      <div className="flex justify-center items-center">
        <h2 className="text-5xl font-bold text-blue-950 text-center">
          Compre por categoria
        </h2>
      </div>
      <div className="buy-per-category grid lg:grid-cols-3 md:grid-cols-2 gap-y-32 mt-32">
        <div className="m-auto">
          <CardCategory category="Teclado"/>
        </div>
        <div className="m-auto">
          <CardCategory category="Mouse"/>
        </div>
        <div className="m-auto">
          <CardCategory category="Fone"/>
        </div>
      </div>
    </section>
  );
};

export default BuyPerCatergory;
