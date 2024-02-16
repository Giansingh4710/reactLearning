import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";

import Header from "./components/header";
import ListItem from "./components/listItem";
import TheModal from "./components/modal";

export default function App() {
  function randId() {
    return Math.random().toString(36).substr(2, 9);
  }
  const [items, setItems] = React.useState([
    { id: randId(), text: "Kach" },
    { id: randId(), text: "KaRa" },
    { id: randId(), text: "Kirpan" },
    { id: randId(), text: "Kanga" },
    { id: randId(), text: "Keski" },
  ]);
  const [header, setHeader] = React.useState("TO DO LIST ITEMS");
  const [modalOpen, setModal] = React.useState(false);
  const [newName, setNewName] = React.useState("");
  const [id, setId] = React.useState(""); //the id is to see which item to change
  const [clickLoaction, setClickLoaction] = React.useState(""); //the id is to see which item to change
  function deleteItem(id) {
    setItems((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  }
  function updateItem(id) {
    setItems((lst) => {
      return lst.map((item) => {
        if (item.id === id) {
          item.text = newName;
        }
        return item;
      });
    });
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header
        style={styles.header}
        title={header}
        setModal={setModal}
        setClickLoaction={setClickLoaction}
      />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem
            item={item}
            delete={deleteItem}
            setId={setId}
            setModal={setModal}
            setClickLoaction={setClickLoaction}
          />
        )}
      />
      <TheModal
        setModal={setModal}
        modalStatus={modalOpen}
        newName={newName}
        setNewName={setNewName}
        updateItem={updateItem}
        clickedFromWhere={clickLoaction}
        setItems={setItems}
        id={id}
        randId={randId}
        setHeader={setHeader}
      />
      <Button
        title="ADD"
        style={styles.addButton}
        onPress={() => {
          setClickLoaction("add");
          setModal(true);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  addButton: {
    paddingBottom: 40,
  },
});
