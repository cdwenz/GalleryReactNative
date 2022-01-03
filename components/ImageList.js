import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import CardImage from "./CardImage";

const ImageList = ({ photos }) => {
  const renderItem = ({ item }) => <CardImage image={item} photos={photos} />;
  return (
    <View>
      <FlatList 
        data={photos} 
        renderItem={renderItem} 
        keyExtractor={(item) => item.id}
        numColumns={2}
    />
    </View>
  );
};



export default ImageList;
