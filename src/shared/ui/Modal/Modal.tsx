import { classNames } from "shared/lib/helpers/className/className";
import cls from "./Modal.module.scss";
import React, { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import Portal from "../Portal/Portal";

interface ModalProps {
  className?: string
  children: ReactNode
  isOpen?: boolean
  onClose?: () => void
  isDissmisble?: boolean

}
const ANIMATION_DELAY = 100

export const Modal = ({ children, className, isOpen, onClose }: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false)
  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  }
  const timeRef = useRef<ReturnType<typeof setTimeout>>()

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const onCloseHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timeRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [onClose])

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onCloseHandler()
    }
  }, [onCloseHandler])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown)
    }

    return () => {
      clearTimeout(timeRef.current)
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [isOpen, onKeyDown])

  return (
    <Portal element={document.body}>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={onCloseHandler}>
          <div className={classNames(cls.content)} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}

export default Modal;
