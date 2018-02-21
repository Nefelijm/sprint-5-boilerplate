$(document).ready(function() {
  const $forum = $('.forum');  
  const $name = $('#name');
  const $mensage = $('#mensage');
  const $count = $('#countModal');

  $.ajax({
    url: 'https://examen-laboratoria-sprint-5.herokuapp.com/topics',
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
        $forum.append(`<div class="row ">
        <div class="col-xs-12 col-md-8 col-md-offset-2 styleContainer">
        <p class="name">NOMBRE: ${obj.author_name}</p>
        <p class="content">INFORMACIÓN: ${obj.content}</p>
        <p class="count">Nro. de RESPUESTA: ${obj.responses_count}</p>
        <div class="col-md-6 col-md-offset-3">
        <button class="information btn btn-default" data-target=${response[i].id}>VER INFORMACIÓN</button>
        </div>
        </div></div >`); 
     });

      $('.information').on('click', function() {      
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
   
  // POST
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
      url: 'https://examen-laboratoria-sprint-5.herokuapp.com/topics',
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
});