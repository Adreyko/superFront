import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './Navbar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
  decorators: []

};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const NavbarLight: Story = {

};

export const NavbarDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
