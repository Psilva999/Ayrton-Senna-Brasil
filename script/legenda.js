var ligaDesligaLegenda = document.querySelector('.legenda')

ligaDesligaLegenda.addEventListener('click', () => {
   var subtitle = document.querySelector('.conteudo-legenda')

   //Retira a legenda
   if (subtitle.classList.contains('active')) {
      ligaDesligaLegenda.style.opacity = '.8'

      subtitle.classList.remove('active')
      subtitle.style.display = 'none'
   }

   //Ativa a legenda
   else {
      ligaDesligaLegenda.style.opacity = '1'

      subtitle.classList.add('active')
      subtitle.style.display = 'flex'
   }
})