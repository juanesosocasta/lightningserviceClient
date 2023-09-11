import React, { useContext } from "react";
import { ProductsData } from "../../data/ProductsData";
import "./styles.scss";
import { CartContext } from "../../context/cartContext";
const Products = () => {
    const { addItemToCart } = useContext(CartContext)
    return (
        <div className="productsContainer">
            {ProductsData.map((Product, i) => (
                <div key={i} className="product">
                    <img src={Product.img} alt={Product.name} />
                    <div>
                        <p>
                            {Product.name}- ${Product.price}
                        </p>
                    </div>
                    <button onClick={() => addItemToCart(Product)}>añadir al carrito</button>
                </div>
            ))}
        </div>
    )
}
export default Products;