var menu = document.querySelector('#simples-menu')

var clicaNo = {
   navbar: document.querySelector('#btn-mobile'),
   
   compartilha: document.querySelector('.share'),
   copiarLink: document.querySelector('.copiarLink'),

   linkDoSite: document.querySelector('#link'),
   indicaQueCopiou: document.querySelector('#imagem')
}

var modifica = { 
   homenagemSenna: document.querySelector('.senna-numeros'),

   containerDoShare: document.querySelector('.container'),
   share: document.querySelector('.share'),

   player: document.querySelector('.player-sound'),
   subtitle: document.querySelector('.conteudo-legenda'),
 
   switchContainer: document.querySelector('.switch-container')
}

var fecha = {
   menuPorFora: document.querySelector('.fecha-menu'),

   shareComX: document.querySelector('.fecha'),
   sharePorFora: document.querySelector('.fechaContainer')
}

clicaNo.navbar.addEventListener('click', () => {
   var checkbox = document.querySelector('input[type="checkbox"]')

   if (menu.classList.contains('active')) {
      menu.classList.toggle('active')
      fecha.menuPorFora.style.display = 'none'

      modifica.share.style.display = 'flex'
      modifica.switchContainer.style.display = 'block'
      modifica.homenagemSenna.style.display = 'block'

      if (checkbox.checked == true) {
         modifica.player.style.display = 'flex'

         if (modifica.subtitle.classList.contains('active')) {
            modifica.subtitle.style.display = 'flex'
         }
      }
   }

   else {
      menu.classList.toggle('active')
      fecha.menuPorFora.style.display = 'block'

      modifica.share.style.display = 'none'
      modifica.player.style.display = 'none'
      modifica.homenagemSenna.style.display = 'none'

      if (modifica.subtitle.classList.contains('active')) {
         modifica.subtitle.style.display = 'none'
      }
   }
})

fecha.menuPorFora.addEventListener('click', () => {
   var checkbox = document.querySelector('input[type="checkbox"]')

   menu.classList.toggle('active')
   fecha.menuPorFora.style.display = 'none'

   modifica.share.style.display = 'flex'
   modifica.homenagemSenna.style.display = 'block'

   if (checkbox.checked == true) {
      modifica.player.style.display = 'flex'

      if (modifica.subtitle.classList.contains('active')) {
         modifica.subtitle.style.display = 'flex'
      }
   }
})

clicaNo.compartilha.addEventListener('click', () => {
   modifica.containerDoShare.style.display = 'block'
   fecha.sharePorFora.style.display = 'block'
})

clicaNo.copiarLink.addEventListener('click', () => {
   event.preventDefault()
   clicaNo.linkDoSite.select()

   clicaNo.linkDoSite.setSelectionRange(0, 9999)
   document.execCommand("copy") //Não encontrei um substituto

   clicaNo.indicaQueCopiou.src = 'media/check.svg'

   var time = 1 * 60
   setInterval(apagaIndicadorDeCopy, 1000)

   function apagaIndicadorDeCopy() {
      var segundos = time % 60

      time--
      if (segundos >= 59) {
         clicaNo.indicaQueCopiou.src = 'media/copy.svg'
      }
   }
})

fecha.shareComX.addEventListener('click', () => {
   modifica.containerDoShare.style.display = 'none'
   fecha.sharePorFora.style.display = 'none'
})

fecha.sharePorFora.addEventListener('click', () => {
   modifica.containerDoShare.style.display = 'none'

   fecha.sharePorFora.style.display = 'none'
   clicaNo.indicaQueCopiou.src = 'media/copy.svg'
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