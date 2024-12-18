import { useState } from "react";
import "../styles/components/Collapse.scss";
import "../styles/animations/Collapse.scss";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse_title" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <i className={`fa-solid fa-chevron-up ${isOpen ? "open" : ""}`}></i>
      </div>

      <div className={`collapse_content-container ${isOpen ? "open" : ""}`}>
        <div className="collapse_content-text">{content}</div>
      </div>
    </div>
  );
};

export default Collapse;
