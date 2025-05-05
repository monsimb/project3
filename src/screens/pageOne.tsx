import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/UI'; // Ensure that the styles are correctly imported

const PageOne = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Welcome to Page One!</Text>

      {/* Button to navigate to other pages */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('PageTwo')}
      >
        <Text style={styles.buttonText}>Go to Page Two</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('PageThree')}
      >
        <Text style={styles.buttonText}>Go to Page Three</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PageOne;

