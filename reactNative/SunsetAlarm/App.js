import * as React from "react";
// import MapView, { Callout, Circle, Marker } from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
} from "react-native";

export default function App() {
  const [sunTimes, setSunTimes] = React.useState({});
  const [locationEntry, setLocation] = React.useState(""); //location typed by user
  const [formatedAddress, setAddress] = React.useState("");

  const [gb, setGb] = React.useState("");

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Gurbani Ji</Text>
        <Text>Gurbani Ji</Text>
        <Text>Gurbani Ji</Text>
        <Text>Gurbani Ji</Text>
        <Text>{gb}</Text>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          fetch("https://api.gurbaninow.com/v2/shabad/random")
            .then((res) => res.json())
            .then((resJson) => {
              let shabad = "";
              const shabadOLstbj = resJson.shabad;
              for (const index in shabadOLstbj) {
                const gurmukhi = shabadOLstbj[index].line.larivaar.unicode;
                const translation =
                  shabadOLstbj[index].line.translation.english.default;
                shabad += gurmukhi + "\n" + translation + "\n";
              }
              console.log(shabad);
              setGb(shabad);
            });
        }}
        style={{ width: 150, backgroundColor: "yellow" }}
      >
        <Text>Get Random shabad</Text>
      </TouchableOpacity>
      <Text>-------SUNSET STUFF--------</Text>
      <Text>{formatedAddress}</Text>
      <TextInput
        style={{ width: 150, backgroundColor: "yellow" }}
        placeholder={"Enter Location"}
        value={locationEntry}
        onChangeText={(text) => {
          setLocation(text);
        }}
      />
      <TouchableOpacity
        style={{ width: 100, backgroundColor: "red" }}
        onPress={() => {
          if (locationEntry !== "") {
            let theLoaction = "";
            const lst = locationEntry.split(" ");
            for (const word in lst) {
              theLoaction += lst[word] + "+";
            }

            const theLink = `https://maps.googleapis.com/maps/api/geocode/json?&address=${theLoaction},+CA&key=AIzaSyD5DXTrnTltkZ4w-QFYRSx91sEi9tmj9IE`;
            fetch(theLink)
              .then((res) => res.json())
              .then((resJson) => {
                const locationResult = resJson.results;
                setAddress(locationResult[0].formatted_address);

                const lat = locationResult[0].geometry.location.lat;
                const lng = locationResult[0].geometry.location.lng;
                const sunsetUrl = `https://api.ipgeolocation.io/astronomy?apiKey=4e4db7d128ae4d0993ce50d4cfee8fb7&lat=${lat}&long=${lng}`;
                fetch(sunsetUrl)
                  .then((res) => res.json())
                  .then((resJson) => {
                    // console.log(resJson);
                    setSunTimes(resJson);
                  })
                  .catch((err) => console.log(err));
              })
              .catch((err) => console.lg(err));
          } else {
            console.log("Blank");
          }
        }}
      >
        <Text>Submit</Text>
      </TouchableOpacity>
      <Text>The Sun Will Set At {sunTimes.sunset}</Text>
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
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
