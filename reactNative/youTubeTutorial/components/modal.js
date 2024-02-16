import React from "react";
import { View, Text, StyleSheet, Modal, TextInput, Button } from "react-native";

const TheModal = (props) => {
  const [saveButtondisabled, setSaveButton] = React.useState(true);
  function theSaveButton() {
    if (props.clickedFromWhere === "listItem") {
      return () => {
        props.updateItem(props.id);
        props.setModal(false);
        props.setNewName("");
        setSaveButton(true);
      };
    } else if (props.clickedFromWhere === "add") {
      return () => {
        props.setItems((prev) => [
          ...prev,
          { id: props.randId(), text: props.newName },
        ]);
        props.setModal(false);
        props.setNewName("");
        setSaveButton(true);
      };
    } else if (props.clickedFromWhere === "header") {
      return () => {
        props.setHeader(props.newName);
        props.setModal(false);
        props.setNewName("");
        setSaveButton(true);
      };
    }
  }
  return (
    <Modal
      transparent={true}
      visible={props.modalStatus}
      onRequestClose={() => props.setModal(false)}
      style={styles.modalBackGround}
    >
      <View style={styles.modalContainer}>
        <Text style={{ color: "white" }}>Enter the new name:</Text>
        <TextInput
          autoFocus
          style={styles.modalTextbox}
          placeholder="Enter Name"
          value={props.newName}
          onChangeText={(event) => {
            props.setNewName(event);
            //console.log(props.newName, event);
            if (event === "") {
              setSaveButton(true);
            } else {
              setSaveButton(false);
            }
          }}
        />
        <View style={styles.modalButtons}>
          <Button
            style={styles.modalButton}
            title="Save"
            disabled={saveButtondisabled}
            onPress={theSaveButton()}
          />
          <View style={styles.space} />
          <Button
            style={styles.modalButton}
            title="Close"
            onPress={() => {
              props.setModal(false);
              props.setNewName("");
              setSaveButton(true);
            }}
          />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalBackGround: {},
  modalContainer: {
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    height: "50%",
    left: 50,
    padding: 30,
    borderRadius: 20,
    elevation: 20,
  },
  modalTextbox: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 20,
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    padding: 30,
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
  modalButton: {
    borderRadius: 10,
  },
});

export default TheModal;
