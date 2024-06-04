import { SortOrder } from "../../util/SortOrder";

export type InventoryItemOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
