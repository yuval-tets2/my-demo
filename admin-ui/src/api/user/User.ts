import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phone: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
