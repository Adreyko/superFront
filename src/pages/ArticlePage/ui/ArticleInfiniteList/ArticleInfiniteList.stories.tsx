import type { Meta, StoryObj } from '@storybook/react';

import ArticleInfiniteList from './ArticleInfiniteList';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof ArticleInfiniteList> = {
  title: 'widgets/ArticleInfiniteList',
  component: ArticleInfiniteList,
  decorators: [],
};

export default meta;
type Story = StoryObj<typeof ArticleInfiniteList>;
export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
