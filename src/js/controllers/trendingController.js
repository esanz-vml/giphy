import ImageCollection from "../models/ImageCollection.js";
import GiphyController from "./giphyController.js";
import TrendingView from "../views/trendingView.js";

class TrendingController extends GiphyController {
    constructor() {
        super();
        this._view = new TrendingView();
    }

    /**
     * Execute the trending GIFs
     */
    async execute() {
        try {
            this._view.renderSpinner();
            const response = await this._giphyService.trending();
            const imageCollection = new ImageCollection(response.data);
            this._view.render(imageCollection);
        } catch (error) {
            console.error("Error getting trending GIFs: ", error);
            this._view.renderError("API Error.");
        }
    }
}

export default TrendingController;