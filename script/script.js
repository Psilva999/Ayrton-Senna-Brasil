function player() {
   //Coloquei a variável fora e não funcionou
   let video = document.querySelector ('#video')
   let tocaVideo = document.querySelector ('#play-paused')
   let audio = document.querySelector ('#sound')

   if (video.paused) {
      video.play()

      tocaVideo.innerHTML = '&#x23F8;'
      video.muted = true
   }

   else if (video.play) {
      video.pause()

      tocaVideo.innerHTML = '&#xFE0F;'
      audio.innerHTML = ''
   }
}

function sound() {
   let video = document.querySelector ('#video')
   let tocaVideo = document.querySelector ('#play')
   let audio = document.querySelector ('#sound')

   if (video.muted && tocaVideo.innerHTML == '&#x23F8;') {
      video.muted = false

      audio.innerHTML = ''
   }

   else {
      video.muted = true

      audio.innerHTML = ''
   }
}