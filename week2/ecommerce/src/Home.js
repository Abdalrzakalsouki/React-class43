import CategoriesList from "./CategoriesList";
import ProductList from "./ProductList";
import Navbar from "./Navbar";
import { useState } from "react";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const onSelectCategory = (category) => {
    if (category === `FAKE: ${selectedCategory}`) {
      setSelectedCategory("");
    } else {
      const categoryNameCleaned = category.replace("FAKE: ", "");
      setSelectedCategory(categoryNameCleaned);
    }
  };

  return (
    <div>
      <h1>Prodcuts</h1>
      <Navbar />
      <CategoriesList
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
      />
      <ProductList category={selectedCategory} />
    </div>
  );
};

export default Home;
