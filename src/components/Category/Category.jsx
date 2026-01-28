import React from "react";
import Heading from "../Heading/Heading";
import FruitsCat from "../../assets/fruits-and-veggies.jpeg";
import DairyCat from "../../assets/dairy-and-eggs.jpg";
import SeaFoodCat from "../../assets/meat-and-seafood.jpg";
import Button from "../Button/Button";

// Category data array
const categories = [
  {
    id: 1,
    title: "Fruits & Veggies",
    description:
      "Fresh, organic produce daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    Image: FruitsCat,
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    description:
      "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
    Image: DairyCat,
  },
  {
    id: 3,
    title: "Meat & SeaFood",
    description:
      "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    Image: SeaFoodCat,
  },
];

const Category = () => {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Shop" heading="by Category" />

        {/* Category cards */}
        <div className="flex flex-wrap gap-10 md:mt-15">
          {categories.map((card) => (
            <div
              key={card.id}
              className="flex-1 basis-[300px] transform transition duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Card Image */}
              <div className="w-full min-h-[30vh] relative -mb-10">
                <img
                  src={card.Image}
                  alt={card.title}
                  className="absolute bottom-0 w-full h-full object-cover rounded-t-xl"
                />
              </div>

              {/* Card Content */}
              <div className="bg-zinc-100 pt-16 p-8 rounded-xl">
                <h3 className="text-zinc-800 text-3xl font-bold">
                  {card.title}
                </h3>
                <p className="text-zinc-600 mt-3 mb-9">{card.description}</p>
                <Button content="See All" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;