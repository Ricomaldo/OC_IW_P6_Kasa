import kasaWhiteLogo from "../assets/logo-white.svg";
import "../styles/components/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={kasaWhiteLogo} alt="Kasa Logo" />
      <p>&copy; 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
