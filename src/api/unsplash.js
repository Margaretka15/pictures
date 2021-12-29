import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID r0lkH_tkZm7uOITE-aw0CAr7FoRKQJJyqKNRCDCz5Go'
    }
})