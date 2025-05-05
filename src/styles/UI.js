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
		color: "white",
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
	getStartedButton: {
	  backgroundColor: "#4CAF50",
	  paddingVertical: 12,
	  paddingHorizontal: 30,
	  borderRadius: 5,
	  width: "80%",
	  alignItems: "center",
	  marginBottom: "-15%",
	},
	logoutButton: {
	  backgroundColor: "#FF7057",
	  paddingVertical: 12,
	  paddingHorizontal: 30,
	  borderRadius: 5,
	  borderWidth: 1,
	  borderColor: 'black',
	  width: "80%",
	  alignItems: "center",
	  marginTop: 20,
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
	  fogOptionsContainer: {
		flexDirection: "row",
		justifyContent: "center",
		marginBottom: '25%',
		marginTop: '8%'
	  },
	  fogOptionButton: {
		padding: 10,
		marginHorizontal: 5,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: "black",
		backgroundColor: "#fff",
	  },
	  fogOptionSelected: {
		backgroundColor: "#f3d88b",
	  },
	  fogOptionText: {
		color: "black",
		fontWeight: "bold",
	  },
	  fogOptionTextSelected: {
		color: "black",
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
	userIdText: {
	  color: "white",
	  fontSize: 18,
	  marginBottom: 20,
	},
  });

  