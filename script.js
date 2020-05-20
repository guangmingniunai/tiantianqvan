$(".replyYes ").click(function() {  
   $(".homers-reply").text("甜甜圈这么好吃，再来十个"); 
   $("h1").text("再吃一个？");
   $("h1").css("color","Black");
   $("p").css("color","Blue"); 
   $("body").css({"background-image":"url(http://img3.imgtn.bdimg.com/it/u=819273704,4080494621&fm=26&gp=0.jpg"}); 
});
$(".replyNo").click(function() { 
   $("body").css("background-color","aqua");
   $("h1").text("Doh!");
   $("h1").css("color","red");
   $("img").css("width",260);
   
});