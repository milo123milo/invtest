import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type RoleWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  service?: DateTimeNullableFilter;
};
