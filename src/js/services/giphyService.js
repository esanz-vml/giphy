import config from "../config";

/**
 * Service for interacting with the Giphy API
 * @see https://developers.giphy.com/docs/api#quick-start-guide
 * @class
 */
class GiphyService {
    /**
     * @constructor
     */
    constructor() {
        this.apiKey = config.GIPHY_API_KEY;
        this.apiUrl = config.GIPHY_API_URL;
        this.limit = config.GIPHY_API_LIMIT;
        this.rating = config.GIPHY_API_RATING;
    }

    /**
     * Search for GIFs
     *
     * @param {string} query - The search query
     * @param {int} offset - The pagination offset
     * @returns {Object} - The search results
     */
    async search(query, offset = 0) {
        const params = `q=${query}&limit=${this.limit}&rating=${this.rating}&offset=${offset}`;
        return this._execute("search", params);
    }

    /**
     * Trending GIFs
     *
     * @param {int} offset - The pagination offset
     * @returns
     */
    async trending(offset = 0) {
        const params = `limit=${this.limit}&rating=${this.rating}&offset=${offset}`;
        return this._execute("trending", params);
    }

    /**
     * Random GIF
     *
     * @returns {Object} - A random GIF
     */
    async random() {
        const params = `rating=${this.rating}`;
        return this._execute("random", params);
    }

    /**
     * Execute a request to the Giphy API
     *
     * @param {string} endpoint - The API endpoint
     * @param {string} params - The query parameters
     * @returns {Object} - The response data
     * @throws {Error} - An error from the API
     */
    async _execute(endpoint, params = undefined) {
        try {
            const url = params
                ? `${this.apiUrl}${endpoint}?api_key=${this.apiKey}&${params}`
                : `${this.apiUrl}${endpoint}?api_key=${this.apiKey}`;
            const response = await Promise.race([fetch(url), this._timeout()]);
            const data = await response.json();

            if (response.ok) {
                return data;
            }
            throw new Error(`${data.meta.status}: ${data.meta.msg}`);
        } catch (error) {
            throw error
        }
    }

    /**
     * Timeout a request
     *
     * @returns {Promise} - A promise that rejects after a timeout
     */
    _timeout() {
        return new Promise((_, reject) => {
            setTimeout(() => {
                reject("Request timed out");
            }, config.GIPHY_API_TIMEOUT);
        });
    }

}

export default GiphyService;