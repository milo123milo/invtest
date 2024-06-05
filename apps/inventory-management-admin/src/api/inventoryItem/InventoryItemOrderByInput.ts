import { SortOrder } from "../../util/SortOrder";

export type InventoryItemOrderByInput = {
  create?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
