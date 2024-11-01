import express from "express";
import { getLawsuit } from "./src/mocks/argos-lock.mjs";

const app = express();
const port = 8000;

app.set("json spaces", 2);
app.use(express.json());

app.post("/search", (req, res) => {
  const { query } = req.body;
  
  console.log("got " + query)
  const responseBody = getLawsuit(query);
  res.status(200).json(responseBody);
});

app.listen(port, () => {
  console.log(`Mock API running at http://localhost:${port}`);
});
