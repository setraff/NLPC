import { useAtom } from "jotai";
import React from "react";
import { selectedDayAtom } from "../store/atoms";

const useSelectedDay = () => {
  return useAtom(selectedDayAtom);
};

export default useSelectedDay;
