import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import "./styles.scss";

const ItemCart = ({ item }) => {
  const { deleteItemToCart, addItemToCart } = useContext(CartContext);
  //const { id } = item;

  return (
    <div className="cartItem">
      <img src={item.img} alt={item.name} />
      <div className="dataContainer">
        <div className="left">
          <p>{item.name}</p>
          <div className="buttons">
            <button onClick={() => addItemToCart(item, item._id, "add")}>
              AGREGAR
            </button>
            <button onClick={() => deleteItemToCart(item, item._id, "del")}>
              SACAR
            </button>
          </div>
        </div>
        <div className="right">
          <div>{item.amount}</div>
          <p>Total: ${item.amount * item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;