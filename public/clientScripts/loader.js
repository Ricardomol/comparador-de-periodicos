$(function() {
 $.ajax({
    url: "/elpaisloader",
    type: "GET",
    timeout: 5000,
    complete: function() {
      //called when complete
      console.log('process complete');
    },

    success: function(data) {
      console.log(data);
      console.log('process sucess');
      data.shift();
      $('#elpais').append(data);

   },

    error: function() {
      console.log('process error');
    },
  });

 $.ajax({
    url: "/elmundoloader",
    type: "GET",
    timeout: 5000,
    complete: function() {
      //called when complete
      console.log('process complete');
    },

    success: function(data) {
      console.log(data);
      console.log('process sucess');
      data.shift();
      $('#elmundo').append(data);
   },

    error: function() {
      console.log('process error');
    },
  });

 $.ajax({
    url: "/abcloader",
    type: "GET",
    timeout: 5000,
    complete: function() {
      //called when complete
      console.log('process complete');
    },

    success: function(data) {
      console.log(data);
      console.log('process sucess');
      data.shift();
      $('#abc').append(data);

   },

    error: function() {
      console.log('process error');
    },
  });


 $.ajax({
    url: "/larazonloader",
    type: "GET",
    timeout: 5000,
    complete: function() {
      //called when complete
      console.log('process complete');
    },

    success: function(data) {
      console.log(data);
      console.log('process sucess');
      data.shift();
      $('#larazon').append(data);

   },

    error: function() {
      console.log('process error');
    },
  });


 $.ajax({
    url: "/lavanguardialoader",
    type: "GET",
    timeout: 5000,
    complete: function() {
      //called when complete
      console.log('process complete');
    },

    success: function(data) {
      console.log(data);
      console.log('process sucess');
      data.shift();
      $('#lavanguardia').append(data);

   },

    error: function() {
      console.log('process error');
    },
  });



});
