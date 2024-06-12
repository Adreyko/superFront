import type { Meta, StoryObj } from '@storybook/react';

import ArticleSortSelector from './ArticleSortSelector';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';

const meta: Meta<typeof ArticleSortSelector> = {
  title: 'widgets/ArticleSortSelector',
  component: ArticleSortSelector,
  decorators: [],
};

export default meta;
type Story = StoryObj<typeof ArticleSortSelector>;
export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
