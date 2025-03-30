import React from "react";
import {Text, View  } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import users from "../data/users";

type User = {
    id: number;
    name: string;
    email: string;
};

export default function UserList() {
    

    function getUserItem({item}: {item: User}) {
        return <Text>{item.name} - {item.email}</Text>;
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    );
}