import React from "react";
import { PRODUCTS } from "../models/products";
import { Product } from "../components/product";
import "../assets/styles.css/shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>E Commerce Office Supplies</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};