import "./styles.css";

function Product({name, price}) {
    return(
        <div className="product-card">
            <p className="name">{name}</p>
            <p className="price">{price}</p>
        </div>
    );
};

export default Product;