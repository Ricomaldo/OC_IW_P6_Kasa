import "../styles/components/Banner.scss";

const Banner = ({ image, title, shadowClass }) => {
  return (
    <div
      className={`banner ${shadowClass}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {title && <h1>{title}</h1>}
    </div>
  );
};

export default Banner;
