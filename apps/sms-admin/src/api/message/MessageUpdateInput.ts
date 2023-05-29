import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type MessageUpdateInput = {
  body?: string | null;
  customer?: CustomerWhereUniqueInput | null;
};
