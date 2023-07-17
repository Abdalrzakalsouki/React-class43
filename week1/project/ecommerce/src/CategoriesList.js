import categories from "./fake-data/all-categories";
import { useState } from "react";

const CategoriesList = ({ setSelectedCategory }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  function onSelect(category, index) {
    if (activeIndex !== index) {
      const value = category.replace("FAKE: ", "");
      setSelectedCategory(value);
      setActiveIndex(index);
    } else {
      setSelectedCategory("");
      setActiveIndex(-1);
    }
  }
  return (
    <div className="categories">
      {categories.map((category, index) => (
        <div
          key={index}
          onClick={() => onSelect(category, index)}
          className={
            activeIndex === index
              ? "categories-item categories-item-selected"
              : "categories-item"
          }
        >
          {category}
        </div>
      ))}
    </div>
  );
};
export default CategoriesList;
