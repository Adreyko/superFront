import type { Meta, StoryObj } from '@storybook/react';

import ArticleTabsTypes  from './ArticleTabsTypes';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

const meta: Meta<typeof ArticleTabsTypes > = {
  title: 'widgets/ArticleTabsTypes',
  component: ArticleTabsTypes ,
  decorators: []

};

export default meta;
type Story = StoryObj<typeof ArticleTabsTypes >;
export const Light: Story = {
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],

};
