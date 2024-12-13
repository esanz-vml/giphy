import Image from "./Image";

/**
 * Image collection model
 */
class ImageCollection {
    constructor(data) {
        this._images = data.map(image => new Image(image));
    }

    /**
     * Get the images
     * @returns {Image[]}
     */
    get images() {
        return this._images;
    }
}

export default ImageCollection;