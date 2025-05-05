import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const PageTwo = () => {
  // Define the combinations and their corresponding images
  const combinations = [
    { combination: 'Potion + Stone + Word', image: require('../assets/result1.png') },
    { combination: 'Potion + Word + Stone', image: require('../assets/result2.png') },
    { combination: 'Stone + Potion + Word', image: require('../assets/result3.png') },
    { combination: 'Stone + Word + Potion', image: require('../assets/result4.png') },
    { combination: 'Word + Potion + Stone', image: require('../assets/result5.png') },
    { combination: 'Word + Stone + Potion', image: require('../assets/result6.png') },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Possible Combinations</Text>
        {combinations.map((combo, index) => (
          <View key={index} style={styles.combinationContainer}>
            <Text style={styles.combinationText}>{combo.combination}</Text>
            <Image source={combo.image} style={styles.combinationImage} resizeMode="contain" />
          </View>
        ))}
      </ScrollView>
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

export default PageTwo;
