
import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.8;
const CARD_HEIGHT = CARD_WIDTH * 1.2;

export const styles = StyleSheet.create({
    cardWrapper: {
        marginVertical: 20,
        alignItems: "center",
    },

    card: {
        width: "100%",
        height: CARD_HEIGHT,
        borderRadius: 20,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "flex-end",
    },

    imageContainer: {
        position: "absolute",
        alignSelf: "center",
        width: "100%",
        height: "100%",
        borderRadius: CARD_WIDTH * 0.35,
        overflow: "hidden",
    },

    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },

    overlayCardWrapper: {
        width: "90%",
        borderRadius: 20,
        overflow: "hidden",
        marginBottom: 20,
    },

    overlayCard: {
        padding: 16,
        backgroundColor: "rgba(255, 255, 255, 0.43)",
    },

    overlayContent: {
        flexDirection: "column",
        gap: 8,
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    name: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "700",
    },

    price: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "700",
    },

    connectText: {
        color: "#fff",
        fontSize: 14,
    },

    ratingText: {
        color: "#fff",
        marginLeft: 4,
        fontSize: 14,
        fontWeight: "600",
    },
});