import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Button",
    onClick: () => {
      window.console.log("Button clicked!");
    },
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
    buttonType: "secondary",
    onClick: () => {
      window.console.log("Button clicked!");
    },
  },
};

export const Large: Story = {
  args: {
    label: "Button",
    size: "large",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
    onClick: () => {
      window.console.log("Button clicked!");
    },
  },
};

export const Disabled: Story = {
  args: {
    label: "Button",
    buttonType: "disabled",
  },
};

export const Warning: Story = {
  args: {
    label: "Button",
    buttonType: "warning",
  },
};

export const Error: Story = {
  args: {
    label: "Button",
    buttonType: "error",
  },
};

export const Shadow: Story = {
  args: {
    label: "Button",
    buttonType: "shadow",
  },
};
