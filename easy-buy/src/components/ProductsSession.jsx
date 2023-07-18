import Card from "./cards/Card"

export const ProductsSession = () => {
    return(
        <section className="products-section grid lg:grid-cols-3 gap-y-32 mt-32 md:grid-cols-2">
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
        </section>
    )
}

export default ProductsSession