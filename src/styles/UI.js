// styles for Auth.tsx and Settings.tsx

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
		// backgroundColor: "#605795",
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
	imageContainer: {
		width: 300,
		height: 300,
		justifyContent: "center",
		alignItems: "center",
		marginTop: '-20%',
	  },
	image: {
		width: "100%",
		height: "100%",
	  },
	toggleContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 50,
	},
	toggleText: {
		fontSize: 18,
		marginRight: 10,
		color: "white",
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: "600",
		color: "black",
		marginBottom: 10,
	  },
	buttonText: {
	  color: "black",
	  fontSize: 16,
	  fontWeight: "bold",
	},
	welcomeButtonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	  },
  });

  