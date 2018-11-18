(function (exports) {
  function ListIndex() {
    function render(items) {
      return `
        <div class="container">
          <ul id="listNotes" class="list-group list-group-flush">
          ${items}
          </ul>
        </div>
      `
    }
    return {
      render: render
    }
  }
  exports.ListIndex = ListIndex;
})(this);
