import * as nextImage from "next/image";
import "../styles/globals.css";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => <img {...props} />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    // defaultViewPort: INITIAL_VIEWPORTS,
    viewports: INITIAL_VIEWPORTS,
  },
};
