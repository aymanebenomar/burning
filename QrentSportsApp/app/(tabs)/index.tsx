import React, { useEffect, useState, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Animated } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { StatusBar } from "expo-status-bar";

const { height } = Dimensions.get("window");

export default function Home() {
  const [location, setLocation] = useState(null);
  const bottomSheet = useRef(new Animated.Value(0)).current;

  // Get user location
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") return;

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
    })();
  }, []);

  const openSheet = () => {
    Animated.spring(bottomSheet, {
      toValue: -180,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* MAP */}
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        region={
          location
            ? {
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }
            : undefined
        }
      />

      {/* TOP LEFT BUTTON */}
      <TouchableOpacity style={styles.topLeftBtn}>
        <Text style={styles.icon}>👤</Text>
      </TouchableOpacity>

      {/* TOP RIGHT BUTTON */}
      <TouchableOpacity style={styles.topRightBtn}>
        <Text style={styles.icon}>⚙️</Text>
      </TouchableOpacity>

      {/* BOTTOM RIGHT BUTTON */}
      <TouchableOpacity style={styles.locateBtn}>
        <Text style={styles.icon}>📍</Text>
      </TouchableOpacity>

      {/* SCAN BUTTON */}
      <TouchableOpacity style={styles.scanBtn}>
        <Text style={styles.scanText}>Scan to Ride</Text>
      </TouchableOpacity>

      {/* SWIPE-UP CARD */}
      <Animated.View
        style={[
          styles.bottomSheet,
          { transform: [{ translateY: bottomSheet }] },
        ]}
      >
        <View style={styles.dragLine} />
        <Text style={styles.sheetTitle}>Nearest Scooter</Text>
        <Text style={styles.sheetInfo}>Battery: 82%</Text>
        <Text style={styles.sheetInfo}>Distance: 150m</Text>

        <TouchableOpacity style={styles.unlockBtn}>
          <Text style={styles.unlockText}>Unlock</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  map: { width: "100%", height: "100%" },

  icon: { fontSize: 20 },

  topLeftBtn: {
    position: "absolute",
    top: 55,
    left: 20,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 30,
    elevation: 8,
  },

  topRightBtn: {
    position: "absolute",
    top: 55,
    right: 20,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 30,
    elevation: 8,
  },

  locateBtn: {
    position: "absolute",
    bottom: 180,
    right: 20,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 30,
    elevation: 6,
  },

  scanBtn: {
    position: "absolute",
    bottom: 120,
    alignSelf: "center",
    backgroundColor: "#A4E881",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 40,
    elevation: 10,
  },

  scanText: { fontSize: 20, fontWeight: "bold", color: "#000" },

  bottomSheet: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  dragLine: {
    width: 60,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#ccc",
    alignSelf: "center",
    marginBottom: 15,
  },

  sheetTitle: { fontSize: 20, fontWeight: "700", marginBottom: 5 },
  sheetInfo: { fontSize: 14, color: "#444", marginBottom: 3 },

  unlockBtn: {
    backgroundColor: "#2ECC71",
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 15,
    alignItems: "center",
  },

  unlockText: { fontSize: 18, fontWeight: "700", color: "#fff" },
});
