import { within, userEvent } from "@storybook/testing-library";

import { Page } from ".";

export default {
  title: "Pages/Homepage",
  component: Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: "fullscreen",
  },
};

export const LoggedOut = {};

// More on interaction testing: https://storybook.js.org/docs/7.0/react/writing-tests/interaction-testing
export const LoggedIn = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByRole("button", {
      name: /Log in/i,
    });
    await userEvent.click(loginButton);
  },
};
