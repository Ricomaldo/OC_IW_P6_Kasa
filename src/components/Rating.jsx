import "../styles/components/Rating.scss";

const Rating = ({ rating }) => {
  const maxStars = 5;

  return (
    <div className="rating">
      {[...Array(maxStars)].map((_, index) => (
        <i
          key={index}
          className={`fa-star ${index < rating ? "fa-solid" : "fa-regular"}`}
        ></i>
      ))}
    </div>
  );
};

export default Rating;
