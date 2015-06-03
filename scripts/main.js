(function(){
  'use strict';
  var username = "";
  var chatMessage = "";
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
    });
    $(document).on('submit',".new-message-form",function(e){
      e.preventDefault();
      postMessage()
    });

  });


  function getChatData(){
    $.ajax({
      url:"http://tiny-lasagna-server.herokuapp.com/collections/messages/",
      type: "GET"

    }).then(function(messages) {
      renderChat();
      return messages
    }).then(function(whatever){
      console.log(whatever);
      return whatever;
    }).then(renderMessages);
  }
  function postMessage(){
    chatMessage = $('.newMessage').val();
    $.ajax({
      url:"http://tiny-lasagna-server.herokuapp.com/collections/messages/",
      type: "POST",
      data: {
        "username": username,
        "created_at": new Date().Date(),
        "message": chatMessage
      }
    })

  }
  function renderMessages(messages){
    $(".messages").html(JST['messages'](messages))
  }
  function route(){
    switch (window.location.hash){
      case ''://in intital load
            $(".application").html(JST['login']());
            break;
      case '#/chat':
            getChatData();
            break;
    }
  }
  function renderChat(chatData){
    $('.application').html(JST['chat'](chatData));
    console.log("user: ",username);
  }

})();
