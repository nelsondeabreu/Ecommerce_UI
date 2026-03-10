import { router } from "expo-router";
import { ChevronLeft, Handbag } from "lucide-react-native";
import { Image, View } from "react-native";
import { styles } from "./styles";

type Props = {
    image: string | any;
};

export function Card({ image }: Props) {
    return (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <Image
                    source={
                        typeof image === "string"
                            ? { uri: image }
                            : image
                    }
                    style={styles.image}
                />
            </View>
            <View style={styles.cardHeader}>
                <View style={styles.icone}>
                    <ChevronLeft size={24} onPress={() => {router.back()}} />
                </View>
                <View style={styles.icone}>
                    <Handbag size={24} />
                </View>
            </View>

        </View>
    );
}