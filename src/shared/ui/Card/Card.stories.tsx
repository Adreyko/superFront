import type { Meta, StoryObj } from '@storybook/react';

import Card from './Card';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

const meta: Meta<typeof Card> = {
  title: 'widgets/Card',
  component: Card,
  decorators: [],
};

export default meta;
type Story = StoryObj<typeof Card>;
export const Light: Story = {
  args: {
    children: <div>sdasdsdsa</div>,
  },
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
