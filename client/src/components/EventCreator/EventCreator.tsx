import { Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import { LuCalendarPlus } from "react-icons/lu";
import Button from "../Button/Button";
import TextField from "@mui/material/TextField";
import { HexColorPicker } from "react-colorful";
import ColorPicker from "../ColorPicker/ColorPicker";

const EventCreator = () => {
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  return (
    <>
      <div
        onClick={open}
        className="fixed border-2 hover:border-@SkyBlue cursor-pointer bg-@Crayola desktop:bottom-16 desktop:right-12 bottom-48 right-7 p-5 text-white drop-shadow-xl rounded-full"
      >
        <LuCalendarPlus size={35} />
      </div>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 overflow-y-auto bg-black/70">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md flex flex-col items-center space-y-5 rounded-xl bg-white z-20 p-6 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <TextField label="Title" className="w-full" />
              <div className="w-full grid grid-cols-2 gap-2">
                <TextField
                  onChange={(v) => console.log(v.target.value)}
                  type="datetime-local"
                  helperText="From"
                  className="w-full"
                />
                <TextField
                  type="datetime-local"
                  helperText="To"
                  className="w-full"
                />
              </div>
              <ColorPicker value={"#FF0000"} />
              <Button className="w-full">Create</Button>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default EventCreator;
