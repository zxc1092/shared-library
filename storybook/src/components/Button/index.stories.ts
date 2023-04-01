import Button from ".";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: "Components/Button",
  component: Button,
  tags: [],
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary"],
    },
    variant: {
      control: "select",
      options: ["contained", "outlined", "text"],
      description: "contained",
    },
    label: {
      control: "input",
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Base = {
  args: {
    color: "primary",
    variant: "contained",
    children: "Button",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary = {
  argTypes: {
    color: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    color: "primary",
    variant: "contained",
    children: "Button",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Secondary = {
  argTypes: {
    color: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    color: "secondary",
    variant: "contained",
    children: "Button",
  },
};
