import { handleShouldRenderExtension } from "../src/extension";

describe("shouldRender", () => {
  it("stores some data", () => {
    const storage = { update: jest.fn() };

    // To be a little more future-proof, you may want to supply mock values
    // for all the fields this extension receives. For now, we’re just mocking
    // what we know our extension point callback uses.
    handleShouldRenderExtension({ storage });

    expect(storage.update).toHaveBeenCalledWith(expect.any(Object));
  });
});
