import axios from 'axios';


export const getImages = async (query = 'programming') => 

    await axios.get(`https://api.pexels.com/v1/search?query=${query}&per_page=40`, {
        headers: {
            Authorization: '563492ad6f917000010000015daf5a5b7d8c4997bbbd852237296351'
    }})
