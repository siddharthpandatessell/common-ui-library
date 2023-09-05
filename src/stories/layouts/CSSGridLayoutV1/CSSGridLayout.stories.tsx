import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CSSGridLayout from "./CSSGridLayout";
import TessellButton from "../../components/TessellButton/TessellButton";

// Default metadata of the story https://storybook.js.org/docs/react/api/csf#default-export
const meta: Meta<typeof CSSGridLayout> = {
  title: "Layouts/CSSGridLayout",
  component: CSSGridLayout,
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: { action: "clicked" },
  },
};

export default meta;

// The story type for the component https://storybook.js.org/docs/react/api/csf#named-story-exports
type Story = StoryObj<typeof CSSGridLayout>;

export const Primary: Story = {
  args: {
    backgroundColor: 'red',
    content: [<TessellButton label="Test 1"  variant="outlined" />,
    <TessellButton label="Test 2"  variant="contained" />,
    <TessellButton label="Test 3"  variant="text" />]
  },
};
