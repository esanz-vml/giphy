import Image from '../models/Image.js';
import RandomView from '../views/randomView.js';
import GiphyController from './giphyController.js';

/**
 * Random controller.
 * @class
 * @extends GiphyController
 */
class RandomController extends GiphyController {
    constructor() {
        super();
        this._view = new RandomView();
        this._view.addRandomHandler(this.execute.bind(this));
    }

    /**
     * Execute the random GIF
     */
    async execute() {
        try {
            this._view.renderSpinner();
            const response = await this._giphyService.random();
            const image = new Image(response.data);
            this._view.render(image);

        } catch (error) {
            console.error("Error getting random GIF: ", error);
            this._view.renderError("API Error.");
        }
    }
}

export default RandomController;