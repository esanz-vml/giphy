import GiphyService from "../services/giphyService.js";

class GiphyController {
    constructor() {
        this._giphyService = new GiphyService();
    }
}

export default GiphyController;