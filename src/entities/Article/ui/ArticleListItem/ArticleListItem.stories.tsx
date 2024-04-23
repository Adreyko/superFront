import type { Meta, StoryObj } from '@storybook/react';

import ArticleListItem  from './ArticleListItem';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

const meta: Meta<typeof ArticleListItem > = {
  title: 'widgets/ArticleListItem',
  component: ArticleListItem ,
  decorators: []

};

export default meta;
type Story = StoryObj<typeof ArticleListItem >;
export const Light: Story = {
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],

};
