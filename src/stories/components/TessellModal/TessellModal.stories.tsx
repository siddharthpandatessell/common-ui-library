import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import TessellModal from './TessellModal';

// Default metadata of the story https://storybook.js.org/docs/react/api/csf#default-export
const meta: Meta<typeof TessellModal> = {
  title: "Components/TessellModal",
  component: TessellModal,
  //👇 Enables auto-generated documentation for the component story
  tags: ['autodocs'],
  argTypes: {
    textColor: { control: "color" },
    onClick: { action: "clicked" },
  },
};

export default meta;

// The story type for the component https://storybook.js.org/docs/react/api/csf#named-story-exports
type Story = StoryObj<typeof TessellModal>;


export const Primary: Story = {
  args: {
    label: 'Primary',
    variant: "contained",
    size: "large",
    color: "primary",
  },
};

export const Secondary: Story = {
    parameters: {
    docs: {
      source: { language: 'tsx' },
    },
    args: {
    ...Primary.args,
    label: 'Secondary',
    variant: "contained",
    size: "medium",
    color: "error",
  },
  },
};

export const Modal: Story = {
  args: {
    ...Primary.args,
    label: 'Modal',
    variant: "outlined",
    size: "medium",
    color: "success",
  },
};
