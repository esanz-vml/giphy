import icons from 'url:../../img/icons.svg';

/**
 * View for Giphy API
 * @abstract
 * @class
 */
class giphyView {
  _errorMessage = 'An error has occurred.';

  _clear() {
    this._parentElement.innerHTML = '';
    this._statusElement.innerHTML = '';

  }

  /**
   * Render a spinner
   */
  renderSpinner() {
    const markup = `
          <div class="spinner">
            <svg>
              <use href="${icons}#icon-hour-glass"></use>
            </svg>
          </div>
        `;
    this._clear();
    this._statusElement.insertAdjacentHTML('afterbegin', markup);
  }

  /**
   * Render an error message
   * @param {string} message - The error message
   */
  renderError(message = this._errorMessage) {
    const markup = `
          <div class="error">
              <svg>
                <use href="${icons}#icon-warning"></use>
              </svg>
            <p>${message}</p>
          </div>
        `;
    this._clear();
    this._statusElement.insertAdjacentHTML('afterbegin', markup);
  }
}

export default giphyView;