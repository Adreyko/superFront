import type { Meta, StoryObj } from '@storybook/react';

import ArticleCodeComponent from './ArticleCodeComponent';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';

const meta: Meta<typeof ArticleCodeComponent> = {
  title: 'widgets/ArticleCodeComponent',
  component: ArticleCodeComponent,
  decorators: [],
};

export default meta;
type Story = StoryObj<typeof ArticleCodeComponent>;
export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
