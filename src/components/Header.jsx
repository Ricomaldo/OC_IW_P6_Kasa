import kasaLogo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import "../styles/components/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img src={kasaLogo} alt="Kasa Logo" />
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A Propos</NavLink>
      </nav>
    </header>
  );
};

export default Header;
