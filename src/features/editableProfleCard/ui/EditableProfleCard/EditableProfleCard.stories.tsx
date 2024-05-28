import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import EditableProfleCard from './EditableProfleCard';

export default {
  title: 'features/EditableProfleCard',
  component: EditableProfleCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof EditableProfleCard>;

const Template: ComponentStory<typeof EditableProfleCard> = (args) => (
  <EditableProfleCard {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
