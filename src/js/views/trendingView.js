import giphyView from './giphyView.js';

class TrendingView extends giphyView {
    _errorMessage = 'Error retrieving trending image.';
    _parentElement = document.querySelector('.trending__container');
    render(model) {
        this._clear();
        let html = '';
        model.images.forEach(element => {
            html += `
            <div class="trending__image">
                <img src="${element.image}" alt="${element.title}" title="${element.title}" />
            </div>
            `;
        });
        html += '';
        this._parentElement.insertAdjacentHTML('beforeend', html);
    }
}

export default TrendingView;