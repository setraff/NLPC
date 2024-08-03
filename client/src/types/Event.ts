import * as yup from "yup";
import eventSchema from "../../../server/src/utils/eventSchema";

type Event = yup.InferType<typeof eventSchema>;

export default Event;
