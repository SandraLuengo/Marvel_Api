import axios from 'axios';

export default class AppService {

    getCharacterData = name => {
        return axios.get(`http://gateway.marvel.com/v1/public/characters?limit=12&nameStartsWith=${name}&apikey=c9c92e7eec5d218faf004eb8af2c05d3`)
            .then(characterInfo => characterInfo.data.data.results)
            .catch(err => err)
    }
}