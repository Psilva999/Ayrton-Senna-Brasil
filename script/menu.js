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