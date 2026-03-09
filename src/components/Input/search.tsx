import { Search, SlidersHorizontal } from "lucide-react-native";
import React from "react";
import { Pressable, TextInput, View } from "react-native";
import { styles } from "./styles";

type Props = {
  value?: string;
  onChangeText?: (text: string) => void;
  onPressSettings?: () => void;
};

export const SearchInput = ({
  value,
  onChangeText,
  onPressSettings,
}: Props) => {
  return (
    <View style={styles.container}>

      <Search size={30} color="#777" />

      <TextInput
        placeholder="Search for products"
        placeholderTextColor="#9ca3af"
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />

      <Pressable style={styles.settings} onPress={onPressSettings}>
        <SlidersHorizontal size={30} color="#fff" />
      </Pressable>

    </View>
  );
};

