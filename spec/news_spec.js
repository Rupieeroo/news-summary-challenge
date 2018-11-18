let helloWorld;

console.log("--TEST INITIATION--")
console.log('Test should output Hello World');
news = new News();
expect(news.test()).toEqual("Hello World");

console.log("--INDEX--");
console.log('Index should render correctly');
list = new ListIndex();
story = news.testStory();
expect(list.render(story)).toHaveContent('<div class="container">');
