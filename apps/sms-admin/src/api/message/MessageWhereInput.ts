import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type MessageWhereInput = {
  body?: StringNullableFilter;
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
};
