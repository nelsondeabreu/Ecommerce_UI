import { Handbag } from "lucide-react-native";
import { View } from "react-native";
import { Styles } from "./styles";

export const Header = () => {
  return (
    <View style={Styles.container}>
      <View>
        <View style={Styles.barra1}></View>
        <View style={Styles.barra2}></View>
      </View>

      <View style={Styles.icone}>
        <Handbag size={28} color="#333" strokeWidth={2.5} />
      </View>
    </View>
  );
};
