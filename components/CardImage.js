import React from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CardImage = ({ image }) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.cardImage} onPress={()=>navigation.navigate('Image', {image})}>
      <Image
        source={{
          uri: image.src.tiny
            ? image.src.tiny
            : "https://payco.link/img/default/notFound.jpg",
        }}
        style={{ width: "100%", height: 180 }}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  cardImage: {
    display: "flex",
    width: "49.5%",
    margin: 4,
    justifyContent: "space-between",
    backgroundColor: "#2c292c",
    borderWidth: 0,
    borderRadius: 5,
  },
});
export default CardImage;
