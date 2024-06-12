import type { Meta, StoryObj } from '@storybook/react';

import ArticleDetailsPageHeader  from './ArticleDetailsPageHeader';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';

const meta: Meta<typeof ArticleDetailsPageHeader > = {
  title: 'widgets/ArticleDetailsPageHeader',
  component: ArticleDetailsPageHeader ,
  decorators: []

};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPageHeader >;
export const Light: Story = {
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],

};
