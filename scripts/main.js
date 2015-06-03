(function(){
  'use strict';
  var username = "";

  $(document).ready(function(){
    route();
    $(document).on('submit', '.login-form',function(event){
      event.preventDefault();
      username = $(this).find('.login-user').val();
      window.location.hash = '/chat';
    });
    $(window).on('hashchange',function(event){
      event.preventDefault();
      route();
    })

  });

  function route(){
    switch (window.location.hash){
      case ''://in intital load
            $(".application").html(JST['login']());
            break;
      case '#/chat':
            $('.application').html(JST['chat']());
            break;
    }
  }

})();
