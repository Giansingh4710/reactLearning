import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";

const SIZE = 100;

export default function App() {
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
      console.log(translateX.value, translateY.value);
      if (
        translateX.value < -100 || // if too much left
        translateX.value > 100 || //if too much right
        translateY.value < -100 || //if too high
        translateY.value > 100 // if too low
      ) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
      // if (translateY.value < 150) {
      //   translateX.value = withSpring(0);
      //   translateY.value = withSpring(0);
      // }
    },
  });

  const rStyle = useAnimatedStyle(() => {
    //actually appling the movement to the Anivated.View
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <PanGestureHandler onGestureEvent={panGestureEvent}>
          <Animated.View style={[styles.square, rStyle]} />
        </PanGestureHandler>
      </View>
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
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: "rgba(0,0,256,0.5)",
    borderRadius: SIZE / 5,
  },
  circle: {
    width: SIZE * 3,
    height: SIZE * 3,
    borderColor: "blue",
    borderRadius: SIZE / 2,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
});
