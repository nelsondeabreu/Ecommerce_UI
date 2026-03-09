import { Header } from "@/components/Header/header";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <View style={{  flex: 1, backgroundColor: "#f5f5f5" }}>
      <ScrollView>
        <SafeAreaView>
          <Header />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}
