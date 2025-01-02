import giphyView from './giphyView.js';

/**
 * Search view.
 * @class
 * @extends giphyView
 */
class SearchView extends giphyView {
    _errorMessage = 'Error retrieving search image.';
    _parentElement = document.querySelector('.search__container');
    _statusElement = document.querySelector('.search__status');

    /**
     * Render the searched GIFs.
     * @param {ImageCollection} model - The image collection model
     */
    render(model) {
        this._clear();
        let html = '';
        model.images.forEach(element => {
            html += `
            <div class="search__image">
                <img src="${element.image}" alt="${element.title}" title="${element.title}" />
            </div>
            `;
        });
        html += '';
        this._parentElement.insertAdjacentHTML('beforeend', html);
    }

    /**
     * Add a handler.
     * @param {Function} handler - The handler
     */
    addSearchHandler(handler) {
        document.querySelector(".search__form").addEventListener("submit", function (event) {
            event.preventDefault();
            const query = document.querySelector(".search__input").value;
            handler(query);
        });
        document.querySelector(".search__button").addEventListener("click", function (event) {
            event.preventDefault();
            const query = document.querySelector(".search__input").value;
            handler(query);
        });
    }
}

export default SearchView;