import type { Meta, StoryObj } from '@storybook/react';

import ArticleViewSelector  from './ArticleViewSelector';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';

const meta: Meta<typeof ArticleViewSelector > = {
  title: 'widgets/ArticleViewSelector',
  component: ArticleViewSelector ,
  decorators: []

};

export default meta;
type Story = StoryObj<typeof ArticleViewSelector >;
export const Light: Story = {
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],

};
