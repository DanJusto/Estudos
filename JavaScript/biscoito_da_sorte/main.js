const lucks = ['Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.', 'Não há que ser forte. Há que ser flexível.', 'Uma bela flor é incompleta sem as suas folhas.', 'A paciência na adversidade é sinal de um coração sensível.', 'Você é do tamanho do seu sonho.']
const clickLuck = document.querySelector("#clickLuck")
const btnReset = document.querySelector("#btnReset")
const homepage = document.querySelector(".home")
const luckpage = document.querySelector(".luck")
let randomSelector = Math.floor(Math.random() * 10 / 2)

function toggleScreen() {
    homepage.classList.toggle("hide")
    luckpage.classList.toggle("hide")
}

function selectLuck() {
    luckpage.querySelector("h2").innerText = lucks[randomSelector]
    console.log(randomSelector)
}

function loadLuck() {
    toggleScreen()
    if(homepage.classList.contains("hide")) {
        selectLuck()
    }
}

clickLuck.addEventListener('click', loadLuck)
btnReset.addEventListener('click', toggleScreen)