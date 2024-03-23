import axios, { AxiosInstance } from "axios";


class ApiService {

    public api: AxiosInstance;

    constructor() {

        this.api = axios.create({
            baseURL: 'http://localhost:3000'
        })

    }

    async getBot() {

        return await this.api.get('/get-bot')

    }

}

export const api = new ApiService()
