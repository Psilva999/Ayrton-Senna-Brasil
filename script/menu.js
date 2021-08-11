var controlaMenuPor = {
   burguer: document.querySelector('#simples-menu'),
   clicaFora: document.querySelector('.fechaMenu'),
   lista: document.querySelector('.lista'),

   imagemOriginal: document.querySelector('#imagemIndicando')
}

function toggleMenu(event) {
   if (event.type === 'touchstart') event.preventDefault()
   controlaMenuPor.burguer.classList.toggle('active')

   const active = controlaMenuPor.burguer.classList.contains('active')
   event.currentTarget.setAttribute('aria-expanded', active)

   if (active) {
      event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
   }

   else {
      event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
   }
}
controlaMenuPor.burguer.addEventListener('click', toggleMenu)
controlaMenuPor.burguer.addEventListener('touchstart', toggleMenu)

// var compartilha = document.querySelector('.share')

// controlaMenuPor.burguer.addEventListener('click', () => {
//    if (controlaMenuPor.burguer.classList.contains('active')) {

//       controlaMenuPor.clicaFora.style.display = 'block'
//       controlaMenuPor.lista.style.display = 'flex'

//       compartilha.style.display = 'none'
//    }

//    else {
//       controlaMenuPor.clicaFora.style.display = 'none'
//       controlaMenuPor.lista.style.display = 'none'

//       compartilha.style.display = 'flex'
//       controlaMenuPor.imagemOriginal.src = 'media/copy.svg'
//    }
// })

// controlaMenuPor.clicaFora.addEventListener('click', () => {
//    controlaMenuPor.lista.style.display = 'none'
//    controlaMenuPor.clicaFora.style.display = 'none'

//    controlaMenuPor.burguer.classList.remove('active')
//    compartilha.style.display = 'flex'
//    controlaMenuPor.imagemOriginal.src = 'media/copy.svg'
// })

// var copiarFrase = document.querySelector('.aprendendo')

// copiarFrase.addEventListener('click', function (event) {
//    var copiaMuda = {
//       frase: document.querySelector('#fraseCopiada'),
//       imagem: document.querySelector('#imagemIndicando')
//    }

//    event.preventDefault()

//    copiaMuda.frase.select()
//    copiaMuda.frase.setSelectionRange(0, 9999)
//    document.execCommand("copy") //Não encontrei um substituto

//    copiaMuda.imagem.src = 'media/check.svg'

//    var time = 1 * 60
//    setInterval(apagarIndicadorDeCopy, 1000)

//    function apagarIndicadorDeCopy() {
//       var segundos = time % 60

//       time--
//       if (segundos >= 59) {
//          copiaMuda.imagem.src = 'media/copy.svg'
//       }

//    }
// })
