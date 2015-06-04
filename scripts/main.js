(function(){
  'use strict';
  var username = localStorage.getItem('username');

  var chatMessage = "";
  $(document).ready(function(){
    $('.application').prepend(JST['container']());
    route();
    $(document).on('submit', '.login-form',function(event){
      event.preventDefault();
      username = $(this).find('.login-user').val();
      localStorage.setItem('username',username);
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

    setInterval(getChatData,40000);


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

      console.log("here with ", username);
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
        "created_at": new Date(),
        "content": chatMessage
      }
    }).then(getChatData())

  }
  function renderMessages(messages){
    $(".messages").html(JST['messages'](messages));
  }
  function route(){
    switch (window.location.hash){
      case ''://in intital load
            $(".application").html(JST['login']());
            break;
      case '#/chat':
            getChatData();
            renderContainer();
            break;
    }
  }

  function renderContainer(){
    $('.application').html(JST['container']());
    renderSidebar();
  }
  function renderSidebar(){
    $('.sidebar').append(JST['sidebar']())
  }
  function renderChat(chatData){
    $('.main').html(JST['chat'](chatData));

  }

  Handlebars.registerHelper('format-date',function(date){
    var result = moment(date).fromNow();
    return new Handlebars.SafeString(result)
  });


})();
