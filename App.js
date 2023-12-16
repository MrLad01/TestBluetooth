import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { BleManager } from "react-native-ble-plx";
import { StyleSheet, Text, View, Button, PermissionsAndroid } from 'react-native';



// const bleManager = new BleManager();

async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      {
        title: "Location permission for bluetooth scanning",
        message:
          "Grant location permission to allow the app to scan for Bluetooth devices",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("Location permission for bluetooth scanning granted");
    } else {
      console.log("Location permission for bluetooth scanning denied");
    }
  } catch (err) {
    console.warn(err);
  }
}

requestLocationPermission();



export default function App() {

  // const [bleManager, setBleManager] = useState(new BleManager());
  const bleManager = new BleManager();

  
  useEffect(() => {
    // Request location permission when the component mounts
    requestLocationPermission();

    // Clean up resources when component unmounts
    return () => {
      bleManager.destroy();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>Omo testing this shit mad! lemme check it out </Text>
      <Button title="Connect to Bluetooth"  />
      <Button title="Vibrate Device"  />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});