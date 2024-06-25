import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EventDataList } from "./eventData/EventDataList";
import { EventDataCreate } from "./eventData/EventDataCreate";
import { EventDataEdit } from "./eventData/EventDataEdit";
import { EventDataShow } from "./eventData/EventDataShow";
import { GuildList } from "./guild/GuildList";
import { GuildCreate } from "./guild/GuildCreate";
import { GuildEdit } from "./guild/GuildEdit";
import { GuildShow } from "./guild/GuildShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

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
        title={"DiscordService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="EventData"
          list={EventDataList}
          edit={EventDataEdit}
          create={EventDataCreate}
          show={EventDataShow}
        />
        <Resource
          name="Guild"
          list={GuildList}
          edit={GuildEdit}
          create={GuildCreate}
          show={GuildShow}
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
