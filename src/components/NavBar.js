import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => (
  <div>
    <div className="nav-bar">
      <div className="store-links">
        <div className="store-branding">Bookstore CMS</div>
        <div className="books">BOOKS</div>
        <div className="categories">CATEGORIES</div>
      </div>
      <div className="oval">
        <FontAwesomeIcon icon={faUser} className="log-in" />
      </div>
    </div>
  </div>
);

export default NavBar;
