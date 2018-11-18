(function(exports) {

  function News() {

    let string = "Hello World";
    let story = ["This is a test story", 1];

    function test() {
      return string;
    }

    function testStory() {
      return story;
    }

    return {
		test: test,
    testStory: testStory
	 }
  }

  exports.News = News;

})(this);
