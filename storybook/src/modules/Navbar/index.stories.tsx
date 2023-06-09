import Navbar from ".";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Modules/Navbar",
  component: Navbar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: "fullscreen",
  },
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary"],
    },
  },
} as Meta;

export const Primary = {
  args: {
    color: "primary",
  },
};
