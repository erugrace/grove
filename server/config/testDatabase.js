import "./dotenv.js";
import { pool } from "./database.js";

console.log("HOST:", process.env.PGHOST);
console.log("PORT:", process.env.PGPORT);
console.log("DATABASE:", process.env.PGDATABASE);

try {
  const result = await pool.query("SELECT NOW()");
  console.log("Database connected!");
  console.log(result.rows[0]);
} catch (error) {
  console.error("Database connection failed:");
  console.error(error);
} finally {
  await pool.end();
}