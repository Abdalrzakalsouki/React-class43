import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <Link to="/">Prodcuts</Link>
      <Link to="/favourites">Favourites</Link>
    </div>
  );
};
export default Navbar;
