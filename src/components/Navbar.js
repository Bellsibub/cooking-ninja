import { Link } from 'react-router-dom';

// components
import SearchBar from './SearchBar';

// styles
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="content-wrapper">
        <Link to="/" className="brand">
          <h1>Cooking Ninja</h1>
        </Link>
        <SearchBar />
        <Link to="/create" className="stl_button stl_button--outline-primary">
          Create Recipe
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
