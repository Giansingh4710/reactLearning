import React from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ListItem = (props) => {
  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => {
        props.setId(props.item.id);
        props.setModal(true);
        props.setClickLoaction("listItem");
      }}
    >
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{props.item.text}</Text>
        <Button title="DELETE" onPress={() => props.delete(props.item.id)} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
  },
  listItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItemText: {
    fontSize: 18,
  },
});

export default ListItem;
