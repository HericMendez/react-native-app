import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import CardComponent from "./CardComponent";
import Styles from "./styles";

export default function App() {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>My App</Text>
      <CardComponent />
      <StatusBar style="light" />
    </View>
  );
}

