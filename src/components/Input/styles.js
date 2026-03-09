import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 54,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 50,
    paddingLeft: 16,
    paddingRight: 8,
    gap: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },

  input: {
    flex: 1,
    fontSize: 15,
    color: "#222",
  },

  settings: {
    width: 40,
    height: 40,
    borderRadius: "50%",

    backgroundColor: "#7c3aed",

    alignItems: "center",
    justifyContent: "center",
  },

});