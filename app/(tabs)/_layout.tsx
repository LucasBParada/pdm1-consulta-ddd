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

          left: 15,
          right: 15,

          bottom: 25,

          height: 72,

          borderRadius: 20,

          paddingTop: 8,
          paddingBottom: 8,
        },

        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 2,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",

          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="home"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Consulta"
        options={{
          title: "Consulta",

          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="call"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}