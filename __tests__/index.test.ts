import index from "../src";

describe("index", () => {
  it("returns true", () => {
    const result = index();

    expect(result).toBe(true);
  });
});
