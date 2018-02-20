$(document).ready(function() {
  const $forum = $('.forum');  
  const $name = $('#name');
  const $mensage = $('#mensage');
  const $count = $('#countModal');

  $.ajax({
    url: 'http://examen-laboratoria-sprint-5.herokuapp.com/topics',
    contentType: 'application/json',
    method: 'GET',
    success: function(response) {
      console.log(response);

      $.each(response, function(i, obj) {
        // console.log(obj.content);
        // console.log(obj.author_name);
        // console.log(obj.content);
        // console.log(obj.responses_count);
        // console.log(response.id);

        $forum.append(`<div class="row">
        <div class="col-xs-12">
        <p class="name">${obj.author_name}</p>
        <p class="content">${obj.content}</p>
        <p class="count">${obj.responses_count}</p>
        <button class="information" data-target=${obj.id}>VER INFORMACION</button>
        </div></div >`);    

      });

      $('.information').on('click', function () {
      
        let id = ($(this).data('target'));
        console.log(id);
        localStorage.setItem('identifier', id);
        window.location.href = 'verTopic.html'
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
    let nameS = $name.val();
    console.log(name);  
    let mensageS = $mensage.val();  
    let body = {
      'author_name': nameS,
      'content': mensageS,      
    };
    $.ajax({
      url: 'http://examen-laboratoria-sprint-5.herokuapp.com/topics',
      data: body,
      method: 'POST',
      success: function() {    
      },
      fail: function(request) {
        if (request) {
          alert(request.message);
        }
      }

    });
  });

  // Filtrar la busqueda
  $('#search').on('keyup', function() {
    let value = $(this).val().toLowerCase();
    $('.forum div').filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
  // var request = new XMLHttpRequest();
  // request.open('POST', 'http://examen-laboratoria-sprint-5.herokuapp.com/topics');
  // request.setRequestHeader('Content-Type', 'application/json');
  // request.onreadystatechange = function () {
  //   if (this.readyState === 4) {
  //     console.log('Status:', this.status);
  //     console.log('Headers:', this.getAllResponseHeaders());
  //     console.log('Body:', this.responseText);
  //   }
  // };
  // var body = {
  //   'author_name': ':8DSXDF',
  //   'content': 'y le mande a la firebase',
  // };
  // request.send(JSON.stringify(body));
});