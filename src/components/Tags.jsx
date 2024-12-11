import "../styles/components/Tags.scss";

const Tags = ({ tags }) => {
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <div key={index} className="tags__item">
          {tag}
        </div>
      ))}
    </div>
  );
};

export default Tags;
