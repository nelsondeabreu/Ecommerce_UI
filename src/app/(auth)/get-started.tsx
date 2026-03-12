import { Text, View } from "react-native";

export default function GetStarted() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#ffffff" }}>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>Welcome to the App!</Text>
            <Text style={{ marginTop: 10, fontSize: 16, color: "#555" }}>
                Please sign in or create an account to get started.
            </Text>
        </View>
    );
}