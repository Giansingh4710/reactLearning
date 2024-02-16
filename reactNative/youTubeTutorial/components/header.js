import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => {
          props.setModal(true);
          props.setClickLoaction("header");
        }}
      >
        <Text style={styles.text}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

Header.defaultProps = {
  title: "Shopping",
};
const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: "darkslateblue",
    padding: 15,
  },
  text: {
    color: "#fff",
    fontSize: 23,

    textAlign: "center",
  },
});

export default Header;
