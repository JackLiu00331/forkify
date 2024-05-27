import icons from "url:../../img/icons.svg";
import previewView from "./previewView";
import View from "./View";
class BookmarksView extends View {
  _parentElement = document.querySelector(".bookmarks__list");
  _data;
  _errorMessage = `No bookmarks yet. Find a nice recipe and bookmark it 😉`;
  _message = "";

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  _generateMarkup() {
    return this._data
      .map((bookmarks) => previewView.render(bookmarks, false))
      .join("");
  }
}

export default new BookmarksView();
