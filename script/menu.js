// Animação do navbar
class navbar {
   constructor(barras, listas, ligados) {
      this.barras = document.querySelector(barras)
      this.listas = document.querySelector(listas)
      this.ligados = document.querySelectorAll(ligados)

      this.activeClass = 'active'
      this.handleClick = this.handleClick.bind(this)
   }

   animados() {
      this.ligados.forEach((link, index) => {
         link.style.animation
            ? (link.style.animation = '')
            : (link.style.animation = `navLinkFade 0.7s ease forwards ${index / 7 + 0.5}s`)
      })
   }

   handleClick() {
      this.listas.classList.toggle(this.activeClass)
      this.barras.classList.toggle(this.activeClass)

      this.animados()
   }

   addClickEvent() {
      this.barras.addEventListener('click', this.handleClick)
   }

   init() {
      if (this.barras) {
         this.addClickEvent()
      }

      return this
   }
}

const responsivo = new navbar(
   '.navbar',
   '.lista',
   '.lista li')

responsivo.init()


//Fechar o menu quando clicar do lado de fora
var controlaMenuPor = {
   navbar: document.querySelector('.navbar'),
   clicaFora: document.querySelector('.fechaMenu'),
   lista: document.querySelector('.lista')
}

//Deixa o botão de compartilhar escondido quando o navbar for ativado
var compartilha = document.querySelector('.share')

controlaMenuPor.navbar.addEventListener('click', () => {
   if (controlaMenuPor.navbar.classList.contains('active')) {

      controlaMenuPor.clicaFora.style.display = 'block'
      controlaMenuPor.lista.style.display = 'flex'

      compartilha.style.display = 'none'
   }

   else {
      controlaMenuPor.clicaFora.style.display = 'none'
      controlaMenuPor.lista.style.display = 'none'

      compartilha.style.display = 'flex'
   }
})

controlaMenuPor.clicaFora.addEventListener('click', () => {
   controlaMenuPor.lista.style.display = 'none'
   controlaMenuPor.clicaFora.style.display = 'none'

   controlaMenuPor.navbar.classList.remove('active')
   compartilha.style.display = 'flex'
})
