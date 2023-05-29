import { Customer } from "../customer/Customer";

export type Message = {
  body: string | null;
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  updatedAt: Date;
};
