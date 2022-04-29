import { queryString, parseString } from "./queryString";

describe("Object to string", () => {
  it("should paser object to string", () => {
    const obj = {
      name: "Renan",
      age: "36",
    };
    const result = "name=Renan&age=36";
    expect(queryString(obj)).toBe(result);
  });

  it("should parse obj with array to string", () => {
    const obj = {
      name: "Renan",
      age: "36",
      skils: ["JS", "Python", "TypeScript"],
    };
    const result = "name=Renan&age=36&skils=JS,Python,TypeScript";
    expect(queryString(obj)).toBe(result);
  });

  it("should throw error when input is nested obj", () => {
    const obj = {
      name: "Renan",
      age: "36",
      skils: ["JS", "Python", "TypeScript"],
      gamesRating: {
        "final fantasy": 8,
        automata: 9,
      },
    };
    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe("string to object", () => {
  it("should parse strin to object", () => {
    const inputQueryString = "name=Renan&age=36";
    const obj = {
      name: "Renan",
      age: "36",
    };
    expect(parseString(inputQueryString)).toEqual(obj);
  });

  it("should parse strin to object even the string has array parts", () => {
    const inputQueryString = "name=Renan&age=36&skils=JS,Python,TypeScript";
    const obj = {
      name: "Renan",
      age: "36",
      skils: ["JS", "Python", "TypeScript"],
    };
    // console.log(parseString(inputQueryString))
    expect(parseString(inputQueryString)).toEqual(obj);
  });
});
