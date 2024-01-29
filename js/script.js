$(function(){

    //ハンバーガーメニュー
    $('.hamburger').click(function(){
        $(this).toggleClass('is-active');
        $('#modal').toggleClass('is-active');
    });

    //アコーデオンメニュー

    $('.question').click(function(){
     $(this).toggleClass('is-open');
     $(this).next().toggleClass('is-show');
    });

    //スクロールトップ
    $(window).scroll(function(){
      if($(this).scrollTop()>100 && window.matchMedia("(max-width:768px)").matches){
        $('#page_top').fadeIn();
      }else{
        $('#page_top').fadeOut();
      }
    })

    $('#page_top').click(function(){
      $('body,html').animate({scrollTop:0},500);
    });

    //スクロールヒント
    window.onload = function(){
      new ScrollHint('.table');
    };

    //form紐づけ

    $('#form').submit(function (event) {
        var formData = $('#form').serialize();
        $.ajax({
          url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeBgUcE24K4uADYyfYWMIJgW8Hp74Ed4EKE_iXS-eQBMpB5eg/formResponse",
          data: formData,
          type: "POST",
          dataType: "xml",
          statusCode: {
            0: function () {
             window.location.href = "thanks.html";
            },
            200: function () {
              $(".false-message").slideDown();
            }
          }
        });
        event.preventDefault();
      });

  

});