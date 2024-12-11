import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import data from "../utils/data.json";
import Carousel from "../components/Carousel";
import Host from "../components/Host";
import Tag from "../components/Tags";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";
import "../styles/pages/Logement.scss";

const Logement = () => {
  const { logementId } = useParams();
  const navigate = useNavigate();
  const logement = data.find((item) => item.id === logementId);

  useEffect(() => {
    if (!logement) {
      navigate("/error");
    }
  }, [logement, navigate]);

  if (!logement) {
    return null;
  }

  return (
    <div className="logement">
      <Carousel pictures={logement.pictures} />
      <div className="logement__infos">
        <div className="logement__infos__left">
          <div className="logement__infos__left__title">
            <h2>{logement.title}</h2>
            <p>{logement.location}</p>
          </div>
          <Tag tags={logement.tags} />
        </div>
        <div className="logement__infos__right">
          <div className="logement__infos__rigth__host">
            <Host name={logement.host.name} picture={logement.host.picture} />
          </div>
          <Rating rating={logement.rating} />
        </div>
      </div>
      <div className="logement__collapses">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Équipements"
          content={
            <ul>
              {logement.equipments.map((equipement, index) => (
                <li key={index}>{equipement}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default Logement;
