import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { playBackgroundMusic, pauseBackgroundMusic } from '../context/MusicContext';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1e1e1f',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d8cdb5',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#d8cdb5',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,  // Adjust the button width
    height: 50,  // Adjust the button height
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '700'
  },
  combinationContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  combinationText: {
    fontSize: 18,
    color: '#d8cdb5',
    marginBottom: 10,
  },
  combinationImage: {
    width: 200,
    height: 200,
  },

});

export default PageThree;
