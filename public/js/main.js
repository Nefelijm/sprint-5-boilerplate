$(document).ready(function() {
  const $forum = $('.forum');
  
  const $name = $('#name');
  // const $mensage = $('#mensage');
  const $count = $('#countModal');

  $.ajax({
    url: 'http://examen-laboratoria-sprint-5.herokuapp.com/topics',
    contentType: 'application/json',
    method: 'GET',
    success: function(response) {
      // console.log(response);

      $.each(response, function(i, obj) {
        // console.log(obj.content);
        // console.log(obj.author_name);
        // console.log(obj.content);
        // console.log(obj.responses_count);

        $forum.append(`<div class="row">
        <div class="col-xs-12">
        <p class="name">${obj.author_name}</p>
        <p class="content">${obj.content}</p>
        <p class="count">${obj.responses_count}</p>
        </div></div >`);
      });
    },
    fail: function(request) {
      if (request) {
        alert(request.message);
      }
    }
  });

  const $add = $('#addTheme');
  $add.click(function() {
    const $name = $('#name');
    const $mensage = $('#mensage');
    let name = $name.val();
    console.log(name);  
    let mensage = $mensage.val();  
    let body = {
      'author_name': name,
      'content': mensage,      
    };
    $.ajax({
      url: 'http://examen-laboratoria-sprint-5.herokuapp.com/topics',
      data: body,
      success: function() {    
      },
      fail: function(request) {
        if (request) {
          alert(request.message);
        }
      }

    });
  });
});