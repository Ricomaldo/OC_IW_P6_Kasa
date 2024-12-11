import { useState } from "react";
import "../styles/components/Collapse.scss";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse-title" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        {/* nom de classe dynamique : ajout de la classe open à l'ouverture */}
        <i
          className={`fa-solid fa-chevron-up ${isOpen ? "open" : ""}`}
        ></i>{" "}
      </div>
      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  );
};

export default Collapse;
