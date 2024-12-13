import giphyView from './giphyView.js';

class SearchView extends giphyView {
    _errorMessage = 'Error retrieving search image.';
    _parentElement = document.querySelector('.search__container');

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