import HeroText from ".";

export default {
  title: "Modules/HeroText",
  component: HeroText,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: "fullscreen",
  },
};

export const Primary = {
  args: {
    title: "Album layout",
    description:
      "Something short and leading about the collection below—its contents,  the creator, etc. Make it short and sweet, but not too short so folks don&apos;t simply skip over it entirely.",
    ctaRow: [
      {
        text: "Main call to action",
        variant: "contained" as "contained",
      },
      {
        text: "Secondary action",
        variant: "outlined" as "outlined",
      },
    ],
  },
};
