import { Tabs } from "expo-router";
import { Home, LayoutGrid, UserRound } from "lucide-react-native";
import { Platform, View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
          height: 70,
          paddingTop: 20,
          paddingBottom: Platform.OS === "ios" ? 20 : 10,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          ...Platform.select({
            ios: {
              shadowColor: "#000",
              shadowOffset: { width: 0, height: -3 },
              shadowOpacity: 0.3,
              shadowRadius: 10,
            },
            android: {
              elevation: 15,
            },
          }),
        },
        tabBarActiveTintColor: "#c01cb2",
        tabBarInactiveTintColor: "#666",
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
          marginTop: 3,
        },
      }}
    >
      {/* Perfil Tab */}
      <Tabs.Screen
        name="perfil"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: "center" }}>
              <UserRound
                size={focused ? 32 : 26}
                color={color}
                strokeWidth={focused ? 2.8 : 2.2}
              />
            </View>
          ),
        }}
      />

      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: "center" }}>
              <Home
                size={focused ? 32 : 26}
                color={color}
                strokeWidth={focused ? 2.8 : 2.2}
              />
            </View>
          ),
        }}
      />

      {/* About Tab */}
      <Tabs.Screen
        name="about"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: "center" }}>
              <LayoutGrid
                size={focused ? 32 : 26}
                color={color}
                strokeWidth={focused ? 2.8 : 2.2}
              />
            </View>
          ),
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
      />
    </Tabs>
  );
}