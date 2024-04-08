import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  placement?: Element | DocumentFragment;
}

const Portal = ({ children, placement = document.body }: PortalProps) => {
  return createPortal(children, placement);
};

export default Portal;
