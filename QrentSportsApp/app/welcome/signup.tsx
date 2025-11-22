import React from "react";
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Signup() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Signup Screen</Text>
      <Button title="Go to Login" onPress={() => router.push("/welcome/login")} />
    </View>
  );
}
