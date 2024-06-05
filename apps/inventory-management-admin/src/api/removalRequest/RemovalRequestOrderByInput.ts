import { SortOrder } from "../../util/SortOrder";

export type RemovalRequestOrderByInput = {
  createdAt?: SortOrder;
  deleteField?: SortOrder;
  id?: SortOrder;
  item?: SortOrder;
  requestedBy?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
