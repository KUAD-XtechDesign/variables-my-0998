$(function(){
  
  
  $("#button01").on("click",function(){
    $("#content").text("ここになにか入れたい文章など");
  })

  $("#button02").on("click",function(){
    $("#content").html("<h2>htmlタグも使えるよ</h2>");
  })

  $("#button03").on("click",function(){
    $("#content").append("<p>追加</p>");
  })

  //ここからjavascriptの話

  let txt1 = "こんにちは";
  let txt2 = "いいてんきですね";
  let num1 = 100;
  let num2 = 50;

  $("#button04").on("click",function(){
    $("#content").text(txt1);
  })

  $("#button05").on("click",function(){
    $("#content").text(num1 + num2);
  })
  

});