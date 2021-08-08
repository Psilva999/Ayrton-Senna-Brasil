var ligaDesligaLegenda = document.querySelector('.legenda')

ligaDesligaLegenda.addEventListener('click', () => {
   var subtitle = document.querySelector('.conteudo-legenda')

   //Retira a legenda
   if (subtitle.classList.contains('active')) {
      ligaDesligaLegenda.style.borderBottom = '1px solid black'

      subtitle.classList.remove('active')
      subtitle.style.display = 'none'
   }

   //Ativa a legenda
   else {
      ligaDesligaLegenda.style.borderBottom = '3px solid black'

      subtitle.classList.add('active')
      subtitle.style.display = 'flex'
   }
})

//Momento em que a legenda aparece
var video = document.querySelector('#video')

video.addEventListener('timeupdate', function() {
   var tempoEm = {
      minutos: Math.floor(video.currentTime / 60,10),
      segundos: Math.floor(video.currentTime % 60)
   }

   var alteraSubtitle = document.querySelector('.conteudo-legenda')

   if (tempoEm.segundos > 20 && tempoEm.segundos <= 21 && tempoEm.minutos == 0) {
      alteraSubtitle.style.background = '#F2F2F2'

      alteraSubtitle.innerHTML = `Eu corro destinado a vencer`
   }

   else if (tempoEm.segundos >= 24 && tempoEm.segundos <= 27) {
      alteraSubtitle.style.background = ''

      alteraSubtitle.innerHTML = ''
   }

   else if (tempoEm.segundos >= 30) {
      alteraSubtitle.style.background = '#F2F2F2'

      alteraSubtitle.innerHTML = `Eu continuo dando o meu melhor`
   }
})