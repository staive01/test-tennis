import express from "express";

import { getPlayers, getPlayerById } from "./helper";

// Init Express
const app = express();
const playerRouter = express.Router();

playerRouter.get("/", async (req, res, next) => {
  try {
    const players = await getPlayers();
    return res.json(players);
  } catch (error) {
    next(error);
  }
});
playerRouter.get("/:id", async (req, res, next) => {
  try {
    const player = await getPlayerById(req.params.id);
    if (!player) {
      return res.status(404).send("Player not found");
    }

    return res.json(player);
  } catch (error) {
    next(error);
  }
});

app.use("/players", playerRouter);
app.listen(3000, () => {
  console.log("App is ready on port 3000!");
});
