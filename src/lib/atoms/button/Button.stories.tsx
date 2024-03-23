import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    buttonType: {
      options: [
        "primary",
        "secondary",
        "warning",
        "outlined",
        "disabled",
        "error",
      ],
      control: { type: "radio" },
    },
    size: {
      options: ["default", "small", "large", "xxl"],
      control: { type: "radio" },
    },
    rounded: {
      options: ["default", "sm", "lg", "xl", "xxl", "none", "full"],
      control: { type: "radio" },
    },
    spacing: {
      options: ["default", "small", "large", "xxl"],
      control: { type: "radio" },
    },
    label: {
      control: { type: "text" },
    },
    leftIcon: {
      control: { type: "disabled" },
    },
    rightIcon: {
      control: { type: "disabled" },
    },
    onClick: { action: "clicked" },
  },
  args: {
    buttonType: "primary",
    size: "default",
    rounded: "default",
    spacing: "default",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Button",
  },
};

export const PrimaryWithLeftIcon: Story = {
  args: {
    label: "Button",
    leftIcon: <span>🚀</span>,
  },
};

export const PrimaryWithRightIcon: Story = {
  args: {
    label: "Button",
    rightIcon: <span>🚀</span>,
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
    buttonType: "secondary",
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

export const Outlined: Story = {
  args: {
    label: "Button",
    buttonType: "outlined",
  },
};
