import { MessageCreateNestedManyWithoutCustomersInput } from "./MessageCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  messages?: MessageCreateNestedManyWithoutCustomersInput;
  phone1?: string | null;
  phone2?: string | null;
};
