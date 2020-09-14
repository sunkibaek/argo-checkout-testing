// In extension.test.js

// You’d usually only import this once, in a test setup file, but it’s presented
// here because you need to import it somewhere for these custom matchers to be
// available for tests.
import { Button } from "@shopify/argo-checkout";
import { mount } from "@remote-ui/testing";
import { handleRenderExtension } from "../src/extension-render";

describe("render", () => {
  it("calls done when the button is clicked", () => {
    const done = jest.fn();

    const app = mount((root) => {
      // This is where we are simulating Shopify calling the extension point.
      handleRenderExtension(root, { done });
    });

    // The trigger API allows us to call props on nested components to simulate
    // their effects. It also updates the `app` object with the current state of
    // the UI after the prop has finished executing.
    const button = app.find(Button);

    if (!button) {
      throw new Error("Cannot find the button");
    }

    button.trigger("onPress");

    expect(app.find(Button)).toContainRemoteText("Pressed!");
    expect(done).toHaveBeenCalled();
  });
});
