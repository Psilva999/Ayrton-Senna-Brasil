var mexeNo = {
   //Mostra os links
   compartilha: document.querySelector('.share'),
   container: document.querySelector('.container'),

   //Copiar
   copiarLink: document.querySelector('.copiarLink'),
   linkDoSite: document.querySelector('#link'),
   indicaQueCopiou: document.querySelector('#imagem'),

   //Fechar
   fechaPorFora: document.querySelector('.fechaContainer'),
   fechaLinks: document.querySelector('.fecha')
}

//Abre quando clica
mexeNo.compartilha.addEventListener('click', () => {
   mexeNo.container.style.display = 'block'

   mexeNo.fechaPorFora.style.display = 'block'
})

//Fecha no X
mexeNo.fechaLinks.addEventListener('click', () => {
   mexeNo.container.style.display = 'none'

   mexeNo.fechaPorFora.style.display = 'none'
})

//Fecha clicando fora
mexeNo.fechaPorFora.addEventListener('click', () => {
   mexeNo.container.style.display = 'none'

   mexeNo.fechaPorFora.style.display = 'none'
})

//Copia links
mexeNo.copiarLink.addEventListener('click', () => {

   event.preventDefault()
   mexeNo.linkDoSite.select()

   mexeNo.linkDoSite.setSelectionRange(0, 9999)
   document.execCommand("copy") //Não encontrei um substituto

   mexeNo.indicaQueCopiou.src = 'media/check.svg'

   //Apagar indicador de copy
   var time = 1 * 60
   setInterval(apagarIndicadorDeCopy, 1000)

   function apagarIndicadorDeCopy() {
      var segundos = time % 60

      time--
      if (segundos >= 59) {
         mexeNo.indicaQueCopiou.src = 'media/copy.svg'
      }

   }
})