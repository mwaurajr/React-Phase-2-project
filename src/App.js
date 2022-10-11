import React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import PostList from "./Components/PostList";
import PostCreate from "./Components/PostCreate";
import PostEdit from "./Components/PostEdit";
import UserList from "./Components/UserList";
import UserCreate from "./Components/UserCreate";
import UserEdit from "./Components/UserEdit";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <Admin dashboard={Dashboard} dataProvider={restProvider("http://localhost:3000")} >
      <Resource
        name="posts"
        list={PostList}
        create={PostCreate}
        edit={PostEdit}
      />
      <Resource
        name="users"
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
      
    </Admin>
    
  );
}

export default App;
