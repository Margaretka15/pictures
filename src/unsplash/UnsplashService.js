import {UnsplashRestService} from "./UnsplashRestService";


export class UnsplashService {

    restService = new UnsplashRestService();

    async get(term) {
        return (await this.restService.get(term)).data.results;
    }

    async getFirstN(term, amount) {
        const response = (await this.restService.get(term)).data;
        return response.results.slice(0, amount);
    }
}
