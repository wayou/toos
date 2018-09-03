import Toos from "./toos";

test("it should works fine without crash", () => {
  expect(Toos.show("Allo!")).toBeUndefined();
});
