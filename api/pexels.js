import axios from 'axios';
import { processColor } from 'react-native';


export const getImages = async (query = 'programming') => 
    await axios.get(`https://api.pexels.com/v1/search?query=${query}&per_page=40`, {
        headers: {
            Authorization: process.env['API_KEY']
    }})
