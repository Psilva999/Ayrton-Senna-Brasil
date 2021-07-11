function paraMexe() {
   //Coloco a variável fora e não funciona
   let video = document.querySelector ('#videoSenna')
   let rolaVideo = document.querySelector ('#alteraVideo')
   let audio = document.querySelector ('#alteraSom')

   if (video.paused) {
      video.play()

      rolaVideo.innerHTML = 'Pause'
      video.muted = true
   }

   else if (video.play) {
      video.pause()

      rolaVideo.innerHTML = 'Play'
      audio.innerHTML = '&#x1F508;'
   }
}

function som() {
   let video = document.querySelector ('#videoSenna')
   let rolaVideo = document.querySelector ('#alteraVideo')
   let audio = document.querySelector ('#alteraSom')

   if (video.muted && rolaVideo.innerHTML == 'Pause') {
      video.muted = false

      audio.innerHTML = '&#x1F50A;'
   }
   
   else {
      video.muted = true

      audio.innerHTML = '&#x1F508;'
   }
}