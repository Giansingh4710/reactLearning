import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// import Exp from "./components/exp";
import Svg, { Line } from "react-native-svg";

import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function App() {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <Svg width={100} height={100}>
        <Line x1="0" y1="0" x2="100" y2="100" stroke="red" strokeWidth="2" />
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
});
