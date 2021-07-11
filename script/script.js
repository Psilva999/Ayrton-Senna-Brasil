function paraMexe() {
   //Coloco a variável fora e não funciona
   let video = document.querySelector('#videoSenna')

   let rolaVideo = document.querySelector ('#alteraVideo')

   if (video.paused) {
      video.play()

      rolaVideo.innerHTML = '&#x23F8;'
   }

   else if (video.play) {
      video.pause()

      rolaVideo.innerHTML = '&#x25B6;'
   }
}

function som() {
   let video = document.querySelector('#videoSenna')

   let audio = document.querySelector ('#alteraSom')

   if (video.muted) {
      video.muted = false

      audio.innerHTML = '&#x1F3A7;'
   }

   else {
      video.muted = true

      audio.innerHTML = '&#x1F507;'
   }
}