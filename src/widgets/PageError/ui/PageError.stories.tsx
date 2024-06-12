import type { Meta, StoryObj } from '@storybook/react';

import PageError from './PageError';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';

const meta: Meta<typeof PageError> = {
  title: 'widgets/PageError',
  component: PageError,
  decorators: []

};

export default meta;
type Story = StoryObj<typeof PageError>;
export const Light: Story = {
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],

};
