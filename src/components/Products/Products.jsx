import React, { useState } from "react";
import ProductList from "../ProductList/Product"; // ✅ renamed
import Cards from "../Cards/Cards";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";

const Products = () => {

  const categories = ["All", "Fruits", "Vegetables", "Dairy", "Meat", "SeaFood"];
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems = activeTab === "All"
      ? ProductList : ProductList.filter((item) => item.category === activeTab);

  const renderCards = filteredItems.slice(0, 8).map(Products =>{
    return(
      <Cards image={Products.image} name={Products.name} price={Products.price}/>
    )
  })

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Our" heading="Products" />

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mt-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-5 py-2 text-lg rounded-lg ${
                activeTab === category
                  ? "bg-gradient-to-b from-orange-400 to-orange-500 text-white"
                  : "bg-zinc-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-9 mt-20">
          {filteredItems.slice(0, 8).map((product) => (
            <Cards
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>

        <div className="mt-16 mx-auto w-fit">
          <Button content="View All" />
        </div>
      </div>
    </section>
  );
};

export default Products;
