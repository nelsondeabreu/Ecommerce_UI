import { Text, View } from "react-native";

export default function About() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#000" }}>
      <Text style={{ color: "#fff", fontSize: 30 }}>ℹ️ About Screen</Text>
    </View>
  );
}