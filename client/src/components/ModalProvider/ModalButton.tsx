import React, { useContext } from "react";
import modalContext from "./modalContext";

interface IModalButton
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
}

const ModalButton: React.FC<IModalButton> = (p) => {
  const modal = useContext(modalContext);
  return (
    <div
      {...p}
      onClick={(e) => {
        if (p.onClick) {
          p.onClick(e);
        }
        modal.setIsOpen(!modal.isOpen);
      }}
    >
      {p.children}
    </div>
  );
};

export default ModalButton;
