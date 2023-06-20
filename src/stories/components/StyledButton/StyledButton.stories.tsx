import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import StyledButton from './StyledButton';

// Default metadata of the story https://storybook.js.org/docs/react/api/csf#default-export
const meta: Meta<typeof StyledButton> = {
  title: "Components/StyledButton",
  component: StyledButton,
  argTypes: {
    textColor: { control: "color" },
    onClick: { action: "clicked" },
    color: { control: 'blue'}
  },
};

export default meta;

// The story type for the component https://storybook.js.org/docs/react/api/csf#named-story-exports
type Story = StoryObj<typeof StyledButton>;

export const Base: Story = {
  args: {
    label: 'Base',
    primary: true,
    size: "large",
    backgroundColor: "#2196f3",
  },
};

export const Primary: Story = {
  args: {
    ...Base.args,
    label: 'Primary',
    primary: true,
    size: "large",
    backgroundColor: "red",
  },
};

export const Secondary: Story = {
  args: {
    ...Base.args,
    label: 'Secondary',
    primary: false,
    size: 'small',
    backgroundColor: "green",
  },
};

export const Modal: Story = {
  args: {
    ...Base.args,
    label: 'Modal',
    size: "medium",
    backgroundColor: "blue",
  },
};
