import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

type DDDResponse = {
  state: string;
  cities: string[];
};

export default function Consulta(): JSX.Element {
  const [ddd, setDdd] = useState<string>("");
  const [data, setData] = useState<DDDResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchDDD, setSearchDDD] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect((): void => {
    if (searchDDD.length !== 2) return;

    const fetchDDD = async (): Promise<void> => {
      try {
        setLoading(true);

        setError("");

        const response: Response = await fetch(
          `https://brasilapi.com.br/api/ddd/v1/${searchDDD}`
        );

        if (!response.ok) {
          throw new Error("DDD não encontrado");
        }

        const json: DDDResponse =
          (await response.json()) as DDDResponse;

        setData(json);

      } catch (error: unknown) {
        console.error("Erro ao buscar DDD:", error);

        setData(null);

        setError(
          "DDD não encontrado. Verifique o código digitado."
        );

      } finally {
        setLoading(false);
      }
    };

    fetchDDD();

  }, [searchDDD]);

  const handleSearch = (): void => {
    if (/^\d{2}$/.test(ddd)) {
      setSearchDDD(ddd);

    } else {
      setData(null);

      setError(
        "Digite um DDD válido contendo apenas 2 números."
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={
          Platform.OS === "ios"
            ? "padding"
            : undefined
        }
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 120,
          }}
        >
          <Text style={styles.title}>
            BrazilDDD
          </Text>

          <Text style={styles.description}>
            Consulte informações de qualquer DDD do Brasil
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Digite o DDD"
            placeholderTextColor="#777"
            keyboardType="numeric"
            maxLength={2}
            value={ddd}
            onChangeText={(text: string): void =>
              setDdd(text)
            }
          />

          <View style={styles.buttonContainer}>
            <Button
              title="Buscar"
              onPress={handleSearch}
              color="#00ff88"
            />
          </View>

          {loading && (
            <View style={styles.loading}>
              <ActivityIndicator
                size="large"
                color="#00ff88"
              />

              <Text style={styles.loadingText}>
                Carregando...
              </Text>
            </View>
          )}

          {!loading && error !== "" && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorTitle}>
                DDD INVÁLIDO
              </Text>

              <Text style={styles.errorText}>
                {error}
              </Text>
            </View>
          )}

          {!loading && data && (
            <View style={styles.result}>
              <Text style={styles.state}>
                Estado (UF): {data.state}
              </Text>

              <Text style={styles.subtitle}>
                Cidades:
              </Text>

              <FlatList
                scrollEnabled={false}
                data={data.cities}
                keyExtractor={(item: string): string =>
                  item
                }
                renderItem={({
                  item,
                }: {
                  item: string;
                }): JSX.Element => (
                  <Text style={styles.city}>
                    • {item}
                  </Text>
                )}
              />
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000",
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
    color: "#00ff88",
  },

  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 25,
    color: "#aaa",
  },

  input: {
    borderWidth: 2,
    borderColor: "#00ff88",
    borderRadius: 10,
    padding: 14,
    fontSize: 18,
    marginBottom: 15,
    backgroundColor: "#111",
    color: "#fff",
  },

  buttonContainer: {
    marginBottom: 20,
  },

  loading: {
    marginTop: 30,
    alignItems: "center",
  },

  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#fff",
  },

  errorContainer: {
    marginTop: 20,
    backgroundColor: "#111",
    borderWidth: 1,
    borderColor: "#00ff88",
    borderRadius: 12,
    padding: 18,
    alignItems: "center",
  },

  errorTitle: {
    color: "#00ff88",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },

  errorText: {
    color: "#ccc",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
  },

  result: {
    marginTop: 10,
    backgroundColor: "#111",
    borderWidth: 1,
    borderColor: "#00ff88",
    borderRadius: 12,
    padding: 15,
  },

  state: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#00ff88",
  },

  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    color: "#fff",
  },

  city: {
    fontSize: 17,
    marginBottom: 8,
    color: "#ccc",
  },
});