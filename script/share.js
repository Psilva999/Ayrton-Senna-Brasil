//Esconder o botão de compartilhar caso o menu seja aberto
var ativaNavbar = document.querySelector('.navbar')
var mandaSite = document.querySelector('.share')

ativaNavbar.addEventListener('click', () => {
   if (window.innerHeight < 520) {

      if (ativaNavbar.classList.contains('active')) {
         mandaSite.style.opacity = '0'

         mandaSite.style.cursor = 'auto'
      }
      else {
         mandaSite.style.opacity = '.6'

         mandaSite.style.cursor = 'pointer'
      }
   }

   else {
      mandaSite.style.opacity = '.6'
      mandaSite.style.cursor = 'pointer'
   }
})

//Mostra os links
var compartilha = document.querySelector('.share')
var mostraLinks = document.querySelector('.link')

//Copiar
var copiarLink = document.querySelector('.copiarLink')
var indicaQueCopiou = document.querySelector('.copiado')

//Fechar
var fechaPorFora = document.querySelector('.fechaTudo')
var fechaLinks = document.querySelector('.fecha')

//Abre quando clica
compartilha.addEventListener('click', () => {
   mostraLinks.style.visibility = 'visible'

   fechaPorFora.style.visibility = 'visible'
})

//Fecha no X
fechaLinks.addEventListener('click', () => {
   mostraLinks.style.visibility = 'hidden'

   fechaPorFora.style.visibility = 'hidden'
})

//Fecha clicando fora
fechaPorFora.addEventListener('click', () => {
   mostraLinks.style.visibility = 'hidden'

   fechaPorFora.style.visibility = 'hidden'
})

//Copia links
copiarLink.addEventListener('click', () => {
   var copiaPor = {
      link: document.querySelector('#link'),
      indicaQueCopiou: document.querySelector('#imagem'),
   }

   event.preventDefault()
   copiaPor.link.select()

   copiaPor.link.setSelectionRange(0, 9999)
   document.execCommand("copy") //Não encontrei um substituto

   copiaPor.indicaQueCopiou.src = 'media/check.svg'

   //Apagar indicador de copy
   var time = 1 * 60
   setInterval(apagarIndicadorDeCopy, 1000)

   function apagarIndicadorDeCopy() {
      var segundos = time % 60

      time--
      if (segundos >= 59) {
         copiaPor.indicaQueCopiou.src = 'media/copy.svg'
      }

   }
})