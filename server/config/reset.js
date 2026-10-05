import "./dotenv.js";
import { pool } from "./database.js";
import events from "../data/events.js";

const createEventsTable = async () => {
  const query = `
    DROP TABLE IF EXISTS events;

    CREATE TABLE events (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      location VARCHAR(100) NOT NULL,
      date DATE NOT NULL,
      time VARCHAR(50) NOT NULL,
      description TEXT NOT NULL,
      image VARCHAR(255) NOT NULL,
      category VARCHAR(100) NOT NULL
    );
  `;

  await pool.query(query);
  console.log("events table created");
};

const seedEventsTable = async () => {
  await createEventsTable();

  for (const event of events) {
    await pool.query(
      `
      INSERT INTO events
      (name, location, date, time, description, image, category)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      `,
      [
        event.name,
        event.location,
        event.date,
        event.time,
        event.description,
        event.image,
        event.category
      ]
    );
  }

  console.log("events added successfully");
  await pool.end();
};

seedEventsTable();