import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  phone?: string | null;
  roles: InputJsonValue;
  username: string;
};
