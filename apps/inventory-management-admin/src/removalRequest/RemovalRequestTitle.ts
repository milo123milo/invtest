import { RemovalRequest as TRemovalRequest } from "../api/removalRequest/RemovalRequest";

export const REMOVALREQUEST_TITLE_FIELD = "item";

export const RemovalRequestTitle = (record: TRemovalRequest): string => {
  return record.item?.toString() || String(record.id);
};
