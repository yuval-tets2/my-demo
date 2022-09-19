import { Fer as TFer } from "../api/fer/Fer";

export const FER_TITLE_FIELD = "id";

export const FerTitle = (record: TFer): string => {
  return record.id || record.id;
};
