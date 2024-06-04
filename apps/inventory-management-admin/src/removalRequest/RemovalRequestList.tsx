import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const RemovalRequestList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RemovalRequests"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="item" source="item" />
        <TextField label="requestedBy" source="requestedBy" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
