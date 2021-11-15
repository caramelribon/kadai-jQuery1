$('#button-gcd').on('click', (e) => {
  var num1 = $('#num1').val(); //割られる数の取得
  var num2 = $('#num2').val(); //割る数の取得
  var rem = 1;
  
  //ユークリッドの互除法
  while(rem != 0){
    rem = num1 % num2;
    num1 = num2;
    num2 = rem;
  }
  
  //結果を<div id="box">内に表示
  $("#box").text(num1);
});