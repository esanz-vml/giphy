import giphyView from './giphyView.js';

class RandomView extends giphyView {
    _errorMessage = 'Error retrieving random image.';
    _parentElement = document.querySelector('.random__container');
    _statusElement = document.querySelector('.random__status');

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
            handler();
        });
    }


}

export default RandomView;