import { extend } from "@shopify/argo-checkout";

export const handleShouldRenderExtension = ({ storage }: any) => {
  storage.update({ myExtensionData: {} });

  return { render: true };
};

extend("Checkout::PostPurchase::ShouldRender", handleShouldRenderExtension);
