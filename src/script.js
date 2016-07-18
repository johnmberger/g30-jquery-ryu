$(document).ready(function() {

  $('#ryu').append('<img src="http://i.imgur.com/90Mmdcm.png">')

  $('#ryu > img').hover(function(){
      this.src = 'http://i.imgur.com/nTj3Fxx.gif';
  }, function() {
      this.src = 'http://i.imgur.com/90Mmdcm.png';
  })

  $('#ryu > img').mousedown(function(){
    this.src = 'http://i.imgur.com/Rfj0a80.png';
    $('#ryu').append('<img src="http://i.imgur.com/oTyQRvX.gif" id="hadouken" class="demo-hadouken">');
  })

  $('#ryu > img').mouseup(function(){
    this.src = 'http://i.imgur.com/90Mmdcm.png';
  })
    // animate the Hadouken
  $('#ryu').mousedown(function(){
    $('#hadouken').animate({"margin-left": "600px"
    }, 1000, 'swing', function(){
      this.remove();
    });
  });
});
