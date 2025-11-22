// app/welcome/_layout.tsx
import { Stack } from "expo-router";
import React from "react";

export default function Layout() {
  return <Stack initialRouteName="login" />; // just "login", not "welcome/login"
}
