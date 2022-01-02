import axios from 'axios';
import { processColor } from 'react-native';

export const getImages = async (query = 'space') => {
    await axios.get(`https://api.pexels.com/v1/search?query=${query}`, {
        headers: {
            Authorization: process.env.API_KEY
    }})
}