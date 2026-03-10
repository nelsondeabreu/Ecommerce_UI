import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    textTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        alignItems: 'center'
    },
    cardChooseSize: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20,
    },
    size: {
        width: 50,
        height: 50,
        borderRadius: 6,
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#aaaaaa5e',
    },
    Circle: {
        width: 40,
        height: 40,
        borderRadius: "50%",
        backgroundColor: '#a113a1',
    },
});