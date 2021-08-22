var video = document.querySelector('#video')

var setorDo = {
   switchContainer: document.querySelector('.switch-container'),

   player: document.querySelector('#player'),
   mudaSom: document.querySelector('#sound-muted'),

   tempoTotalDoVideo: document.querySelector('.total'),
   controleDaLegenda: document.querySelector('.legenda')
}

var altera = { 
   homenagem: document.querySelector('.senna-numeros'),

   imagemDeFundo: document.querySelector('#senna-chuva'),
   comandosDoVideo: document.querySelector('.player-sound'),

   pause: document.querySelector('.pause'),
   play: document.querySelector('.play'),

   sound: document.querySelector('.sound'),
   muted: document.querySelector('.muted'),

   subtitle: document.querySelector('.conteudo-legenda')
}

setorDo.switchContainer.addEventListener('click', () => {
   var checkbox = document.querySelector('input[type="checkbox"]')

   if (checkbox.checked) {
      altera.imagemDeFundo.style.display = 'none'
      altera.homenagem.style.display = 'none'

      altera.comandosDoVideo.style.display = 'flex'
      video.style.display = 'block'

      video.play()
      altera.play.classList.remove('active')
      altera.pause.classList.add('active')
      
      if (altera.subtitle.classList.contains('active')) {
         altera.subtitle.style.display = 'flex'
      }
   }

   else {
      altera.imagemDeFundo.style.display = 'block'
      altera.homenagem.style.display = 'block'

      altera.comandosDoVideo.style.display = 'none'
      altera.subtitle.style.display = 'none'

      video.style.display = 'none'
      video.pause()
   }
})

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
         segundos: ((video.duration % 60) - 1).toFixed(0)
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

   if (modifica.minutos == 0) {
      if (modifica.segundos <= 4) {
         alteraSubtitle.style.background = ''

         alteraSubtitle.innerHTML = 'Eu apenas amo correr, amo o desafio de vencer alguém.'
      }

      else if (modifica.segundos >= 5 && modifica.segundos <= 7) {

         alteraSubtitle.innerHTML = 'E em muitas ocasiões vencer a mim mesmo.'
      }

      else if (modifica.segundos >= 8 && modifica.segundos <= 10) {

         alteraSubtitle.innerHTML = 'O principal é ser você mesmo.'
      }

      else if (modifica.segundos >= 10 && modifica.segundos <= 12) {

         alteraSubtitle.innerHTML = 'É basicamente aprender sobre si mesmo.'
      }

      else if (modifica.segundos >= 13 && modifica.segundos <= 14) {

         alteraSubtitle.innerHTML = 'Até mesmo se você tentar ser perfeito'
      }

      else if (modifica.segundos >= 15 && modifica.segundos <= 16) {

         alteraSubtitle.innerHTML = 'Ninguém é perfeito'
      }

      else if (modifica.segundos >= 17 && modifica.segundos <= 21) {

         alteraSubtitle.innerHTML = 'Então eu tento aprender com todos os erros que cometo.'
      }

      else if (modifica.segundos >= 22 && modifica.segundos <= 25) {

         alteraSubtitle.innerHTML = 'De cada decisão errada que eu tomo.'
      }

      else if (modifica.segundos >= 26 && modifica.segundos <= 29) {

         alteraSubtitle.innerHTML = 'Para que elas não ocorram novamente.'
      }

      else if (modifica.segundos >= 30 && modifica.segundos <= 31) {
         
         alteraSubtitle.innerHTML = ''
      }

      else if (modifica.segundos >= 32 && modifica.segundos <= 35) {

         alteraSubtitle.innerHTML = 'Minha primeira corrida na pista molhada no Kart foi um desastre.'
      }

      else if (modifica.segundos >= 36 && modifica.segundos <= 38) {

         alteraSubtitle.innerHTML = 'Não passou de uma piada, eu não consegui fazer nada bom.'
      }

      else if (modifica.segundos >= 39 && modifica.segundos <= 41) {

         alteraSubtitle.innerHTML = 'E na pista seca eu era bom!'
      }

      else if (modifica.segundos >= 42 && modifica.segundos <= 47) {

         alteraSubtitle.innerHTML = 'E naquele dia eu aprendi que eu não sabia correr no molhado.'
      }

      else if (modifica.segundos >= 48 && modifica.segundos <= 50) {

         alteraSubtitle.innerHTML = 'A partir dali eu passei a testar e treinar na chuva.'
      }

      else if (modifica.segundos >= 51 && modifica.segundos <= 53) {

         alteraSubtitle.innerHTML = 'Sempre que chovia eu ia pro circuito treinar.'
      }

      else if (modifica.segundos >= 54 && modifica.segundos <= 55) {

         alteraSubtitle.innerHTML = 'E então eu aprendi.'
      }

      else if (modifica.segundos >= 56 && modifica.segundos <= 57) {

         alteraSubtitle.innerHTML = 'Eu acredito em algo'
      }

      else if (modifica.segundos >= 58) {

         alteraSubtitle.innerHTML = 'O homem é capaz de criar e desenvolver máquinas em uma grande extensão.'
      }
   }

   else if (modifica.minutos == 1) {
      if (modifica.segundos >= 6 && modifica.segundos <= 7) {

         alteraSubtitle.innerHTML = 'O homem é capaz de ir a lua.'
      }

      else if (modifica.segundos >= 8 && modifica.segundos <= 10) {

         alteraSubtitle.innerHTML = 'Isso leva tempo.'
      }

      else if (modifica.segundos >= 11 && modifica.segundos <= 13) {

         alteraSubtitle.innerHTML = 'E bastante esforço.'
      }

      else if (modifica.segundos >= 14 && modifica.segundos <= 16) {

         alteraSubtitle.innerHTML = 'Bastante dedicação.'
      }

      else if (modifica.segundos >= 17) {

         alteraSubtitle.innerHTML = 'E muito poder.'
      }
   }
})