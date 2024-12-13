import ImageCollection from "../models/ImageCollection.js";
import SearchView from "../views/searchView.js";
import GiphyController from "./giphyController.js";

class SearchController extends GiphyController {
    constructor() {
        super();
        this._view = new SearchView();
        this._view.addSearchHandler(this.execute.bind(this));
    }

    /**
     * Execute the search
     *
     * @param {string} query
     */
    async execute(query) {
        try {
            this._view.renderSpinner();
            if (!query) {
                this._view.renderError("Please enter a search term.");
                return;
            }
            const response = await this._giphyService.search(query);
            const imageCollection = new ImageCollection(response.data);
            this._view.render(imageCollection);
        } catch (error) {
            console.error("Error getting search GIFs: ", error);
            this._view.renderError("API Error.");
        }
    }
}

export default SearchController;