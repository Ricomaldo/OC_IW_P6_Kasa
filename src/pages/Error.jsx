import { Link } from "react-router-dom";
import "../styles/pages/Error.scss";

const Error = () => {
  return (
    <div className="error">
      <div className="hero">404</div>
      <div className="info">Oups! La page que vous demandez n'existe pas.</div>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
};

export default Error;
