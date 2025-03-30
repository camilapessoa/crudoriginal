import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import UserList from "./views/UserList";
import UserForm from "./views/UserForm";

const Stack = createStackNavigator()

function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="UserList"
            component={UserList}
            options={{ title: "User List" }}
          />
          <Stack.Screen
            name="UserForm"
            component={UserForm}
            options={{ title: "User Form" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;