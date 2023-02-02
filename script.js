let mercado = document.querySelector('#mercadoLivre')
let shopee = document.querySelector('#shopee')
let amazom = document.querySelector('#amazom')
let b2w = document.querySelector('#b2w')
let drive = document.querySelector('#drive')


mercado.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log('Mercado')
  })

shopee.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log('Shopee')
  })

amazom.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log('Amazom')
  })

b2w.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log('B2W')
  })

drive.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log('Drive')
  })






