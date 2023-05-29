import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  body?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
