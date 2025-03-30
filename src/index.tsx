import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import UserList from "./views/UserList";
import UserForm from "./views/UserForm";
import {TouchableOpacity } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from '@expo/vector-icons/AntDesign';

const Stack = createStackNavigator()

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="UserList"
          screenOptions={screenOptions}
        >
          <Stack.Screen
            name="UserList"
            component={UserList}
            options={({navigation}) => ({
              title: "Lista de Usuários",
            headerRight: () =>(
                <TouchableOpacity
                onPress={() => navigation.navigate("UserForm")}
                style={{ marginRight: 15 }}>
                {/* <AntDesign name="plus" size={30} color="white"  /> */}
                <FontAwesome6 name="add" size={30} color="white" />

                </TouchableOpacity>

            )
            
            })}
        
          />
          <Stack.Screen
            name="UserForm"
            component={UserForm}
            options={{ title: "Formulário de Usuários" }}
            
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  const screenOptions = {
    headerStyle: { backgroundColor: "#f4511e" },
    headerTintColor: "#fff",
    headerTitleStyle: { fontWeight: "bold" as "bold" },
  }

  
