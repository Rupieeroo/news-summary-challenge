let helloWorld;

console.log('Test should output Hello World');
helloWorld = new News();
expect(helloWorld.test()).toHaveContent("Hello World");
