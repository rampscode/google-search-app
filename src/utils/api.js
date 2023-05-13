import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1"

const params = {
    key : 'AIzaSyAHztns7j4gpJtYZgYRY-ysiA5o2a1gnEM',
    cx : '408b7675a37134e92'
}

export const fetchDataFromApi = async(payload) => {
    const {data} = await axios.get(BASE_URL, {
        params: {...params,...payload}
    } )

    return data
};
