import type { Meta, StoryObj } from '@storybook/react';

import ArticleDetailsComments from './ArticleDetailsComments';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof ArticleDetailsComments> = {
  title: 'widgets/ArticleDetailsComments',
  component: ArticleDetailsComments,
  decorators: [],
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsComments>;
export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
