import type { Meta, StoryObj } from '@storybook/react';
import LangSwitcher from './LangSwitcher';

const meta: Meta<typeof LangSwitcher> = {
  title: 'widgets/LangSwitcher',
  component: LangSwitcher,
  decorators: []

};

export default meta;
type Story = StoryObj<typeof LangSwitcher>;

export const ShortLanguage: Story = {
args: {
    variant: 'short'
}
};

export const FullLanguage: Story = {
    args: {
        variant: 'full'
    },

};
