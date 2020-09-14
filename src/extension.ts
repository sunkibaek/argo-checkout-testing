import { extend } from "@shopify/argo-checkout";

export const handleShouldRenderExtension = ({ storage }: any) => {
  storage.update({ myExtensionData: {} });

  return { render: true };
};

// console.log("extend", Object.keys(self.shopify));

extend("Checkout::PostPurchase::ShouldRender", handleShouldRenderExtension);
