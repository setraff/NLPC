import React, { useState } from "react";
import modalContext from "./modalContext";

interface IModalProvider {
  children: React.ReactNode;
}

const ModalProvider: React.FC<IModalProvider> = (p) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <modalContext.Provider value={{ isOpen, setIsOpen }}>
      {p.children}
    </modalContext.Provider>
  );
};

export default ModalProvider;
