import { createContext } from "react";

export interface ModalProviderContext {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const modalContext = createContext<ModalProviderContext>({
  isOpen: false,
  setIsOpen(isOpen) {},
});

export default modalContext;
