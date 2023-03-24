import { Header } from ".";

export default {
  title: "Modules/Header",
  component: Header,
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
};

export const Primary = {
  args: {
    color: "primary",
  },
};
