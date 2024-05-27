import icons from "url:../../img/icons.svg";
import View from "./View";
class PaginationView extends View {
  _parentElement = document.querySelector(".pagination");
  _errorMessage = `No recipes found for your query! Please try again 😉`;
  _message = "";

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.result.length / this._data.resultsPerPage
    );
    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return this._generateMarkupNextButton(curPage);
    }
    // Last page
    if (curPage === numPages && numPages > 1) {
      return this._generateMarkupPrevButton(curPage);
    }
    // Other page
    if (curPage < numPages) {
      return [
        this._generateMarkupPrevButton(curPage),
        this._generateMarkupNextButton(curPage),
      ].join("");
    }
    // Page 1, and there are No other pages
    return "";
  }

  _generateMarkupNextButton(page) {
    return `
    <button data-goto="${page + 1}" class="btn--inline pagination__btn--next">
      <span>Page ${page + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>
`;
  }
  _generateMarkupPrevButton(page) {
    return `
       <button data-goto="${
         page - 1
       }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${page - 1}</span>
          </button>
    `;
  }

  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--inline");
      if (!btn) return;
      const gotoPage = Number(btn.dataset.goto);
      handler(gotoPage);
    });
  }
}

export default new PaginationView();
