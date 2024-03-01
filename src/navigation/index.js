import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ContactsScreen from "../screens/ContactsScreen";
import ChatScreen from "../screens/ChatScreen";
import MainTabNavigator from "./MainTabNavigator";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="Main"
            component={MainTabNavigator}
            options={{ headerShown: false }}
        />
        <Stack.Screen name='Chat' component={ChatScreen} />
        <Stack.Screen name='Contacts' component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;