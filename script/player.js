//Algoritmo do player
var mudaPlayer = document.querySelector ('#player')
var pause = document.querySelector ('.pause')
var play = document.querySelector ('.play')

var mudaSom = document.querySelector ('#sound-muted')
var sound = document.querySelector ('.sound')
var muted = document.querySelector ('.muted')

var video = document.querySelector ('#video')

//Pause e play
mudaPlayer.addEventListener('click', () => {

   if (play.classList.contains('active')) {
      video.play()

      play.classList.remove('active')
      pause.classList.add('active')
   }

   else if (pause.classList.contains('active')) {

      video.pause()
      pause.classList.remove('active')
      play.classList.add('active')

      video.muted = true
      sound.classList.remove('active')
      muted.classList.add('active')
   }
})

//Áudio
mudaSom.addEventListener('click', () => {

   if (muted.classList.contains('active') & video.muted & pause.classList.contains('active')) {

      video.muted = false

      muted.classList.remove('active')
      sound.classList.add('active')
   }

   else {
      video.muted = true

      sound.classList.remove('active')
      muted.classList.add('active')
   }
})

//Momento em que o vídeo está
var mostraTempoDoVideo = document.querySelector('.contando')
var mostraTempoTotalVideo = document.querySelector('.total')

   video.addEventListener('timeupdate', function () {

      var mudaMinutos = Math.floor(video.currentTime / 60,10)
      var mudaSegundos = Math.floor(video.currentTime % 60)
      
      if (mudaSegundos >= 0 && mudaSegundos < 10) {
         mostraTempoDoVideo.innerHTML = `0${mudaMinutos}:0${mudaSegundos}`
      }

      else {
         mostraTempoDoVideo.innerHTML = `0${mudaMinutos}:${mudaSegundos}`
      }
   })

//Duração total do vídeo
var i = setInterval(function() {
   if (video.readyState > 0) {
      var minutos = parseInt(video.duration / 60, 10)
      var segundos = (video.duration % 60).toFixed(0)

      mostraTempoTotalVideo.innerHTML = `0${minutos}:${segundos}`
      clearInterval(i)
   }
}, 200)