import axios from 'axios'

let base = 'http://127.0.0.1:3000/api'

export default {
    getHelloMessage() {
        return axios.get(base).then(response => {
            return response.data
        })
    }
}

