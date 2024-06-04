import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RemovalRequestWhereInput = {
  id?: StringFilter;
  item?: StringNullableFilter;
  requestedBy?: StringNullableFilter;
  status?: "Option1";
};
