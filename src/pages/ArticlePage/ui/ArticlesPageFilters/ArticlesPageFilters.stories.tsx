import type { Meta, StoryObj } from '@storybook/react';

import ArticlesPageFilters from './ArticlesPageFilters';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof ArticlesPageFilters> = {
  title: 'widgets/ArticlesPageFilters',
  component: ArticlesPageFilters,
  decorators: [],
};

export default meta;
type Story = StoryObj<typeof ArticlesPageFilters>;
export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
