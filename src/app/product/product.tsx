import { Card } from "@/components/Card/card";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Product() {
    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1, padding: 20 }}>
               <Card image={require('../../../assets/images/vestido_azul.png')} /> 
            </SafeAreaView>
        </View>
    );
}
