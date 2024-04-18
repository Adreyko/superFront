import type { Meta, StoryObj } from '@storybook/react';

import Code from './Code';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

const meta: Meta<typeof Code> = {
  title: 'widgets/Code',
  component: Code,
  decorators: [],
};

export default meta;
type Story = StoryObj<typeof Code>;
export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
