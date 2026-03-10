import { Card } from "@/components/Card/card";
import { ChooseSize } from "@/components/SectionChooseSize/sectionChooseSize";
import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const titles = ["Description", "Delivery", "Reviews"];

export default function Product() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <SafeAreaView style={{ flex: 1, padding: 20 }}>
                    <Card image={require("../../../assets/images/vestido_azul.png")} />
                    <ChooseSize />

                    <View style={{ marginTop: 20 }}>
                        <View style={{ flexDirection: "row", gap: 20 }}>
                            {titles.map((title, index) => (
                                <Pressable key={title} onPress={() => setActiveStep(index)}>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontWeight: activeStep === index ? "bold" : "normal",
                                            color: activeStep === index ? "#1334a1" : "#555",
                                            borderBottomWidth: activeStep === index ? 2 : 0,
                                            borderBottomColor: "#1334a1",
                                            paddingBottom: 4,
                                        }}
                                    >
                                        {title}
                                    </Text>
                                </Pressable>
                            ))}
                        </View>

                        <View style={{ marginTop: 20 }}>
                            {activeStep === 0 && (
                                <Text style={{ fontSize: 16, color: "#555" }}>
                                    Berrylush is casualwear in Western style that relaxed, 
                                    occasional and suited for everyday.
                                </Text>
                            )}
                            {activeStep === 1 && (
                                <Text style={{ fontSize: 16, color: "#555" }}>
                                    Delivery takes 3-5 business days depending on your location.
                                </Text>
                            )}
                            {activeStep === 2 && (
                                <Text style={{ fontSize: 16, color: "#555" }}>
                                    Reviews: 4.8/5 based on 120 customer ratings.
                                    lore
                                </Text>
                            )}
                        </View>
                    </View>

                    <Pressable
                        style={{
                            marginVertical: 20,
                            backgroundColor: "#1334a1",
                            padding: 20,
                            borderRadius: 10,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 18,
                                color: "#fff",
                                fontWeight: "bold",
                                textAlign: "center",
                            }}
                        >
                            Add to Cart $120,00
                        </Text>
                    </Pressable>
                </SafeAreaView>
            </ScrollView>
        </View>
    );
}