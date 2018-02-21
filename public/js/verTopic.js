$(document).ready(function() { 
  // Obtener tema individual 
  const url = (`http://examen-laboratoria-sprint-5.herokuapp.com/topics/${localStorage.identifier}`); 
  $.ajax({
    url: url,
    contentType: 'application/json',
    method: 'GET',
    success: function(response) {
      console.log(response);
      $('#informationTopic').append(`<div class="row">
        <div class="col-xs-12">
        <p class="name"> AUTOR DEL TEMA: ${response.author_name}</p>
        <p class="content">INFORMACION: ${response.content}</p>
        </div></div >`); 
    },


    fail: function(request) {
      if (request) {
        alert(request.message);
      }
    }
  });
  // Mostrar respuestas de un tema


  // Crear una nueva respuesta
});

