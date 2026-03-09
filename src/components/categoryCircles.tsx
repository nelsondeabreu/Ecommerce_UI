import React from "react";
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

type Category = {
  label: string;
  image: string;
};

type Props = {
  categories: Category[];
  onSelect?: (label: string) => void;
};

export const CategoryCircles = ({ categories, onSelect }: Props) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      {categories.map((item) => (
        <Pressable
          key={item.label}
          style={styles.item}
          onPress={() => onSelect?.(item.label)}
        >
          <View style={styles.circle}>
            <Image
              source={{ uri: item.image}}
              style={styles.image}
              resizeMode="cover"
            />
          </View>

          <Text style={styles.label}>{item.label}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 14,
    gap: 18,
  },

  item: {
    alignItems: "center",
  },

  circle: {
    width: 75,
    height: 75,
    borderRadius: "50%",
    overflow: "hidden",
    backgroundColor: "#1f57a0",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  label: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "500",
    color: "#222",
    textAlign: "center",
  },
});