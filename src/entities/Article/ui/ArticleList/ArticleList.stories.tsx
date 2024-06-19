import type { Meta, StoryObj } from '@storybook/react';

import ArticleList from './ArticleList';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof ArticleList> = {
  title: 'widgets/ArticleList',
  component: ArticleList,
  decorators: [],
};

export default meta;
type Story = StoryObj<typeof ArticleList>;
export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
