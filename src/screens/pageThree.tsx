// guide


import { View, Text } from "react-native";
// import { styles } from "../styles/UI";
import { StyleSheet } from "react-native";
import SoundPlayer from "react-native-sound-player";



function PageThree() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>This is Page Three</Text>
      </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1e1e1f'
  },
  title: {
		fontSize: 48,
		fontWeight: "bold",
		color: "black",
		justifyContent: "top",
		alignItems: "center",
		marginTop: "35%",
		bottom: "20%",
	  },
}
)

export default PageThree;