import axios from 'axios';

export default class AppService {
    constructor(){

        console.log(process.env.REACT_APP_API_KEY)
    }
    getCharacterData = name => {
        return axios.get(`http://gateway.marvel.com/v1/public/characters?limit=12&nameStartsWith=${name}&apikey=${process.env.REACT_APP_API_KEY}`)
            .then(characterInfo => characterInfo.data.data.results)
            .catch(err => err)
    }
}