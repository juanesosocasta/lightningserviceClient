import React from "react";
import Cart from "../components/cart";
import Products from "../components/products";
import  "./stylesHome.scss";

export default function Home() {
  return (
    <div className="home">
      
      <Cart/>
      <Products/>
      
    </div>
    
  );
}
