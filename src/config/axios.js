import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://panorbit.in'
})


export default instance;