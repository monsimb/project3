import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome6';

const PageOne = ({ navigation }: any) => {
  // States to track selections
  const [selectedPotion, setSelectedPotion] = useState(false);
  const [selectedStone, setSelectedStone] = useState(false);
  const [selectedWord, setSelectedWord] = useState(false);

  // Check if all three items are selected
  const allSelected = selectedPotion && selectedStone && selectedWord;

  // Image for the combination result (you can replace this with any valid image)
  const combinationImage = allSelected ? require('../assets/result-image1.png') : null;

  return (
    <View style={styles.container}>
      {/* Background Image (Stage) */}
      <Image
        source={require('../assets/stage.png')}
        style={styles.backgroundImage}
        resizeMode="contain"
      />

      {/* Overlapping Book Image */}
      <Image 
        source={require('../assets/old-book.png')}
        style={styles.bookImage}
        resizeMode="contain"
      />

      {/* Overlapping Buttons */}
      <View style={styles.buttonRow}>
        {/* Potion Button */}
        <TouchableOpacity
          style={[styles.button, { zIndex: 1 }]}
          onPress={() => setSelectedPotion(!selectedPotion)}
        >
          <Ionicons
            name="flask"
            size={30}
            color={selectedPotion ? '#605795' : 'black'}
          />
          <Text style={styles.buttonText}>Potion</Text>
        </TouchableOpacity>

        {/* Stone Button */}
        <TouchableOpacity
          style={[styles.button, { zIndex: 1 }]}
          onPress={() => setSelectedStone(!selectedStone)}
        >
          <Ionicons
            name="gem"
            size={30}
            color={selectedStone ? '#605795' : 'black'}
          />
          <Text style={styles.buttonText}>Stone</Text>
        </TouchableOpacity>

        {/* Word Button */}
        <TouchableOpacity
          style={[styles.button, { zIndex: 1 }]}
          onPress={() => setSelectedWord(!selectedWord)}
        >
          <Ionicons
            name="book"
            size={30}
            color={selectedWord ? '#605795' : 'black'}
          />
          <Text style={styles.buttonText}>Word</Text>
        </TouchableOpacity>
      </View>

      {/* Show the resulting image when all items are selected */}
      {combinationImage && (
        <Image
          source={combinationImage}
          style={styles.combinationImage}
          resizeMode="contain"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1e1e1f'
  },
  backgroundImage: {
    flex:1,
    position: 'absolute',
    width: "120%",
    bottom:-60

  },
  bookImage: {
    width: '100%',
    height: 400,
    position: 'absolute',
    bottom: -50,
    zIndex: 0, // Keeps the book below the buttons
  },
  buttonRow: {
    position: 'absolute',
    bottom: 25, // Adjust based on your needs (aligned with book)
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    zIndex: 1, // Make sure buttons are on top of the book
  },
  button: {
    backgroundColor: '#f8f3e7',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  buttonText: {
    color: '#605795',
    fontSize: 14,
    marginTop: 5,
  },
  combinationImage: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  navigateButton: {
    backgroundColor: '#605795',
    padding: 15,
    marginTop: 10,
    borderRadius: 5,
  },
});

export default PageOne;
