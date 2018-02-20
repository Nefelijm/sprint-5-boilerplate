$(document).ready(function() {
  const id = localStorage.identifier;
  console.log(id);
  // var request = new XMLHttpRequest();

  // request.open('GET', `https://private-e0e463-foroapi.apiary-mock.com/topics/${localStorage.identifier}`);
  // console.log(`https://private-e0e463-foroapi.apiary-mock.com/topics/${localStorage.identifier}`)
  // request.onreadystatechange = function() {
   
  // };

  // request.send();



  $.ajax({
    url: `https://private-e0e463-foroapi.apiary-mock.com/topics/${id}
    `,
    contentType: 'application/json',
    method: 'GET',
    success: function (response) {
      console.log(response);
    },


    fail: function (request) {
      if (request) {
        alert(request.message);
      }
    }
  });
});

