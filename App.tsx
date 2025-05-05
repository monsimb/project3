import * as React from 'react';
import { View, StyleSheet, Settings } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/homeScreen.tsx';
import PageOne from './src/screens/pageOne.tsx'
import PageTwo from './src/screens/pageTwo.tsx'
import PageThree from './src/screens/pageThree.tsx'

import Ionicons from 'react-native-vector-icons/FontAwesome6';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//Bottom Tab Navigation
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: '#fff6db' }, // Tab bar background color
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Summoning') {
            iconName = focused ? 'magic' : 'magic';  // Icon for Summoning
          } else if (route.name === 'Guide') {
            iconName = focused ? 'book' : 'book'; // Icon for Guide
          } else if (route.name === 'Settings') {
            iconName = focused ? 'gear' : 'gear'; // Icon for Settings
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#605795', // Active tab color
        tabBarInactiveTintColor: 'black', // Inactive tab color
        headerShown: false,  // Hide header for bottom tabs
      })}
    >
      <Tab.Screen name="Summoning" component={PageOne} />
      <Tab.Screen name="Guide" component={PageTwo} />
      <Tab.Screen name="Settings" component={PageThree} />
    </Tab.Navigator>
  );
}


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ 
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
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