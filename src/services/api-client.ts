import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "54cc66d39f384b8189f81b9d2c1af0cf"
    }
})