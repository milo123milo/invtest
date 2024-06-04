import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RoleList } from "./role/RoleList";
import { RoleCreate } from "./role/RoleCreate";
import { RoleEdit } from "./role/RoleEdit";
import { RoleShow } from "./role/RoleShow";
import { InventoryItemList } from "./inventoryItem/InventoryItemList";
import { InventoryItemCreate } from "./inventoryItem/InventoryItemCreate";
import { InventoryItemEdit } from "./inventoryItem/InventoryItemEdit";
import { InventoryItemShow } from "./inventoryItem/InventoryItemShow";
import { RemovalRequestList } from "./removalRequest/RemovalRequestList";
import { RemovalRequestCreate } from "./removalRequest/RemovalRequestCreate";
import { RemovalRequestEdit } from "./removalRequest/RemovalRequestEdit";
import { RemovalRequestShow } from "./removalRequest/RemovalRequestShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"InventoryManagement"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Role"
          list={RoleList}
          edit={RoleEdit}
          create={RoleCreate}
          show={RoleShow}
        />
        <Resource
          name="InventoryItem"
          list={InventoryItemList}
          edit={InventoryItemEdit}
          create={InventoryItemCreate}
          show={InventoryItemShow}
        />
        <Resource
          name="RemovalRequest"
          list={RemovalRequestList}
          edit={RemovalRequestEdit}
          create={RemovalRequestCreate}
          show={RemovalRequestShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
