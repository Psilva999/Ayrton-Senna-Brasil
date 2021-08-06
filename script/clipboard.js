var copiarFrase = document.querySelector('.aprendendo')

copiarFrase.addEventListener('click', function (event) {
   var copiaMuda = {
      frase: document.querySelector('#fraseCopiada'),
      imagem: document.querySelector('#imagemIndicando')
   }

   event.preventDefault()

   copiaMuda.frase.select()
   copiaMuda.frase.setSelectionRange(0, 9999)
   document.execCommand("copy") //Não encontrei um substituto

   copiaMuda.imagem.src = 'media/check.svg'

   //Apagar indicador de copy
   var time = 0 * 60
   setInterval(apagarIndicadorDeCopy, 1000)

   function apagarIndicadorDeCopy() {
      var segundos = time % 60

      time++

      if (segundos == 1) {
         copiaMuda.imagem.src = 'media/copy.svg'
      }
   }
})