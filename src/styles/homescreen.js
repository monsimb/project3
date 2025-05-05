// Styles
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageContainer: {
      position: 'relative',  // We need relative positioning for the button to overlap it
      width: '100%',
      height: 400, // Adjust this depending on the size of your image
      marginBottom: 20, // Space between image and button
    },
    image: {
      width: '100%',
      height: '100%',
    },
    buttonContainer: {
      position: 'absolute', // This ensures that the button can overlap the image
      top: 370, // You can adjust this value to position it exactly where you want over the image
      left: '96%',
      transform: [{ translateX: -150 }], // Move the button to center it (adjust for button width)
    },
    button: {
      backgroundColor: '#101010',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
  });
  