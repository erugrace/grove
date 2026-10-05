import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Location.css";

function Location() {
  const { location } = useParams();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/events/location/${location}`)
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, [location]);

  const locationName = location
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <main className="location-page">
      <Link to="/" className="back-link">
        ← Back to Grove
      </Link>

      <h1>{locationName}</h1>
      <p className="location-subtitle">
        See what’s happening at the {locationName}.
      </p>

      <div className="events-grid">
        {events.map((event) => (
          <article className="event-card" key={event.id}>
            <img
              src={event.image}
              alt={event.name}
              className="event-image"
            />

            <div className="event-content">
              <span className="event-category">
                {event.category}
              </span>

              <h2>{event.name}</h2>

              <p>
                <strong>Date:</strong> {event.date}
              </p>

              <p>
                <strong>Time:</strong> {event.time}
              </p>

              <p>{event.description}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Location;