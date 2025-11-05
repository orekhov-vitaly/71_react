import "./styles.css";
import { products } from "./data.js";
import Product from "../../components/Product/Product";

function Homework05() {
    const productsList = products.map((product, index, products) => {
        return (
            <Product
                key={product.id}
                name={product.name}
                price={product.price}
            />
        );
    });
    return <div className="product-wrapper">{productsList}</div>;
}

export default Homework05;
