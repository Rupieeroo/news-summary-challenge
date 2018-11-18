(function(exports) {

  function News() {

    let string = "Hello World";

    function test() {
      return string;
    }


    return {
		test: test
	 }
  }

  exports.News = News;

})(this);
