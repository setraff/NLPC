import { Radio, RadioGroup } from "@headlessui/react";
import { TextField } from "@mui/material";
import {
  DateTimeField,
  DateTimePicker,
  MobileDateTimePicker,
  renderTimeViewClock,
} from "@mui/x-date-pickers";
import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import FormikTextField from "../FormikTextField/FormikTextField";
import FormikDateTimeField from "../FormikDateTimeField/FormikDateTimeField";
import colorToRgba from "../../utils/colorToRgba";
import { FaCheck } from "react-icons/fa";
import ColorSelect from "../ColorSelect/ColorSelect";
import eventSchema from "../../../../server/src/utils/eventSchema";
import { trpc } from "../../utils/trpc";
import Prompt from "../Prompt/Prompt";
import { useQueryClient } from "@tanstack/react-query";

interface INewEventForm {
  children: React.ReactNode;
}

const NewEventForm: React.FC<INewEventForm> = (p) => {
  const qc = useQueryClient();
  const newEventMutation = trpc.events.createEvent.useMutation({
    onSuccess: () => {
      qc.invalidateQueries(["events.getEventsForDay"]);
    },
  });

  const initialValues = {
    name: "",
    startDateTime: null,
    endDateTime: null,
    color: "",
  };

  const schema = eventSchema;

  const handleSubmit = (v: yup.InferType<typeof schema>) => {
    newEventMutation.mutate(v);
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      validationSchema={schema}
      //@ts-ignore
      initialValues={initialValues}
    >
      <Form className="flex flex-col space-y-5">
        <Prompt />
        <FormikTextField name="name" label="Event name" />
        <div className="w-full grid grid-cols-2 gap-5">
          <FormikDateTimeField name="startDateTime" label="Start Date & Time" />
          <FormikDateTimeField name="endDateTime" label="End Date & Time" />
        </div>
        <ColorSelect />
        {p.children}
        {newEventMutation.isLoading && <div>Creating event...</div>}
        {newEventMutation.error && <div>{newEventMutation.error.message}</div>}
      </Form>
    </Formik>
  );
};

export default NewEventForm;
