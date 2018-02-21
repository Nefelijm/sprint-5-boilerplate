$(document).ready(function() {
  // Obtener tema individual 
  const url = (`https://examen-laboratoria-sprint-5.herokuapp.com/topics/${localStorage.identifier}`); 
  $.ajax({
    url: url,
    contentType: 'application/json',
    method: 'GET',
    success: function(response) {
      console.log(response);
      $('#informationTopic').append(`<div class="row">
        <div class="col-xs-12">
        <p class="name"><span class="autorCss"> AUTOR DEL TEMA:</span> ${response.author_name}</p>
        <p class="content"><span class="autorCss"> INFORMACIÓN:</span> ${response.content}</p>
        </div></div >`); 
    },

    fail: function(request) {
      if (request) {
        alert(request.message);
      }
    }
  });

  // Mostrar respuestas de un tema
  const urlRes = `https://examen-laboratoria-sprint-5.herokuapp.com/topics/${localStorage.identifier}/responses`;
  $.ajax({
    url: urlRes,
    contentType: 'application/json',
    method: 'GET',
    success: function(response) {
      console.log(response);   
    },

    fail: function(request) {
      if (request) {
        alert(request.message);
      }
    }
  });

  // Crear una nueva respuesta
  $('#responseTopic').click(function() {
    const $nameResponse = $('#nameResponse');
    const $mensage = $('#mensageResponse');
    let title = $nameResponse.val();
    let mensages = $mensage.val();
    let body = {
      'author_name': title,
      'content': mensages,
      'topic_id': localStorage.identifier,
    };  
    $.ajax({
      url: (`https://examen-laboratoria-sprint-5.herokuapp.com/topics/${localStorage.identifier}/responses`),
      // contentType: 'application/json',
      method: 'POST',
      data: body,
      success: function(response) {
        console.log(response); 
        $('#topic').append(`<div class="answer">
          <p class="content">ID: ${localStorage.identifier}</p>
        <p class="name"> AUTOR DEL TEMA: ${title}</p>
       <p class="content">COMENTARIO: ${mensages}</p>
      
        </div >`);
      },
      fail: function(request) {
        if (request) {
          alert(request.message);
        }
      }
    });
  });
});

