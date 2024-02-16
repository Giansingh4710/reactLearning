import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Svg from "react-native-svg";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <View style={styles.circle}>
        <Text>Hi</Text>
      </View> */}
      <Svg width="500" height="300">
        <Svg.Line
          ref={(node) => (this._line = node)}
          x1="50" // start coordinate x
          y1="50" // start coordinate y
          x2="150" // end coordinate x
          y2="50" // end coordinate y
          // stroke="red"
          strokeWidth="2"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: 300,
    height: 300,
    borderColor: "blue",
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 150,
  },
});
