const { sum } = require("./calculator");

it("should 2 + 2 == 4", () => {
  expect(sum(2, 2)).toBe(4);
});

it("should 4 + 4 == 8", () => {
  expect(sum(4, 4)).toBe(8);
});

it("should 4 + 4 == 8 even the parameters is string", () => {
  expect(sum("4", "4")).toBe(8);
});

it("should throw error if some parameters is not a number", () => {
  expect(() => {
    sum("", "4");
  }).toThrowError();
});
