import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/FontAwesome6';

import HomeScreen from './src/screens/homeScreen';
import PageOne from './src/screens/pageOne';
import PageTwo from './src/screens/pageTwo';
import PageThree from './src/screens/pageThree';

import { setupPlayer, addTracks, playBackgroundMusic } from './src/context/MusicContext'; // Added playBackgroundMusic

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

let playerInitialized = false;  // Flag to track player initialization

// Bottom Tab Navigation Component
function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Summoning" // Make Summoning the default tab when navigating to MainTabs
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: '#EBF9FE' }, // Tab bar background color
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Summoning') {
            iconName = focused ? 'spaghetti-monster-flying' : 'spaghetti-monster-flying';  // Icon for Summoning
          } else if (route.name === 'Guide') {
            iconName = focused ? 'book' : 'book'; // Icon for Guide
          } else if (route.name === 'Settings') {
            iconName = focused ? 'gear' : 'gear'; // Icon for Settings
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#065C7D', // Active tab color
        tabBarInactiveTintColor: 'black', // Inactive tab color
        headerShown: false,  // Hide header for bottom tabs
      })}
    >
      {/* Reordered tabs with "Summoning" in the center */}
      <Tab.Screen name="Guide" component={PageTwo} />
      <Tab.Screen name="Summoning" component={PageOne} />
      <Tab.Screen name="Settings" component={PageThree} />
    </Tab.Navigator>
  );
}

const App = () => {
  useEffect(() => {
    // Initialize audio player and tracks, but only if it's not already initialized
    const initializePlayer = async () => {
      if (!playerInitialized) {
        try {
          await setupPlayer();  // Initialize player
          await addTracks();    // Add tracks to player
          await playBackgroundMusic();  // Try playing the background music
          playerInitialized = true;  // Mark player as initialized
        } catch (error) {
          console.error('Error during player initialization:', error);
        }
      }
    };
    initializePlayer();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* HomeScreen is the first screen */}
        <Stack.Screen name="Home" component={HomeScreen} />
        
        {/* After HomeScreen, navigate to the MainTabs (which has Bottom Tab Navigation) */}
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
