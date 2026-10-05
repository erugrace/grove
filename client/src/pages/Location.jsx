import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Location() {
  const { location } = useParams();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    console.log("Location from URL:", location);

    fetch(`http://localhost:3000/api/events/location/${location}`)
      .then((response) => {
        console.log("Response:", response);
        return response.json();
      })
      .then((data) => {
        console.log("Data from backend:", data);
        setEvents(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [location]);

  return (
    <div>
      <h1>{location}</h1>

      <p>Number of events: {events.length}</p>

      {events.map((event) => (
        <div key={event.id}>
          <h2>{event.name}</h2>
          <p>{event.date}</p>
          <p>{event.time}</p>
          <p>{event.description}</p>
          <p>{event.category}</p>
        </div>
      ))}
    </div>
  );
}

export default Location;