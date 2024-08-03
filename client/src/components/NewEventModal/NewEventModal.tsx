import React from "react";
import Modal from "../Modal/Modal";
import NewEventForm from "../NewEventForm/NewEventForm";
import Button from "../Button/Button";
import useModal from "../../hooks/useModal";

interface INewEventModal extends React.ComponentProps<typeof Modal> {}

const NewEventModal: React.FC<INewEventModal> = (p) => {
  return (
    <Modal {...p}>
      <NewEventForm>
        <div className="w-full flex items-center justify-end space-x-2 mt-5">
          <Button
            type="button"
            onClick={() => p.onClose(true)}
            variant="secondary"
          >
            Cancel
          </Button>
          <Button>Create</Button>
        </div>
      </NewEventForm>
    </Modal>
  );
};

export default NewEventModal;
