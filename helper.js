import find from "lodash/find";
import orderBy from "lodash/orderBy";
import axios from "axios";

const EUROSPORT_URL =
  "https://eurosportdigital.github.io/eurosport-node-developer-recruitment/headtohead.json";

export async function getPlayers() {
  const data = await getData();

  return orderBy(data.players, "id");
}

export async function getPlayerById(playerId) {
  const data = await getData();
  const id = parseInt(playerId, 10);

  return find(data.players, player => player.id === id);
}

export async function getData() {
  try {
    const response = await axios(EUROSPORT_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
}
