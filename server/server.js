import "./config/dotenv.js";
import express from "express";
import eventsRouter from "./routes/events.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/events", eventsRouter);

app.get("/", (req, res) => {
  res.send("Grove server is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});