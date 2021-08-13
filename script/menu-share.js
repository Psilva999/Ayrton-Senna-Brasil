var evento = {
   menu: document.querySelector('#simples-menu'),
   burguer: document.querySelector('#btn-mobile'),
   fechaMenuPorFora: document.querySelector('.fecha-menu')
}

evento.menu.addEventListener('click', () => {

   evento.menu.classList.add('active')
   evento.fechaMenuPorFora.style.display = 'block'
})

evento.fechaMenuPorFora.addEventListener('click', () => {

   evento.menu.classList.toggle('active')
   evento.fechaMenuPorFora.style.display = 'none'
})



// function toggleMenu(event) {
//    if (event.type === 'touchstart') event.preventDefault()
//    mexeNo.burguer.classList.toggle('active')

//    const active = mexeNo.burguer.classList.contains('active')
//    event.currentTarget.setAttribute('aria-expanded', active)

//    if (active) {
//       event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
//    }

//    else {
//       event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
//    }
// }
// mexeNo.burguer.addEventListener('click', toggleMenu)
// mexeNo.burguer.addEventListener('touchstart', toggleMenu)

// var compartilha = document.querySelector('.share')

// mexeNo.burguer.addEventListener('click', () => {
//    if (mexeNo.burguer.classList.contains('active')) {

//       mexeNo.clicaFora.style.display = 'block'
//       mexeNo.lista.style.display = 'flex'

//       compartilha.style.display = 'none'
//    }

//    else {
//       mexeNo.clicaFora.style.display = 'none'
//       mexeNo.lista.style.display = 'none'

//       compartilha.style.display = 'flex'
//       mexeNo.imagemOriginal.src = 'media/copy.svg'
//    }
// })

// mexeNo.clicaFora.addEventListener('click', () => {
//    mexeNo.lista.style.display = 'none'
//    mexeNo.clicaFora.style.display = 'none'

//    mexeNo.burguer.classList.remove('active')
//    compartilha.style.display = 'flex'
//    mexeNo.imagemOriginal.src = 'media/copy.svg'
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

// var mexeNo = {
//    compartilha: document.querySelector('.share'),
//    container: document.querySelector('.container'),

//    copiarLink: document.querySelector('.copiarLink'),
//    linkDoSite: document.querySelector('#link'),
//    indicaQueCopiou: document.querySelector('#imagem'),

//    fechaPorFora: document.querySelector('.fechaContainer'),
//    fechaLinks: document.querySelector('.fecha')
// }

// mexeNo.compartilha.addEventListener('click', () => {
//    mexeNo.container.style.display = 'block'

//    mexeNo.fechaPorFora.style.display = 'block'
// })

// mexeNo.fechaLinks.addEventListener('click', () => {
//    mexeNo.container.style.display = 'none'

//    mexeNo.fechaPorFora.style.display = 'none'
// })

// mexeNo.fechaPorFora.addEventListener('click', () => {
//    mexeNo.container.style.display = 'none'
//    mexeNo.fechaPorFora.style.display = 'none'

//    mexeNo.indicaQueCopiou.src = 'media/copy.svg'
// })

// mexeNo.copiarLink.addEventListener('click', () => {

//    event.preventDefault()
//    mexeNo.linkDoSite.select()

//    mexeNo.linkDoSite.setSelectionRange(0, 9999)
//    document.execCommand("copy") //Não encontrei um substituto

//    mexeNo.indicaQueCopiou.src = 'media/check.svg'

//    var time = 1 * 60
//    setInterval(apagarIndicadorDeCopy, 1000)

//    function apagarIndicadorDeCopy() {
//       var segundos = time % 60

//       time--
//       if (segundos >= 59) {
//          mexeNo.indicaQueCopiou.src = 'media/copy.svg'
//       }

//    }
// })