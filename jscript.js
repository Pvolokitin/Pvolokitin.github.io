var body = $("body");

$(document).ready(function () {


  //Массив
  var images = ["https://images.unsplash.com/photo-1583700788598-411343f6c2a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", "https://images.unsplash.com/photo-1583770538997-10b4a9f1b76e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80", "https://images.unsplash.com/photo-1583784932052-e2e31867d9ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"];
  //Номер текущей картинки
  var indexImg = 0



  //Штука которая исполняет код через определенный период времени
  setInterval(function () {
    //Меняем фон
    body.css({
  'background' : 'url(' + images[indexImg] + ')',
  'background-size' : 'cover',
  'background-repeat' : 'no-repeat'

});
    //прибавляем 1 к номеру
    indexImg++
    //Возвращаем к 0 если превысили массив
    if (indexImg == images.length) indexImg = 0;
    console.log("image: " + indexImg + " (" + images[indexImg] + ")");
  }, 4000);

});