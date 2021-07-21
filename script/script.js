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
      audio.innerHTML = 'No sound'
   }
}

function sound() {
   let video = document.querySelector ('#video')
   let rolaVideo = document.querySelector ('#pause-play')
   let audio = document.querySelector ('#som')

   if (video.muted && rolaVideo.innerHTML == 'Pause') {
      video.muted = false

      audio.innerHTML = 'Som'
   }

   else {
      video.muted = true

      audio.innerHTML = 'No sound'
   }
}