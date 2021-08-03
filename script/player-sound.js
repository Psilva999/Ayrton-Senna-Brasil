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

//Tempo
var mostraTempoDoVideo = document.querySelector('.contando')
let time = 0 * 60

setInterval(updateCount ,1000)
function updateCount() {
   const contaMinutos = Math.floor(time / 60)
   let contaSegundos = Math.floor(time % 60)

   if (pause.classList.contains('active')) {
      let totalMinutos = 6
      let totalSegundos = 38

      if (contaSegundos >= 0 && contaSegundos <= 9) {
         mostraTempoDoVideo.innerHTML = `0${contaMinutos}:0${contaSegundos}`
      }

      else if (contaSegundos >= 10 && contaSegundos <= 59) {
         mostraTempoDoVideo.innerHTML = `0${contaMinutos}:${contaSegundos}`
      }

      else if (contaSegundos == totalSegundos && contaMinutos == totalMinutos) {

         contaSegundos -= totalSegundos
         contaMinutos -= totalMinutos

         time++
      }

      time++
   }
}