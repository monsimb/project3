import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/homescreen.js'; // Ensure this path is correct

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Image 
          source={require('../assets/head-face.png')}
          resizeMode='contain'
        />
      </View>
      <View style={styles.buttonContainer}>
        {/* Button to navigate to the Bottom Tab Navigation */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('MainTabs')}
        >
          <Text style={styles.buttonText}>Start Summoning</Text>
        </TouchableOpacity>
      </View>


    </View>
  );
};

export default HomeScreen;