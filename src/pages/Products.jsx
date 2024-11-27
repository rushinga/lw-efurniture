import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductShow from "../components/ProductShow";

const Products = () => {
  return (
    <>
      <div>
        <Header />
        <ProductShow />
        <Footer />{" "}
      </div>
    </>
  );
};

export default Products;
