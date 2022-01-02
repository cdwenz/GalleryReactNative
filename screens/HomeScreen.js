import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { getImages } from '../api/pexels'
import  ImageList  from '../components/ImageList'
import axios from 'axios';

const HomeScreen = () => {

    const [images, setImages] = useState([])

    const loadImages = async () => {
        const res = await getImages();
        console.log(res.headers);
        setImages(res.data.photos)
    }

    useEffect(() => {
        loadImages();
    }, [])

    return (
        <View>
            <ImageList photos={images}/>
        </View>
    )
}

export default HomeScreen
