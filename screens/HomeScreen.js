import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { getImages } from '../api/pexels';
import  ImageList  from '../components/ImageList';
import { Input, Button } from 'react-native-elements';

const HomeScreen = ({openSearch}) => {

    const [images, setImages] = useState([]);
    const [results, setResults] = useState(0);
    const [text, setText] = useState('');

    const loadImages = async (value) => {
        const res = await getImages(value);
        // console.log(res.headers);
        await setImages(res.data.photos)
        await setResults(res.data.total_results)
    }

    useEffect(() => {
        loadImages();
    }, [])

    const handleSearch = async () => {
        await loadImages(text);
    }
    return (
        <>
        {openSearch && 
        <View style={styles.searchSection}>
            <Input 
                style={styles.input}
                placeholder='Search'
                leftIcon={{ type: 'font-awesome', name: 'search', color: '#fff' }}
                leftIconContainerStyle={styles.iconLeftSearch}
                inputContainerStyle={styles.seachInput}
                onChangeText={(value) => setText(value)}
                value={text}
            />
            <Button title="Search" buttonStyle={styles.buttonSearch} onPress={handleSearch}/>       
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
        backgroundColor: '#122c32',
        borderBottomWidth: 0,
        paddingHorizontal: 4,
    },
    input: {
        color: '#fff',
    },
    iconLeftSearch:{
        paddingStart: 10,
        marginRight: 7,
    },
    buttonSearch: {
        backgroundColor: '#368497',
        marginBottom: 27,
    }
});

export default HomeScreen
