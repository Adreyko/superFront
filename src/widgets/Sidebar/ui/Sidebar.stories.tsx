import type { Meta, StoryObj } from '@storybook/react';

import Sidebar from './Sidebar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

const meta: Meta<typeof Sidebar> = {
  title:'widgets/Sidebar',
  component: Sidebar,
  decorators :[]

};

export default meta;
type Story = StoryObj<typeof Sidebar>;
export const Light: Story = {
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],

};
