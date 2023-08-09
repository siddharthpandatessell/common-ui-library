import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import GridLayout from "./GridLayout";

// Default metadata of the story https://storybook.js.org/docs/react/api/csf#default-export
const meta: Meta<typeof GridLayout> = {
  title: "Layouts/GridLayout",
  component: GridLayout,
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: { action: "clicked" },
  },
};

export default meta;

// The story type for the component https://storybook.js.org/docs/react/api/csf#named-story-exports
type Story = StoryObj<typeof GridLayout>;

export const Primary: Story = {
  args: {
    backgroundColor: 'red',
    content: 'Hi, from Test layout component'
  },
};
