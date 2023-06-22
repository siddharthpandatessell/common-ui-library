import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import TessellButton from './TessellButton';
import { withActions } from '@storybook/addon-actions/decorator';


// Default metadata of the story https://storybook.js.org/docs/react/api/csf#default-export
const meta: Meta<typeof TessellButton> = {
  title: "Components/TessellButton",
  component: TessellButton,
  tags: ['autodocs'],
  argTypes: {
    // textColor: { control: "color" },
    // onClick: { action: "clicked" },
    size: {
      control: {type: 'select'},
      options: ['large', 'medium', 'small']
    },
    variant: {
      control: {type: 'radio'},
      options: ['outlined', 'text', 'contained']
    }
  },
  parameters: {
    actions: {
      handles: ['mouseover', 'click .btn'],
    },
  },
  decorators: [withActions],
};

export default meta;

// The story type for the component https://storybook.js.org/docs/react/api/csf#named-story-exports
type Story = StoryObj<typeof TessellButton>;

export const Primary: Story = {
  args: {
    label: 'Primary',
    variant: "contained",
    size: "large",
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    label: 'Secondary',
    variant: "contained",
    size: "medium",
    color: "error",
  },
};

export const ButtonGroup: Story = {
  args: {
    ...Primary.args,
    label: 'Modal',
    variant: "outlined",
    size: "medium",
    color: "success",
  },
  render: (args) => <div>
    <TessellButton label="Test 1"  variant="outlined" />
    <TessellButton label="Test 2"  variant="contained" />
    <TessellButton label="Test 3"  variant="text" />
  </div>
};

Secondary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Xb2JIrQdlJ0lgWkugyItQo/Mongo-DB?type=design&node-id=1-355&mode=dev",
  },
};
