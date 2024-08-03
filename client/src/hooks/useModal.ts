import { useState } from "react";
import { FaBullseye } from "react-icons/fa6";

const useModal = (d?: boolean) => {
  const [isOpen, setIsOpen] = useState(d || false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const modal = {
    open,
    close,
    isOpen,
  };

  return modal;
};

export default useModal;
