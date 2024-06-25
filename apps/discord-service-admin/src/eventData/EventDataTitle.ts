import { EventData as TEventData } from "../api/eventData/EventData";

export const EVENTDATA_TITLE_FIELD = "id";

export const EventDataTitle = (record: TEventData): string => {
  return record.id?.toString() || String(record.id);
};
