import { Tabs } from "expo-router";
import { Platform, Text } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#f8f8f8",
          height: 65,
          borderTopWidth: 1,
          borderTopColor: "#ddd",
          paddingBottom: Platform.OS === "ios" ? 25 : 10,
        },
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#666",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 24, color }}>🏠</Text>,
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 24, color }}>�</Text>,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 24, color }}>ℹ️</Text>,
        }}
      />
    </Tabs>
  );
}