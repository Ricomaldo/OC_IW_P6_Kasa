import Banner from "../components/Banner";
import Card from "../components/Card";
import backgroundImage from "../assets/background-banner-home.jpg";

import data from "../utils/data.json";
import "../styles/pages/Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Banner
        image={backgroundImage}
        title="Chez vous, partout et ailleurs"
        shadowClass="strong-shadow"
      />
      <div className="grid">
        {data.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            cover={logement.cover}
            title={logement.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
