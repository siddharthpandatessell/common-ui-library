import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import GridLayout from "./GridLayout";
import TessellButton from "../../components/TessellButton/TessellButton";

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
    content: [<TessellButton label="Test 1"  variant="outlined" />,
    <TessellButton label="Test 2"  variant="contained" />,
    <TessellButton label="Test 3"  variant="text" />]
  },
};
