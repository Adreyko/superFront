import { Meta, StoryFn, type StoryObj } from "@storybook/react"
import { useState } from "react"
import Modal from "./Modal"
import Button from "../Button/Button"

const Template: StoryFn = args => {
  const { children, ...rest } = args
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button onClick={() => { setIsOpen(true); }}>open modal</Button>
      <Modal {...rest} isOpen={isOpen} onClose={() => { setIsOpen(false); }} aria-label="test">
        {children}
      </Modal>
    </>
  )
}
export default {
  title: "@hotel/Modal",
  render: Template,
} as Meta<typeof Modal>

type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {
    children:
          "super long body. This is a normal modal that would have a lot of text and we have to test the padding works correctly.",
  },
}
