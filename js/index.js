//evento criado para o menu hamburguer poder ativar o elemento .nav__links
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger')
    const navLinks = document.querySelector('.nav__links')

    if (navLinks) {
        navLinks.classList.remove('active')
    }

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', (e) => {
            e.preventDefault()
            navLinks.classList.toggle('active')
        })
    }
})

//slides do main__banner
let count = 1
document.getElementById("radio1").checked = true

setInterval(() => {
    nextImage()
}, 2000)

const nextImage = () => {
    count++
    if (count > 3) {
        count = 1
    }
    document.getElementById("radio" + count).checked = true
}

//colocando mensagem de boas vindas no nav através do button 
const btn = document.querySelector("button").onclick = () => welcome()
const userName = document.querySelector(".userName")

userName.textContent = ""

//obtendo o nome do usuário
const getUserName = () => prompt("What's your name?")
//salvando o nome do usuário no localStorage do navegador
const saveName = (name) => localStorage.setItem('name', name)
const createWelcomeMessage = (name) => `Welcome, ${name}`
//atualizando o nome do usuário já inserido anteriormente
const updateUserName = (message) => (userName.textContent = message)

const welcome = () => {
    const name = getUserName()
    if (name) {
        saveName(name)
        updateUserName(createWelcomeMessage(name))
    }
}

// criando a função para o carregamento da section news__section
const newsSection = () => {
    let section = document.querySelector('.news__section')
    let container = section.querySelector('.container')
    container.innerHTML = `
                <div class="news__title">
                <h2>Last updated albums</h2>
            </div>
            <div class="news__menu">
                <div class="news__photo">
                    <img src="assets/sections/merino-celebrating-brentford.jpg"
                        alt="Mikel Merino celebrating against Brentford - Premier League" loading="lazy">
                </div>
                <div class="news__albums">
                    <div class="album__name">
                        <a href="">
                            <span>Premier League</span>
                            <p>01/01 at BRENTFORD</p>
                        </a>
                    </div>
                    <div class="album__name">
                        <a href="">
                            <span>Premier League</span>
                            <p>12/27 IPSWITCH TOWN</p>
                        </a>
                    </div>
                    <div class="album__name">
                        <a href="">
                            <span>Premier League</span>
                            <p>12/21 at CRYSTAL PALACE</p>
                        </a>
                    </div>
                    <div class="album__name">
                        <a href="">
                            <span>Carabao Cup</span>
                            <p>12/18 CRYSTAL PALACE</p>
                        </a>
                    </div>
                    <div class="album__name">
                        <a href="">
                            <span>Premier League</span>
                            <p>12/14 EVERTON</p>
                        </a>
                    </div>
                    <div class="album__name">
                        <a href="">
                            <span>Champions League</span>
                            <p>12/11 MONACO</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `
}

//ativação da função para carregamento da section news__section
newsSection()