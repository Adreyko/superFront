import type { Meta, StoryObj } from "@storybook/react";
import { Button, ThemeButton } from "./Button";
import { ThemeDecorator } from "shared/story/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider/lib/ContextTheme";

const meta = {
  title: "shared/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Test",
  },
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Clear: Story = {
  args: {
    children: "Clear",
    theme: ThemeButton.CLEAR
  },
};

export const Outlined: Story = {
  args: {
    children: "Outlined",
    theme: ThemeButton.OUTLINED,
  },
};
Outlined.decorators = [ThemeDecorator(Theme.DARK)]

export const Filled: Story = {
  args: {
    children: "Filled",
    theme: ThemeButton.FILLED,
  },
};
Outlined.decorators = [ThemeDecorator(Theme.DARK)]
