import type { Meta, StoryObj } from '@storybook/react';

import ArticleBlockComponent from './ArticleBlockComponent';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof ArticleBlockComponent> = {
  title: 'widgets/ArticleBlockComponent',
  component: ArticleBlockComponent,
  decorators: [],
};

export default meta;
type Story = StoryObj<typeof ArticleBlockComponent>;
export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
