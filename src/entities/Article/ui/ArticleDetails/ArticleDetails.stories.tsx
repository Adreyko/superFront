import type { Meta, StoryObj } from '@storybook/react';

import ArticleDetails from './ArticleDetails';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';

const meta: Meta<typeof ArticleDetails> = {
  title: 'widgets/ArticleDetails',
  component: ArticleDetails,
  decorators: [],
};

export default meta;
type Story = StoryObj<typeof ArticleDetails>;
export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
