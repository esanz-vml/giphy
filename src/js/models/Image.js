/**
 * Image model
 */
class Image {
    constructor(data) {
        this._id = data.id ?? "";
        this._title = data.title ?? "";
        this._url = data.url ?? "";
        this._image = data.images.original.url ?? "";
    }

    /**
     * Get the image ID
     * @returns {string}
     */
    get id() {
        return this._id;
    }

    /**
     * Get the image title
     * @returns {string}
     */
    get title() {
        return this._title;
    }

    /**
     * Get the image URL
     * @returns {string}
     */
    get url() {
        return this._url;
    }

    /**
     * Get the image source
     * @returns {string}
     */
    get image() {
        return this._image;
    }
}

export default Image;