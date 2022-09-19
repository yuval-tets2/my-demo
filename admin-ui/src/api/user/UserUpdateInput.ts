import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  phone?: string | null;
  roles?: InputJsonValue;
  username?: string;
};
