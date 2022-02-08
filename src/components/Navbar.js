import { Link } from 'react-router-dom';

// styles
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="content-wrapper">
        <Link to="/" className="brand">
          <h1>Cooking Ninja</h1>
        </Link>
        <Link to="/create" className="link-button link-button--outline">Create Recipe</Link>
      </nav>
    </div>
  );
};

export default Navbar;
