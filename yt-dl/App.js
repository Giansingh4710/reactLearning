import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  PermissionsAndroid,
  Platform,
} from "react-native";

//import ytdl from "react-native-ytdl";
//import * as FileSystem from "expo-file-system";
//import RNFetchBlob from 'rn-fetch-blob';
//import RNFS from 'react-native-fs';
//var RNFS = require('react-native-fs');

export default function App() {
  const [link, onChangelink] = React.useState(null);

  async function dlLink() {
    let youtubeURL = "http://www.youtube.com/watch?v=04GiqLjRO3A";
    //youtubeURL = 'https://youtu.be/lc1Q65V3YdI';
    const info = await ytdl.getInfo(youtubeURL);
    info["formats"].forEach((val, ind) => {
      //console.log(ind);
      //console.log(val.audioQuality);
    });
    const urls = await ytdl(youtubeURL, {
      quality: "highestaudio",
      begin: "30s",
      Range: { start: 100, end: 500 },
    });
    console.log(urls[0].url);

    function downloadFile() {
      function mkdir(path) {
        RNFS.exists(path).then((dirExists) => {
          if (dirExists) {
            console.log(path + " exists");
          } else {
            RNFS.mkdir(path);
          }
        });
      }

      const requestFilePermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,{
              title: "Cool Photo App Camera Permission",
              message:"YOOO",
              buttonNeutral: "Ask Me Later",
              buttonNegative: "Cancel",
              buttonPositive: "OK",
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            return true;
          } else {
            //alertMsg("Camera permission denied");
            console.log("Camera permission denied");
          }
        } catch (err) {
          console.warn(err);
          //alertMsg(err);
            console.log("Camera permission denied");
        }
        return false;
      };
      
      if (!requestFilePermission()) {
        //alertMsg("Can't read files. Please give permission");
        console.log("Camera permission denied");
      }
      const { config, fs } = RNFetchBlob;
      const { DownloadDir } = fs.dirs; // You can check the available directories in the wiki.

      let DirectoryPath = DownloadDir + "/" + "youtube-dl/";
      mkdir(DirectoryPath);
      let folder=linkSSOSOS;
      DirectoryPath += folder;
      mkdir(DirectoryPath);

      const pathToFile = `${DirectoryPath}/${title}.pdf`;
      RNFS.exists(pathToFile).then((fileExists) => {
        if (fileExists) {
          console.log("File already exists.");
        } else {
          const options = {
            fileCache: true,
            addAndroidDownloads: {
              useDownloadManager: true, // true will use native manager and be shown on notification bar.
              notification: true,
              path: pathToFile,
              description: "Downloading.",
            },
          };
          config(options)
            .fetch("GET", link)
            .then((res) => {
              console.log(res);
              //alertMsg("Downloaded at " + res.data);
              console.log("Downloaded at " + res.data);
              dispatch(addUriPath(folder, title, res.data));
              //console.log('do some magic in here');
            })
            .catch((err) => {
              console.log(err);
              //alertMsg(String(err));
            });
        }
      });
    }
  }

  return (
    <View style={styles.container}>
      <Text>Vahegur</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangelink}
        value={link}
        placeholder="Enter Link"
        onSubmitEditing={(e) => {
          console.log(e.nativeEvent.text);
          dlLink();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
