import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#00ff88",
        tabBarInactiveTintColor: "#777",

        headerStyle: {
          backgroundColor: "#000",
        },

        headerTintColor: "#00ff88",

        headerTitleStyle: {
          fontWeight: "bold",
        },

        tabBarStyle: {
          position: "absolute",

          backgroundColor: "#000",

          borderTopColor: "#00ff88",
          borderTopWidth: 1,

          left: 12,
          right: 12,

          bottom: 15,

          height: 95,

          borderRadius: 24,

          paddingTop: 12,
          paddingBottom: 15,

          elevation: 12,
        },

        tabBarLabelStyle: {
          fontSize: 14,
          marginBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",

          tabBarIcon: ({ color }) => (
            <Ionicons
              name="home"
              size={28}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Consulta"
        options={{
          title: "Consulta",

          tabBarIcon: ({ color }) => (
            <Ionicons
              name="call"
              size={28}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}