$( document ).ready(function() {
  var gamepadSupportAvailable = Modernizr.gamepads;

  console.log( "ready!" );
  $("#gamepad-info").append("<p>ready</p>");


  if (!gamepadSupportAvailable) {
  // It doesn't seem Gamepad API is available – show a message telling
  // the visitor about it.
  alert("GAMEPAD SUPPORT not supported on your browser!")
  } else {
  
      $("#gamepad-info").append("<p>start polling...</p>");
      startPolling(); 

      // stopPolling()
  
  }

});


function button_pressed(type) {
  alert(type);
}

navigator.mediaSession.metadata = new MediaMetadata({
  title: 'Unforgettable',
  artist: 'Nat King Cole',
  album: 'The Ultimate Collection (Remastered)',
  artwork: [
    { src: 'https://dummyimage.com/96x96',   sizes: '96x96',   type: 'image/png' },
    { src: 'https://dummyimage.com/128x128', sizes: '128x128', type: 'image/png' },
    { src: 'https://dummyimage.com/192x192', sizes: '192x192', type: 'image/png' },
    { src: 'https://dummyimage.com/256x256', sizes: '256x256', type: 'image/png' },
    { src: 'https://dummyimage.com/384x384', sizes: '384x384', type: 'image/png' },
    { src: 'https://dummyimage.com/512x512', sizes: '512x512', type: 'image/png' },
  ]
});


  navigator.mediaSession.setActionHandler('play', function() { button_pressed("play") });
  navigator.mediaSession.setActionHandler('pause', function() { button_pressed("pause") });
  navigator.mediaSession.setActionHandler('seekbackward', function() { button_pressed("seekbackward") });
  navigator.mediaSession.setActionHandler('seekforward', function() { button_pressed("seekforward") });
  navigator.mediaSession.setActionHandler('previoustrack', function() { button_pressed("previoustrack") });
  navigator.mediaSession.setActionHandler('nexttrack', function() { button_pressed("nexttrack") });