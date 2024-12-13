import giphyView from './giphyView.js';

class RandomView extends giphyView {
    _errorMessage = 'Error retrieving random image.';
    _parentElement = document.querySelector('.random__container');

    render(model) {
        const html = `
            <div class="random__image">
                <img src="${model.image}" alt="${model.title}" title="${model.title}"/>
            </div>
            `;
        this._clear();
        this._parentElement.insertAdjacentHTML('beforeend', html);
    }

    addRandomHandler(handler) {
        document.querySelector(".random__button").addEventListener("click", function (event) {
            console.log("Random requested...")
            handler();
        });
    }


}

export default RandomView;