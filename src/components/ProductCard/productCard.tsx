import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Star } from "lucide-react-native";
import React from "react";
import {
    Image,
    Pressable,
    Text,
    View,
} from "react-native";
import { styles } from "./styles";

type Props = {
    image: string | any;
    name: string;
    price: string;
    rating: number;
    onPress?: () => void;
};

export const ProductCard = ({
    image,
    name,
    price,
    rating,
    onPress,
}: Props) => {
    return (
        <Pressable style={styles.cardWrapper}  onPress={() => router.push('/product/product')}>
            <LinearGradient
                colors={["#c084fc", "#7c3aed"]}
                style={styles.card}
                start={{ x: 0.5, y: 0.5 }}
                end={{ x: 1, y: 1 }}
            >
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
                <View style={styles.overlayCardWrapper}>
                    <BlurView
                        intensity={50}
                        tint="dark"
                        style={styles.overlayCard}
                    >
                        <View style={styles.overlayContent}>
                            <View style={styles.row}>
                                <Text style={styles.name}>{name}</Text>
                                <Text style={styles.price}>{price}</Text>
                            </View>

                            <Text style={styles.connectText}>Connect for buy</Text>

                            <View style={styles.row}>
                                <Star size={16} color="#FFD700" strokeWidth={2} />
                                <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
                            </View>
                        </View>
                    </BlurView>
                </View>
            </LinearGradient>
        </Pressable>
    );
};

