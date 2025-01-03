import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { trpc } from "../../utils/trpc";
import { useFormikContext } from "formik";
import { FaQuestion } from "react-icons/fa";
import { HiMiniSparkles } from "react-icons/hi2";

const Prompt = () => {
  const [prompt, setPrompt] = useState("");
  const [dPrompt] = useDebounce(prompt, 2000);
  const mutation = trpc.nlp.processPrompt.useMutation();
  const formik = useFormikContext();

  useEffect(() => {
    if (dPrompt) {
      mutation.mutate(
        { text: dPrompt },
        {
          onSuccess: (data) => {
            formik.setFieldValue("name", data.Title);
            if (data.From) {
              formik.setFieldValue(
                "startDateTime",
                new Date(data.From).toISOString()
              );
            }
            if (data.To) {
              formik.setFieldValue(
                "endDateTime",
                new Date(data.To).toISOString()
              );
            }
          },
        }
      );
    }
  }, [dPrompt]);

  return (
    <TextField
      value={prompt}
      className="w-full"
      onChange={(e) => setPrompt(e.target.value)}
      label={
        <span className="flex items-center space-x-2">
          <div>Prompt</div>
          <HiMiniSparkles className="text-gray-400" />
        </span>
      }
      disabled={mutation.isLoading}
    />
  );
};

export default Prompt;
