import type { Meta, StoryObj } from '@storybook/react';

import ArticleTextBlockComponent  from './ArticleTextBlockComponent';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

const meta: Meta<typeof ArticleTextBlockComponent > = {
  title: 'widgets/ArticleTextBlockComponent',
  component: ArticleTextBlockComponent ,
  decorators: []

};

export default meta;
type Story = StoryObj<typeof ArticleTextBlockComponent >;
export const Light: Story = {
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],

};
