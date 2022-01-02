import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

const ImageScreen = ({route}) => {
    const { image } = route.params;
    return (
        <View>
            <Image source={{uri: image.src.medium, height:350}}/>
            <View>
                <Avatar></Avatar>
                <Text>{image.photographer}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ImageScreen
