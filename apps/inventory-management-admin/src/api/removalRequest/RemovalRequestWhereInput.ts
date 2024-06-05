import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RemovalRequestWhereInput = {
  deleteField?: DateTimeNullableFilter;
  id?: StringFilter;
  item?: StringNullableFilter;
  requestedBy?: StringNullableFilter;
  status?: "Option1";
};
