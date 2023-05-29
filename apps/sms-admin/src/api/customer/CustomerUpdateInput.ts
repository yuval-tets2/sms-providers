import { MessageUpdateManyWithoutCustomersInput } from "./MessageUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  messages?: MessageUpdateManyWithoutCustomersInput;
  phone1?: string | null;
  phone2?: string | null;
};
