import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { playBackgroundMusic, pauseBackgroundMusic } from '../context/MusicContext';
import { styles } from '../styles/settings.js'; // Ensure this path is correct

const PageThree = () => {
  const [isMusicOn, setIsMusicOn] = useState(true);  // Tracks whether the music is on or off

  // Use useEffect to start the music when the page is first loaded
  useEffect(() => {
    if (isMusicOn) {
      playBackgroundMusic(); // Play music when the component is mounted and music is ON
    } else {
      pauseBackgroundMusic(); // Pause music when the component is mounted and music is OFF
    }
    
    // Cleanup function to pause music when the component unmounts
    return () => {
      if (isMusicOn) {
        pauseBackgroundMusic();
      }
    };
  }, [isMusicOn]);  // This will run whenever `isMusicOn` changes

  // Toggle music on/off when the button is pressed
  const toggleMusic = () => {
    setIsMusicOn((prev) => !prev);  // Toggle the music state
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is Page Three</Text>
      
      {/* Button to toggle music */}
      <TouchableOpacity 
        style={styles.button}  // Apply custom style here
        onPress={toggleMusic}  // Toggle music on and off
      >
        <Text style={styles.buttonText}>
          {isMusicOn ? "Turn Music Off" : "Turn Music On"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};


export default PageThree;
