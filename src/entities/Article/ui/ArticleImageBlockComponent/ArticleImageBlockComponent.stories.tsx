import type { Meta, StoryObj } from '@storybook/react';

import ArticleImageBlockComponent from './ArticleImageBlockComponent';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';

const meta: Meta<typeof ArticleImageBlockComponent> = {
  title: 'widgets/ArticleImageBlockComponent',
  component: ArticleImageBlockComponent,
  decorators: [],
};

export default meta;
type Story = StoryObj<typeof ArticleImageBlockComponent>;
export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
