var video = document.querySelector('#video')

var setorDo = {
   player: document.querySelector('#player'),
   mudaSom: document.querySelector('#sound-muted'),

   tempoTotalDoVideo: document.querySelector('.total'),
   controleDaLegenda: document.querySelector('.legenda')
}

var altera = {
   pause: document.querySelector('.pause'),
   play: document.querySelector('.play'),

   sound: document.querySelector('.sound'),
   muted: document.querySelector('.muted'),
}

setorDo.player.addEventListener('click', () => {
   if (altera.play.classList.contains('active')) {
      video.play()

      altera.play.classList.remove('active')
      altera.pause.classList.add('active')
   }

   else if (altera.pause.classList.contains('active')) {
      video.pause()
      altera.pause.classList.remove('active')
      altera.play.classList.add('active')

      video.muted = true
      altera.sound.classList.remove('active')
      altera.muted.classList.add('active')
   }
})

setorDo.mudaSom.addEventListener('click', () => {
   if (altera.muted.classList.contains('active') && altera.pause.classList.contains('active') && video.muted) {
      video.muted = false

      altera.muted.classList.remove('active')
      altera.sound.classList.add('active')
   }

   else {
      video.muted = true

      altera.sound.classList.remove('active')
      altera.muted.classList.add('active')
   }
})

video.addEventListener('timeupdate', () => {
   var mostra = {
      tempoDoVideo: document.querySelector('.contando'),

      mudaMinutos: Math.floor(video.currentTime / 60, 10),
      mudaSegundos: Math.floor(video.currentTime % 60)
   }

   if (mostra.mudaSegundos >= 0 && mostra.mudaSegundos < 10) {
      mostra.tempoDoVideo.innerHTML = `0${mostra.mudaMinutos}:0${mostra.mudaSegundos}`
   }

   else {
      mostra.tempoDoVideo.innerHTML = `0${mostra.mudaMinutos}:${mostra.mudaSegundos}`
   }
})

var i = setInterval(function() {
   if (video.readyState > 0) {
      var tempoEm = {
         minutos: parseInt(video.duration / 60, 10),
         segundos: (video.duration % 60).toFixed(0)
      }

      setorDo.tempoTotalDoVideo.innerHTML = `0${tempoEm.minutos}:${tempoEm.segundos}`
      clearInterval(i)
   }
}, 200)

setorDo.controleDaLegenda.addEventListener('click', () => {
   var ligaDesliga = document.querySelector('.legenda')
   var conteudo = document.querySelector('.conteudo-legenda')

   if (conteudo.classList.contains('active')) {
      ligaDesliga.style.borderBottom = '1px solid black'

      conteudo.classList.remove('active')
      conteudo.style.display = 'none'
   }

   else {
      ligaDesliga.style.borderBottom = '3px solid black'

      conteudo.classList.add('active')
      conteudo.style.display = 'flex'
   }
})

video.addEventListener('timeupdate', () => { 
   var modifica = {
      minutos: Math.floor(video.currentTime / 60, 10),
      segundos: Math.floor(video.currentTime % 60)
   }

   var alteraSubtitle= document.querySelector('.conteudo-legenda')

   if (modifica.segundos > 20 && modifica.segundos <= 21 && modifica.minutos == 0) {
      alteraSubtitle.style.background = '#F2F2F2'

      alteraSubtitle.innerHTML = 'Eu corro destinado a vencer'
   }

   else if (modifica.segundos >= 24 && modifica.segundos <= 27) {
      alteraSubtitle.style.background = ''

      alteraSubtitle.innerHTML = ''
   }

   else if (modifica.segundos >= 30) {
      alteraSubtitle.style.background = '#F2F2F2'

      alteraSubtitle.innerHTML = 'Eu continuo dando o meu melhor'
   }
})