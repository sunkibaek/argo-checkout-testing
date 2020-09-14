import { extend, Button } from "@shopify/argo-checkout";

extend("Checkout::PostPurchase::Render", handleRenderExtension);

export function handleRenderExtension(root: any, api: any) {
  const text = root.createText("Not pressed");
  const button = root.createComponent(Button, {
    onPress() {
      text.updateText("Pressed!");
      api.done();
    },
  });

  button.appendChild(text);
  root.appendChild(button);
  root.mount();
}
