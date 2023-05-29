import { MessageCreateNestedManyWithoutCustomersInput } from "./MessageCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  messages?: MessageCreateNestedManyWithoutCustomersInput;
  phone1?: string | null;
  phone2?: string | null;
};
