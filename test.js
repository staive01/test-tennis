import { getPlayers, getPlayerById } from "./helper";

// TODO : use a mock instead real API endpoint, because data of endpoint can change in live.

describe("getPlayers", () => {
  it("get all players sorted by id", async () => {
    const players = await getPlayers();
    expect(players).toBeDefined();
    expect(players.length).toEqual(5);

    let lastId = 0;
    players.forEach(player => {
      expect(player.id > lastId);
      lastId = player.id;
    });
  });
});

describe("getPlayer", () => {
  it("get player with id 17", async () => {
    const player = await getPlayerById("17");
    expect(player).toBeDefined();
    expect(player.id).toEqual(17);
  });

  it("get unknow player with id 99", async () => {
    const player = await getPlayerById("99");
    expect(player).toBeUndefined();
  });

  it("get unknow player with wrong syntax id", async () => {
    const player = await getPlayerById("test");
    expect(player).toBeUndefined();
  });
});
