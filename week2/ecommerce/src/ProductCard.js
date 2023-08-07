import { useNavigate } from "react-router-dom";
import { useState } from "react";
import heartRegular from "./assets/heart-regular.svg";
import heartSolid from "./assets/heart-solid.svg";
const ProductCard = ({ image, title, prodcutId }) => {
  const navigate = useNavigate();
  const [heartIcon, setHeartIcon] = useState(heartRegular);
  const onProdcutClick = () => {
    navigate(`/product/${prodcutId}`);
  };

  const onFavouriteClick = () => {
    // addNewItem(prodcutId);
    setHeartIcon((prevSrc) =>
      prevSrc === heartRegular ? heartSolid : heartRegular
    );
  };
  return (
    <div className="product">
      <img
        className="fav-image"
        onClick={() => onFavouriteClick()}
        src={heartIcon}
        alt="favoruite"
      />
      <div onClick={() => onProdcutClick()}>
        <img className="product-image" src={image} alt="prodcut cover" />
        <p className="product-title">{title}</p>
      </div>
    </div>
  );
};

export default ProductCard;
