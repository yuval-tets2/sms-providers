import { Message } from "../message/Message";

export type Customer = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  messages?: Array<Message>;
  phone1: string | null;
  phone2: string | null;
  updatedAt: Date;
};
