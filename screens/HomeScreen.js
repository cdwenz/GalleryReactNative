import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { getImages } from '../api/pexels';
import  ImageList  from '../components/ImageList';
import { Input, Button } from 'react-native-elements';

const HomeScreen = ({openSearch}) => {

    console.log(openSearch)
    const [images, setImages] = useState([]);
    const [results, setResults] = useState(0);

    const loadImages = async () => {
        const res = await getImages();
        console.log(res.headers);
        await setImages(res.data.photos)
        await setResults(res.data.total_results)
    }

    useEffect(() => {
        loadImages();
    }, [])

    return (
        <>
        {openSearch && 
        <View style={styles.searchSection}>
            <Input 
                style={styles.input}
                placeholder='Search'
                leftIcon={{ type: 'font-awesome', name: 'search', color: '#fff' }}
                inputContainerStyle={styles.seachInput}
            />
            <Button title="Search" />       
        </View>}
        <View style={styles.container}>
            <Text style={styles.results}>{results}</Text>
            <ImageList photos={images}/>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c292c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    results: {
        color: '#fff',
        textAlign: 'right',
        width: '100%',
        paddingTop: 35,
    },
    searchSection:{
        backgroundColor: '#2c292c',
        width: '100%',
        paddingLeft: 10,
        paddingRight: 80,
        flex: 1/5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    seachInput: {
        backgroundColor: 'darkgray',
        borderBottomWidth: 0,
        paddingHorizontal: 4,
    },
    input: {
        color: '#fff',
    },
    buttonSearch: {
        backgroundColor: '#85dbd9',
    }
});

export default HomeScreen
