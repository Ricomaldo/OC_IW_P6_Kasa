import { useNavigate } from "react-router-dom";
import "../styles/components/Card.scss";

const Card = ({ id, cover, title }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/logement/${id}`);
  };

  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${cover})`, cursor: "pointer" }}
      onClick={handleClick}
    >
      <h2>{title}</h2>
    </div>
  );
};

export default Card;
