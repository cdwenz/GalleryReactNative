import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Avatar } from "react-native-elements";

const ImageScreen = ({ route }) => {
  const { image } = route.params;
  return (
    <View>
      <Image source={{ uri: image.src.medium, height: 350 }} />
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Avatar
          title={image.photographer
            .split(" ")
            .map((e) => e[0])
            .join("")
            .toUpperCase()}
          containerStyle={{ backgroundColor: "red" }}
          rounded
        />
        <Text>{image.photographer}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
