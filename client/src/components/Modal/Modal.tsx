import { Dialog, DialogPanel } from "@headlessui/react";
import React from "react";
import Button from "../Button/Button";

interface IModal extends React.ComponentProps<typeof Dialog> {}

const Modal: React.FC<IModal> = (p) => {
  return (
    <Dialog {...p} className="relative z-10 focus:outline-none">
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/60">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            {p.children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
