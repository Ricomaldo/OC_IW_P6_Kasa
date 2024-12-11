import "../styles/components/Host.scss";

const Host = ({ name, picture }) => {
  return (
    <div className="host">
      <p className="host__name">{name}</p>
      <img src={picture} alt={`Photo de ${name}`} className="host__picture" />
    </div>
  );
};

export default Host;
