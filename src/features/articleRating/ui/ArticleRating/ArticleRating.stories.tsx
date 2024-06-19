import type { Meta, StoryObj } from '@storybook/react';

import ArticleRating from './ArticleRating';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

const meta: Meta<typeof ArticleRating> = {
  title: 'widgets/ArticleRating',
  component: ArticleRating,
  decorators: [],
};

export default meta;
type Story = StoryObj<typeof ArticleRating>;
export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
