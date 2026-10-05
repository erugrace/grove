import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <main className="home-page">
      <div className="grove-map">

        <img
          src="/images/Grove-map.png"
          alt="Grove community space with an arena, game lounge, courtyard, and garden"
          className="grove-image"
        />

        <Link
          to="/locations/arena"
          className="hotspot arena"
          aria-label="Explore the Arena"
        />

        <Link
          to="/locations/game-lounge"
          className="hotspot game-lounge"
          aria-label="Explore the Game Lounge"
        />

        <Link
          to="/locations/courtyard"
          className="hotspot courtyard"
          aria-label="Explore the Courtyard"
        />

        <Link
          to="/locations/garden"
          className="hotspot garden"
          aria-label="Explore the Garden"
        />

      </div>
    </main>
  );
}

export default Home;