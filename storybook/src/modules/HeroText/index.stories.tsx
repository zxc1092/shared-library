import HeroText from ".";
import { Meta, Story } from "@storybook/react";
import homepageData from "../../mockData";

export default {
  title: "Modules/HeroText",
  component: HeroText,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta;

export const Base = { args: homepageData.heroText };
