import type { Meta, StoryObj } from '@storybook/react';

import ArticleDetailsPage from './ArticleDetailsPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

const meta: Meta<typeof ArticleDetailsPage> = {
  title: 'widgets/ArticleDetailsPage',
  component: ArticleDetailsPage,
  decorators: [],
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPage>;
export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
