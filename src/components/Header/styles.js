import { StyleSheet } from "react-native";


export const Styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    },
    barra1: {
        width: 60,
        height: 5,
        backgroundColor: "#000",
        borderRadius: 50,
    },
    barra2: {
        width: 40,
        height: 5,
        backgroundColor: "#000",
        marginVertical: 5,
        borderRadius: 50,
    },
    icone: {
      padding: 10,
    borderRadius: 50,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 8,
    }
});