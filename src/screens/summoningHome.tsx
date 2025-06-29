import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useSeenCombinations } from '../context/SeenCombinationsContext';

const PageOne = ({ navigation }: any) => {
  const { markAsSeen } = useSeenCombinations();

  // States to track button selections and images
  const [selectedPotion, setSelectedPotion] = useState(false);
  const [selectedStone, setSelectedStone] = useState(false);
  const [selectedWord, setSelectedWord] = useState(false);
  
  // Images for each selection (using GIFs)
  const potionGif = require('../assets/white_heart.gif');  // Path to your GIF
  const stoneGif = require('../assets/green_diamond.gif');    // Path to your GIF
  const wordGif = require('../assets/red_moon.gif');      // Path to your GIF
  
  // An array to track the order of selected images
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  // Function to handle button press and update the selected images
  const handleSelection = (selection: string, setSelectionState: React.Dispatch<React.SetStateAction<boolean>>) => {
    setSelectionState((prevState) => !prevState);

    // Add the corresponding image to the selectedImages array in order
    if (!selectedImages.includes(selection)) {
      setSelectedImages((prevImages) => [...prevImages, selection]);
    } else {
      // Remove the image if it was deselected
      setSelectedImages((prevImages) => prevImages.filter(image => image !== selection));
    }
  };

  // Show final result image based on selected order
  const getResultImage = () => {
    if (selectedImages.length !== 3) return null;

    const key = selectedImages.join('-'); // e.g., "potion-stone-word"

    const resultMap: Record<string, any> = {
      'potion-stone-moon': require('../assets/result1.png'),
      'potion-moon-stone': require('../assets/result2.png'),
      'stone-potion-moon': require('../assets/result3.png'),
      'stone-moon-potion': require('../assets/result4.png'),
      'moon-potion-stone': require('../assets/result5.png'),
      'moon-stone-potion': require('../assets/result6.png'),
    };

    const resultImage = resultMap[key];
    if (resultImage) {
      markAsSeen(key); // Mark the combination as seen
      console.log(key);
    }

    return resultImage ? (
      <Image source={resultImage} style={styles.resultImage} resizeMode="contain" />
    ) : null;
  };
  

  // Render images based on the selected items
  const renderSelectedImages = () => {
    return selectedImages.map((image, index) => {
      if (image === 'potion') return <Image key={index} source={potionGif} style={styles.selectionImage} />;
      if (image === 'stone') return <Image key={index} source={stoneGif} style={styles.selectionImage} />;
      if (image === 'moon') return <Image key={index} source={wordGif} style={styles.selectionImage} />;
      return null;
    });
  };

  return (
    <View style={styles.container}>
        
      {/* Background Image (Stage) */}
      <Image
        source={require('../assets/stage.png')}
        style={styles.backgroundImage}
        resizeMode="contain"
      />
    <View style={styles.resultImageContainer}>
        {getResultImage()}
    </View>

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
          onPress={() => handleSelection('potion', setSelectedPotion)}
        >
          <Image
            source={potionGif}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>Heart</Text>
        </TouchableOpacity>

        {/* Stone Button */}
        <TouchableOpacity
          style={[styles.button, { zIndex: 1 }]}
          onPress={() => handleSelection('stone', setSelectedStone)}
        >
          <Image
            source={stoneGif}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>Stone</Text>
        </TouchableOpacity>

        {/* Moon Button */}
        <TouchableOpacity
          style={[styles.button, { zIndex: 1 }]}
          onPress={() => handleSelection('moon', setSelectedWord)}
        >
          <Image
            source={wordGif}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>Moon</Text>
        </TouchableOpacity>
      </View>

      {/* Render the selected images based on the order of selections */}
      <View style={styles.selectedImagesContainer}>
        {renderSelectedImages()}
      </View>
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
    flex: 1,
    position: 'absolute',
    width: "120%",
    bottom: -60
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
    backgroundColor: '#d8cdb5',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderColor: '#d8cdb5',
    borderWidth: 3,
  },
  buttonImage: {
    width: 30,
    height: 30,
    marginBottom: 5, // Adjust if needed
  },
  buttonText: {
    color: '#605795',
    fontSize: 14,
    marginTop: 5,
  },
  selectionImage: {
    width: 60,
    height: 60,
    margin: 10,
  },
  selectedImagesContainer: {
    flexDirection: 'row',
    marginTop: 375,
  },
  resultImageContainer: {
    position: 'absolute',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultImage: {
    width: 200,
    height: 200,
  },
});

export default PageOne;
