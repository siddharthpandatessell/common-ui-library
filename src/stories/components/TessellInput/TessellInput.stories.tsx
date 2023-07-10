import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { withActions } from '@storybook/addon-actions/decorator';
import {TessellInput} from "./TessellInput";


// Default metadata of the story https://storybook.js.org/docs/react/api/csf#default-export
const meta: Meta<typeof TessellInput> = {
  title: "Components/TessellInput",
  component: TessellInput,
  tags: ['autodocs'],
  argTypes: {
    // textColor: { control: "color" },
    // onClick: { action: "clicked" },
    variant: {
      control: {type: 'select'},
      options: ['standard', 'filled', 'outlined']
    },
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
type Story = StoryObj<typeof TessellInput>;

export const Default: Story = {
  args: {
    initialText: 'Primary'
  },
};



Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Xb2JIrQdlJ0lgWkugyItQo/Mongo-DB?type=design&node-id=1-355&mode=dev",
  },
};
