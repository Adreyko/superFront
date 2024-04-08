import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  decorators: [],
  args: {
    isOpen: true,
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const ModalOpened: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iure consequatur in provident nostrum dolorem? Voluptas voluptatem, consequuntur voluptates quas, corporis at a aliquid dicta quo, perspiciatis esse vitae modi!',
  },
};
