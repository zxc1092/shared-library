import Typography from ".";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: "Components/Typography",
  component: Typography,
  tags: [],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "title1",
        "title2",
        "title3",
        "title4",
        "title5",
        "body1",
        "body2",
        "body3",
        "body4",
        "body5",
      ],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Base = {
  args: {
    variant: "title1",
    children: "Obsess, Innovate, Repeat",
  },
};

export const Title1 = {
  argTypes: {
    variant: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    variant: "title2",
    children: "Obsess, Innovate, Repeat",
  },
};

export const Title3 = {
  argTypes: {
    variant: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    variant: "title3",
    children: "Obsess, Innovate, Repeat",
  },
};

export const Title4 = {
  argTypes: {
    variant: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    variant: "title4",
    children: "Obsess, Innovate, Repeat",
  },
};

export const Title5 = {
  argTypes: {
    variant: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    variant: "title5",
    children: "Obsess, Innovate, Repeat",
  },
};

export const Body1 = {
  argTypes: {
    variant: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    variant: "body1",
    children: "Obsess, Innovate, Repeat",
  },
};

export const Body2 = {
  argTypes: {
    variant: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    variant: "body2",
    children: "Obsess, Innovate, Repeat",
  },
};

export const Body3 = {
  argTypes: {
    variant: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    variant: "body3",
    children: "Obsess, Innovate, Repeat",
  },
};

export const Body4 = {
  argTypes: {
    variant: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    variant: "body4",
    children: "Obsess, Innovate, Repeat",
  },
};

export const Body5 = {
  argTypes: {
    variant: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    variant: "body5",
    children: "Obsess, Innovate, Repeat",
  },
};
