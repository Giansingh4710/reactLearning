import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";

export default function App() {
  const [count, setCount] = React.useState(0);
  const [increase, setIncrease] = React.useState(1);
  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <View style={styles.button}>
        <Button
          title="+"
          onPress={() => {
            setCount(count + increase);
            if (count > 10) {
            }
          }}
        />
        <Button
          title="-"
          onPress={() => {
            setCount(count - increase);
            if (count > 10) {
            }
          }}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="type how much you want to change by"
        onChangeText={(event) => {
          const num = parseFloat(event);
          console.log(num);
          if (!isNaN(num)) {
            setIncrease(num);
          }
        }}
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="type what you want your counter to be at"
        onChangeText={(event) => {
          const num = parseFloat(event);
          if (num !== NaN) {
            setCount(num);
          }
        }}
      ></TextInput>
      <StatusBar style="auto" />
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
  button: {
    //flex: 1,
    backgroundColor: "red",
    //alignItems: "center",
    //justifyContent: "center",
    flexDirection: "row",
  },
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    padding: 8,
    margin: 10,
  },
});
