import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";
import * as WebBrowser from "expo-web-browser";
import { Button } from "react-native-elements/dist/buttons/Button";
import ImageList from "../components/ImageList";
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';


const ImageScreen = ({ route }) => {
  const { image, photos } = route.params;

  const handlePress = async () => {
    await WebBrowser.openBrowserAsync(image.photographer_url);
  };

  const downloadFile = async() => {
      try{
          let fileUri = FileSystem.documentDirectory + image.id + ".jpg";
          const {uri} = await FileSystem.downloadAsync(image.src.large2x, fileUri);
          saveFile(uri);
      }catch(error){
          console.error(error)
      }
  }
  const saveFile = async (fileUri) =>{
    const {status} = await MediaLibrary.requestPermissionsAsync();
    if(status === 'granted'){
      const asset = await MediaLibrary.createAssetAsync(fileUri);
      await MediaLibrary.createAlbumAsync('Download', asset, false);
    }   
  }
  const handleDownload = async () => {
    downloadFile();
  }
  
  return (
    <View style={styles.imageDetail}>
      <Image source={{ uri: image.src.medium, height: 350 }} />
      <View
        style={{
          display: "flex",
          paddingVertical: 18,
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar
            title={image.photographer
              .split(" ")
              .map((e) => e[0])
              .join("")
              .toUpperCase()}
            containerStyle={{ backgroundColor: "red" }}
            rounded
          />
          <TouchableOpacity onPress={handlePress}>
            <Text style={styles.textPhotographer}>{image.photographer}</Text>
          </TouchableOpacity>
        </View>
        <Button title="Download" buttonStyle={{backgroundColor: '#368497'}} onPress={handleDownload}/>
      </View>
      <View>
          <ImageList photos={photos}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageDetail: {
    backgroundColor: "#2c292c",
    flex: 1,
    flexDirection: "column",
    padding: 10,
  },
  textPhotographer: {
    color: "#fff",
    fontWeight: "bold",
    marginStart: 5,
    fontSize: 18,
  },
});

export default ImageScreen;
