import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>BrazilDDD</Text>

      <Text style={styles.description}>
        Bem-vindo ao BrazilDDD
      </Text>

      <Text style={styles.text}>
        Este aplicativo permite consultar informações
        sobre DDDs de todo o Brasil.
      </Text>

      <Text style={styles.text}>
        Para começar, acesse a guia:
      </Text>

      <Text style={styles.highlight}>
        Consulta
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },

  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#00ff88",
    marginBottom: 25,
  },

  description: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 20,
    fontWeight: "600",
    textAlign: "center",
  },

  text: {
    fontSize: 18,
    color: "#ccc",
    textAlign: "center",
    marginBottom: 15,
    lineHeight: 28,
  },

  highlight: {
    fontSize: 28,
    color: "#00ff88",
    fontWeight: "bold",
    marginTop: 10,
  },
});