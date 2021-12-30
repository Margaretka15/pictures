import axios from "axios";

export class UnsplashRestService {

    axiosInstance = axios.create({
        baseURL: "https://api.unsplash.com",
        headers: {
            Authorization: 'Client-ID r0lkH_tkZm7uOITE-aw0CAr7FoRKQJJyqKNRCDCz5Go'
        }
    })

    get(term) {
        return this.axiosInstance.get('/search/photos', {
            params: {
                query: term
            }
        })
    }
}
