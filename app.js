fetch('https://content.guardianapis.com/search?api-key=187b19a7-731e-4de8-bac8-7eebba1306c2');
  .then(response => response.json())
  .

window.addEventListener("load", function() {

  news = new News();

  document.getElementById("app").innerHTML = IndexPage().render(news.listIndex());
}, false)
