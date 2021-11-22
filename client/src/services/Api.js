import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: 'http://172.17.0.3:8081/'
    })
}