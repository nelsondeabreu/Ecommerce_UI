import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    card: {
        height: 350,
        backgroundColor: "#0968b6e5",
        borderRadius: 20,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.20,
        shadowRadius: 6,
        elevation: 8,
    },
    cardHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
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
    },
    imageContainer: {
        position: "absolute",
        alignSelf: "center",
        width: "100%",
        height: "100%",
        paddingTop: 20,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
});