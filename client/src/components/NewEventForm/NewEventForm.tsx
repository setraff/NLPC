import { Radio, RadioGroup } from "@headlessui/react";
import { Alert, TextField } from "@mui/material";
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
import { getQueryKey } from "@trpc/react-query";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../Tooltip/Tooltip";
import { FaQuestion } from "react-icons/fa6";
import classNames from "classnames";
import { HiMiniSparkles } from "react-icons/hi2";

interface INewEventForm {
  children: React.ReactNode;
}

const NewEventForm: React.FC<INewEventForm> = (p) => {
  const qc = useQueryClient();
  const newEventMutation = trpc.events.createEvent.useMutation({
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: getQueryKey(trpc.events.getEventsForWeek),
      });
      qc.invalidateQueries({
        queryKey: getQueryKey(trpc.events.getEventsForDay),
      });
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
      <Form
        className={classNames(
          "flex flex-col space-y-5",
          newEventMutation.isLoading && "opacity-50 pointer-events-none"
        )}
      >
        <div className="flex items-center space-x-5">
          <Prompt />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <FaQuestion className="text-blue-500" />
              </TooltipTrigger>
              <TooltipContent className="flex flex-col space-y-2 h-28 w-96 justify-center items-center">
                <p>
                  {`{{Title of event}}`}
                  <span className=" text-red-500 font-semibold">,</span>{" "}
                  {`{{Start date/time}}`}{" "}
                  <span className=" text-red-500 font-semibold">to</span>{" "}
                  {`{{End date/time}}`}
                </p>
                <div className="w-full flex items-center justify-center font-bold text-gray-600">
                  <span className="px-3 py-1 bg-gray-200 rounded-md">OR</span>
                </div>
                <p className="text-center">
                  {`{{Title of event}}`}
                  <span className=" text-red-500 font-semibold">,</span>{" "}
                  {`{{Event date/time}}`}{" "}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <FormikTextField name="name" label="Event name" />
        <div className="w-full grid grid-cols-2 gap-5">
          <FormikDateTimeField name="startDateTime" label="Start Date & Time" />
          <FormikDateTimeField name="endDateTime" label="End Date & Time" />
        </div>
        <ColorSelect />
        {newEventMutation.isSuccess && (
          <Alert severity="success">
            Created event: {newEventMutation.data.title}
          </Alert>
        )}
        {newEventMutation.error && (
          <Alert severity="error">
            Created event: {newEventMutation.error.message}
          </Alert>
        )}
        {p.children}
      </Form>
    </Formik>
  );
};

export default NewEventForm;
