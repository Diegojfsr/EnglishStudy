
// DOM - Documento Object Model

// selecionando elementos
const title = document.getElementById('title') // select pelo title
console.log(title)

// usando o querySelector
const sameTitle = document.querySelector("#title")
console.log(sameTitle)

const texts = docuemntQuerySelctorAll('.text')
console.log(texts)
console.log(texts[1])


//manipulando elementos
text.forEach((text) => {
    console.log(text.textContent.toUpperCase())
})

title.textContent = 'Mudei o texto'

texts[0].innerHtml = '<span>alteramos o HTML deste elemento</span>'
texts[0].style.backgroundColor = 'red'
texts[2].classList.add('myClass')
texts[2].classList.remove('text')
texts[3].remove()


// eventos
const btn = document.querySector("btn")
btn.addEventListener("click", function(){
    console.log("Clicou")
    texts[2].style.color='blue'
})
