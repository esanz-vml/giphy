import GiphyService from "../services/giphyService.js";

/**
 * Giphy controller abstraction.
 * @abstract
 * @class
 */
class GiphyController {
    constructor() {
        this._giphyService = new GiphyService();
    }
}

export default GiphyController;