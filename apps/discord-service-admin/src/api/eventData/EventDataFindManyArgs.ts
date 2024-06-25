import { EventDataWhereInput } from "./EventDataWhereInput";
import { EventDataOrderByInput } from "./EventDataOrderByInput";

export type EventDataFindManyArgs = {
  where?: EventDataWhereInput;
  orderBy?: Array<EventDataOrderByInput>;
  skip?: number;
  take?: number;
};
