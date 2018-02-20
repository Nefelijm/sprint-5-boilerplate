$(document).ready(function() {
  const $forum = $('.forum');
  
  


  $.ajax({
    url: 'http://examen-laboratoria-sprint-5.herokuapp.com/topics',
    contentType: 'application/json',
    method: 'GET',
    success: function(response) {
      console.log(response);

      $.each(response, function(i, obj) {
        console.log(obj.content);
        console.log(obj.author_name);
        console.log(obj.content);        
        $forum.append(`<div class="row"><div class="col-xs-12"><p class="name">${obj.author_name}</p><p class="content">${obj.content}</p></div></div >`);
      });
    },
    fail: function(request) {
      if (request) {
        alert(request.message);
      }
    }
  });


});