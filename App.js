import React from "react";
import { View, Text, StatusBar } from "react-native";
import firebase from "./src/services/firebaseConnection";

export default function App() {
  return (
    <View>
      <StatusBar backgroundColor="#131313" barStyle="ligth-content" />
    </View>
  );
}
