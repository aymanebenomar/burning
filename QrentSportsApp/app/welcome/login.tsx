import React from "react";
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Login Screen</Text>
      <Button title="Go to Signup" onPress={() => router.push("/welcome/signup")} />
    </View>
  );
}
