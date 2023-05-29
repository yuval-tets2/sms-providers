import { Message as TMessage } from "../api/message/Message";

export const MESSAGE_TITLE_FIELD = "body";

export const MessageTitle = (record: TMessage): string => {
  return record.body || String(record.id);
};
