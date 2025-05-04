import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ActivityIndicator, LogBox, Button } from "react-native";
import { styles } from "../styles/UI";

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Image
          style={styles.imageContainer}
          source={require("../assets/head-face.png")}
          resizeMode="contain"
        />
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Page One"
          onPress={() => navigation.navigate('PageOne')}
        />
        <Button
          title="Go to Page Two"
          onPress={() => navigation.navigate('PageTwo')}
        />
        <Button
          title="Go to Page Three"
          onPress={() => navigation.navigate('PageThree')}
        />
        </View>
    </View>
  );
};

export default HomeScreen;
