import axios from 'axios';
import { processColor } from 'react-native';


export const getImages = async (query = 'react  ') => 
    await axios.get(`https://api.pexels.com/v1/search?query=${query}`, {
        headers: {
            Authorization: '563492ad6f917000010000015daf5a5b7d8c4997bbbd852237296351'
    }})
