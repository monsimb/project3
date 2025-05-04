import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/homeScreen.tsx';
import PageOne from './src/screens/pageOne.tsx'
import PageTwo from './src/screens/pageTwo.tsx'
import PageThree from './src/screens/pageThree.tsx'


import { Auth0Provider } from 'react-native-auth0';
import { View, StyleSheet, Settings } from "react-native";
import Ionicons from 'react-native-vector-icons/FontAwesome6';
import { ProfileProvider } from './src/context/ProfileContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//Bottom Tab Navigation
function MainTabs() {
  
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {backgroundColor: '#fff6db'},
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // change icons to make them grayed if clicked as well as set icons
          // if (route.name === 'Maps') {
          //   iconName = focused ? 'map' : 'map';  //should work to import from icons repo as map  for dbug: https://sapui5.hana.ondemand.com/sdk/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons/?tab=grid&search=map
          if (route.name === 'Setting') {
            iconName = focused ? 'gear' : 'gear';
          } else if (route.name === 'Friends') {
              iconName = focused ? 'users' : 'users';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
        }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#605795',
        tabBarInactiveTintColor: 'black',
        headerShown: false,
      })}
    >
      {/* <Tab.Screen name="Maps" component={Maps} /> */}
      <Tab.Screen name="Friends" component={Friends} />
      <Tab.Screen name="Profile" component={Profile} /> 
      <Tab.Screen name="Setting" component={Setting} /> 

    </Tab.Navigator>
  );
}


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PageOne" component={PageOne} />
        <Stack.Screen name="PageTwo" component={PageTwo} />
        <Stack.Screen name="PageThree" component={PageThree} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});