import { React, useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import {
  NavigationContainer,
  DrawerActions,
  getFocusedRouteNameFromRoute
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LandingScreen from "./src/Landing/LandingScreen";
import HomeScreen from "./src/Home/HomeScreen";
import SignInScreen from "./src/SignIn/SignInScreen";
import SignUpScreen from "./src/SignUp/SignUpScreen";
import PasswordForgotScreen from "./src/ForgotPassword/PasswordForgotScreen";
import Account from "./src/Account/AccountScreen";
import PasswordChangeScreen from "./src/PasswordChange/PasswordChangeScreen";
import AdminScreen from "./src/Admin/AdminScreen";
import ProfileScreen from "./src/Profile/ProfileScreen";

const RootStack = createStackNavigator();

function App() {
  let [text, setText] = useState("");
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="contacts"
          component={(props) => (
            <View style={styles.container}>
              <FlatList
                data={[
                  {
                    name: "Хаккназар",
                    phone: "+77057657224"
                  },
                  {
                    name: "Leon",
                    phone: "+77075050522"
                  },
                  {
                    name: "Fast money",
                    phone: "+78005553535"
                  }
                ]}
                renderItem={({ item }) => <Item {...props} item={item} />}
                keyExtractor={(item, index) => index}
              />
            </View>
          )}
        />

        <RootStack.Screen
          name="information"
          component={({ route, navigation }) => (
            <View style={styles.container}>
              <Text>
                <b>Имя:</b> {route.params.item.name}
              </Text>
              <Text>
                <b>Telephone number: </b>
                {route.params.item.phone}
              </Text>
              <Button title="home" onPress={() => navigation.goBack()} />
            </View>
          )}
        />

        <RootStack.Screen
          name="home"
          component={() => <View>и где мой хоум</View>}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

function Item(props) {
  return (
    <View>
      <Button
        onPress={() =>
          props.navigation.push("information", {
            item: props.item
          })
        }
        title={props.item.name}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  }
});

export default App;
