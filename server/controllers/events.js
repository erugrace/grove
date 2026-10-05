import { pool } from "../config/database.js";

const getEvents = async (req, res) => {
  try {
    const results = await pool.query(
      "SELECT * FROM events ORDER BY date ASC"
    );

    res.status(200).json(results.rows);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

const getEventsByLocation = async (req, res) => {
  try {
    const results = await pool.query(
      "SELECT * FROM events WHERE location = $1 ORDER BY date ASC",
      [req.params.location]
    );

    res.status(200).json(results.rows);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message || "Database query failed"
    });
  }
};

export default {
  getEvents,
  getEventsByLocation
};