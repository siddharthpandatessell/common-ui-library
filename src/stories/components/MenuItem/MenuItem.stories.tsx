import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import MenuItem from "./MenuItemComponent";
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';

// Default metadata of the story https://storybook.js.org/docs/react/api/csf#default-export
const meta: Meta = {
  title: "Components/MenuItem",
  component: MenuItem,
  argTypes: {
    textColor: { control: "color" },
    onClick: { action: "clicked" },
  },
};

export default meta;

// The story type for the component https://storybook.js.org/docs/react/api/csf#named-story-exports
type Story = StoryObj<typeof MenuItem>;

export const SideMenu: Story = {
  args: {
    icon: <ContentCut />,
    text: "Cut",
    secondaryText: "⌘X",
    border: '1px solid black'
  },
};

export const Dropdown: Story = {
  args: {
    icon: <ContentCopy />,
    text: "Paste",
    border: '1px solid black'
    // secondaryText: "⌘X",
  },
};
