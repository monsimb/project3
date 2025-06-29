import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../styles/guide.js'; // Ensure this path is correct
import { useSeenCombinations } from '../context/SeenCombinationsContext';

const PageTwo = () => {
  const { seenCombinations } = useSeenCombinations();

  // Define the combinations and their corresponding images
  const combinations = [
    { combination: 'Potion + Stone + Moon', image: require('../assets/result1.png') },
    { combination: 'Potion + Moon + Stone', image: require('../assets/result2.png') },
    { combination: 'Stone + Potion + Moon', image: require('../assets/result3.png') },
    { combination: 'Stone + Moon + Potion', image: require('../assets/result4.png') },
    { combination: 'Moon + Potion + Stone', image: require('../assets/result5.png') },
    { combination: 'Moon + Stone + Potion', image: require('../assets/result6.png') },
  ];
    // Handle click event
    const handleCombinationClick = (combination: any) => {
      Alert.alert('Combination Clicked', `You clicked on: ${combination}`);
    };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Possible Combinations</Text>
        {combinations.map((combo, index) => {
          const isSeen = seenCombinations.includes(combo.combination.toLowerCase().replace(/[\s+]+/g, '-'));
          console.log(isSeen);
          console.log(seenCombinations);
          console.log(combo.combination.toLowerCase().replace(/[\s+]+/g, '-'));
          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.combinationContainer,
                { opacity: isSeen ? 1 : 0.5 }, // Grey out unseen combinations
              ]}
              onPress={() => handleCombinationClick(combo.combination)}
              disabled={!isSeen} // Disable click for unseen combinations
            >
              <Text style={styles.combinationText}>{combo.combination}</Text>
              <Image source={combo.image} style={styles.combinationImage} resizeMode="contain" />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default PageTwo;
