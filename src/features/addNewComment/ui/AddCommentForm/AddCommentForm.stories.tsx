import type { Meta, StoryObj } from '@storybook/react';

import AddCommentForm from './AddCommentForm';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';

const meta: Meta<typeof AddCommentForm> = {
  title: 'entities/AddCommentForm',
  component: AddCommentForm,
  decorators: [],
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;
export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
