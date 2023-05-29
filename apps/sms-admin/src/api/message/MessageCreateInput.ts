import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type MessageCreateInput = {
  body?: string | null;
  customer?: CustomerWhereUniqueInput | null;
};
