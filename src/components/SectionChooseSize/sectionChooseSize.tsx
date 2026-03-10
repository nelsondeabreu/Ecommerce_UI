import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

const sizes = ["S", "M", "L", "XL"];
const colors = [ "#ca0fca", "#1334a1", "#b12b21"];

export function ChooseSize() {
  const [selectedSize, setSelectedSize] = useState<string>('L');
  const [selectedColor, setSelectedColor] = useState<string>("#1334a1");

  return (
    <View>
      <View>
        <View style={styles.textTop}>
          <Text style={{ fontSize: 28, fontWeight: "bold" }}>Berrylush</Text>
          <Text style={{ fontSize: 16, color: "#000000" }}>$120,00</Text>
        </View>

        <Text style={{ marginTop: 10, fontSize: 16, color: "#555" }}>
          Price <Text style={{ fontWeight: "bold" }}>Inclusive</Text> Of All Taxes
        </Text>

        <View style={styles.cardChooseSize}>
          <View>
            <Text
              style={{
                marginTop: 20,
                fontSize: 18,
                color: "#555",
                fontWeight: "bold",
              }}
            >
              Choose Size
            </Text>
            <View style={{ marginTop: 10, flexDirection: "row", gap: 10 }}>
              {sizes.map((size) => (
                <Pressable
                  key={size}
                  onPress={() => setSelectedSize(size)}
                  style={[
                    styles.size,
                    { backgroundColor:  selectedSize === size ? selectedColor : "#e0e0e0" },
                  ]}
                >
                  <Text
                    style={{
                      fontSize: 28,
                      fontWeight: "bold",
                      color: selectedSize === size ? "#fff" : "#000",
                    }}
                  >
                    {size}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>

          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
              marginTop: 20,
            }}
          >
            {colors.map((color) => {
              const isSelected = selectedColor === color;
              return (
                <Pressable
                  key={color}
                  onPress={() => setSelectedColor(color)}
                  style={{
                    width: isSelected ?55 : 40,
                    height: isSelected ?55 : 40,
                    borderRadius: "50%",
                    backgroundColor: color,
                  }}
                />
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
}