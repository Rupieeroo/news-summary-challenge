(function (exports) {
  function IndexPage() {
    function render(items) {
      return `
      ${ListIndex().render(items)}
      `
    }
    return {
      render: render
    }
  }
  exports.IndexPage = IndexPage;
})(this);
