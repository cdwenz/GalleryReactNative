import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";
import * as WebBrowser from "expo-web-browser";
import { Button } from "react-native-elements/dist/buttons/Button";
import ImageList from "../components/ImageList";

const ImageScreen = ({ route }) => {
  const { image } = route.params;

  const handlePress = async () => {
    await WebBrowser.openBrowserAsync(image.photographer_url);
  };
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
        <Button title="Download" buttonStyle={{backgroundColor: '#368497'}}/>
      </View>
      <View>
          <ImageList />
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
