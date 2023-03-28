import InfoCards from ".";

export default {
  title: "Modules/InfoCards",
  component: InfoCards,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: "fullscreen",
  },
};

export const Primary = {
  args: {
    cards: [
      {
        title: "Featured post",
        date: "Nov 12",
        description:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        image: "https://source.unsplash.com/random",
        imageLabel: "Image Text",
      },
      {
        title: "Post title",
        date: "Nov 11",
        description:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        image: "https://source.unsplash.com/random",
        imageLabel: "Image Text",
      },
    ],
  },
};
