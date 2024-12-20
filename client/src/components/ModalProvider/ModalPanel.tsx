import React, {
  ReactElement,
  useContext,
  JSXElementConstructor,
  isValidElement,
} from "react";
import modalContext, { ModalProviderContext } from "./modalContext";
import { Modal } from "@mui/material";
import Button from "../Button/Button";

interface IModalPanel {
  children:
    | React.ReactNode
    | ((renderProps: ModalProviderContext) => React.ReactElement);
  confirmText?: string;
  cancelText?: string;
  showFooter?: boolean;
  isLoading?: boolean;
  onConfirm?: () => void;
}

const ModalPanel: React.FC<IModalPanel> = (p) => {
  const modal = useContext(modalContext);

  const renderChildren = () => {
    if (typeof p.children === "function") {
      return p.children(modal); // If children is a function, invoke it
    }
    return p.children; // Otherwise, render it directly
  };

  return (
    <Modal
      className="flex justify-center items-center"
      onClose={() => modal.setIsOpen(false)}
      open={modal.isOpen}
    >
      <div className="bg-white p-5 w-96 rounded-md">
        {renderChildren()}
        {p.showFooter && (
          <div className="w-full flex items-center justify-end space-x-2 mt-5">
            <Button
              onClick={() => {
                modal.setIsOpen(false);
              }}
              type="button"
              variant="secondary"
            >
              {p.cancelText || "Cancel"}
            </Button>
            <Button
              disabled={p.isLoading}
              onClick={() => {
                if (p.onConfirm) {
                  p.onConfirm();
                }
              }}
            >
              {p.confirmText || "Okay"}
            </Button>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ModalPanel;
