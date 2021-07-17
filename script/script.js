function player() {
   //Coloquei a variável fora e não funcionou
   let video = document.querySelector ('#video')
   let rolaVideo = document.querySelector ('#pause-play')
   let audio = document.querySelector ('#som')

   if (video.paused) {
      video.play()

      rolaVideo.innerHTML = 'Pause'
      video.muted = true
   }

   else if (video.play) {
      video.pause()

      rolaVideo.innerHTML = 'Play'
      audio.innerHTML = '<img src="https://img.icons8.com/material-rounded/18/000000/mute.png"/>'
   }
}

function sound() {
   let video = document.querySelector ('#video')
   let rolaVideo = document.querySelector ('#pause-play')
   let audio = document.querySelector ('#som')

   if (video.muted && rolaVideo.innerHTML == 'Pause') {
      video.muted = false

      audio.innerHTML = '<img src="https://img.icons8.com/material-rounded/18/000000/room-sound.png"/>'
   }

   else {
      video.muted = true

      audio.innerHTML = '<img src="https://img.icons8.com/material-rounded/18/000000/mute.png"/>'
   }
}