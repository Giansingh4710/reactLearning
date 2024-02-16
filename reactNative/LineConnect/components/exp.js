import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

function Exp() {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panGestureEvent = useAnimatedGestureHandler({
    onStart: (e, c) => {
      c.translateX = translateX.value;
      c.translateY = translateY.value;
    },
    onActive: (e, c) => {
      translateX.value = e.translationX + c.translateX;
      translateY.value = e.translationY + c.translateY;
    },
    onEnd: (e) => {
      //console.log(translateX.value, translateY.value);
      if (translateY.value > -150) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
      if (translateY.value < 150) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });
  const [color, setColor] = useState("yellow");
  return (
    <View style={styles.container}>
      {/* <View style={styles.circle}>
        <PanGestureHandler onGestureEvent={panGestureEvent}>
          <Animated.View style={[styles.square, rStyle]} />
        </PanGestureHandler>
      </View>
      <Pressable
        style={() => {
          return {
            ...styles.press,
            backgroundColor: color,
          };
        }}
      ></Pressable> */}
      <Text>Hi</Text>
    </View>
  );
}

const THE_SIZE = 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  square: {
    width: THE_SIZE,
    height: THE_SIZE,
    backgroundColor: "rgba(0,0,256,0.5)",
    borderRadius: THE_SIZE / 5,
  },
  circle: {
    width: THE_SIZE * 3,
    height: THE_SIZE * 3,
    borderColor: "blue",
    borderRadius: THE_SIZE / 2,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  press: {
    width: THE_SIZE,
    height: THE_SIZE,
    top: 50,
  },
});

export default Exp;
