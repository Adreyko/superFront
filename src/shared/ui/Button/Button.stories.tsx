import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

const meta: Meta<typeof Button> = {
  title:'shared/Button',
  component: Button,
  decorators :[]

};

export default meta;
type Story = StoryObj<typeof Button>;

export const Clear: Story = {
  args: {
    theme: 'clear',
    children: 'Clear button'
  },

};

export const ClearDark: Story = {
  args: {
    theme: 'clear',
    children: 'Clear button'
  },
  decorators: [ThemeDecorator(Theme.DARK)],

};
