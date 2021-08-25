const escreve = {
   homenagem: document.querySelector('.homenagem'),

   titulos: document.querySelector('.titulos'),
   poles: document.querySelector('.poles'),
   vitorias: document.querySelector('.vitorias')
}

var time = {
   titulos: 1 * 60,
   poles: 1 * 60,
   vitorias: 1 * 60
}

function typeHomenagem(conteudoIntrodutorio) {
   const textHomenagem = conteudoIntrodutorio.innerHTML.split('')

   conteudoIntrodutorio.innerHTML = ''

   textHomenagem.forEach((letrasHomenagem, h) => {
      setTimeout(() => conteudoIntrodutorio.innerHTML += letrasHomenagem, 85 * h)
   })
}
typeHomenagem(escreve.homenagem)

setInterval(mostraTitulos, 1000)
function mostraTitulos() {

   var segundoDoTitulo = time.titulos % 60
   time.titulos--
   
   if (segundoDoTitulo == 57) {
      escreve.titulos.innerHTML = '3 títulos mundiais'

      function typeTitulos(conteudoDoTitulo) {
         const textTitulos = conteudoDoTitulo.innerHTML.split('')

         conteudoDoTitulo.innerHTML = ''

         textTitulos.forEach((letraTitulo, t) => {

            setTimeout(() => conteudoDoTitulo.innerHTML += letraTitulo, 80 * t)
         })
      }

      typeTitulos(escreve.titulos) 
   }

   if (segundoDoTitulo == 56) {
      escreve.titulos.style.background = '#066E31'
   }
}

setInterval(mostraPoles, 1000)
function mostraPoles() {

   var segundoDasPoles = time.poles % 60
   time.poles--
   
   if (segundoDasPoles == 56) {
      escreve.poles.innerHTML = '65 pole positions'

      function typePoles(conteudoDasPoles) {
         const textPoles = conteudoDasPoles.innerHTML.split('')

         conteudoDasPoles.innerHTML = ''

         textPoles.forEach((letrasPoles, p) => {

            setTimeout(() => conteudoDasPoles.innerHTML += letrasPoles, 85 * p)
         })
      }

      typePoles(escreve.poles) 
   }

   if (segundoDasPoles == 55) {
      escreve.poles.style.background = 'black'
   }
}

setInterval(mostraVitorias, 1000)
function mostraVitorias() {

   var segundoDasVitorias = time.vitorias % 60
   time.vitorias--

   if (segundoDasVitorias == 55) {
      escreve.vitorias.innerHTML = '41 vitórias'

      function typeVitorias(conteudoDasVitorias) {
         const textVitorias = conteudoDasVitorias.innerHTML.split('')

         conteudoDasVitorias.innerHTML = ''

         textVitorias.forEach((letrasVitorias, v) => {

            setTimeout(() => conteudoDasVitorias.innerHTML += letrasVitorias, 85 * v)
         })
      }

      typeVitorias(escreve.vitorias)
   }

   if (segundoDasVitorias == 54) {
      escreve.vitorias.style.color = 'black'

      escreve.vitorias.style.background = '#FDE602'
   }
}