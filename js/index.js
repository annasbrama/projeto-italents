//mudando imagens do main por click
const images = document.querySelectorAll(".main__banner img")

const imagesClick = {
    "assets/saka-main.JPG": "assets/saka-click.JPG",
    "assets/odegaard-main.JPG": "assets/odegaard-click.JPG",
    "assets/saliba-main.JPG": "assets/saliba-click.JPG",
    "assets/saka-click.JPG": "assets/saka-main.JPG",
    "assets/odegaard-click.JPG": "assets/odegaard-main.JPG",
    "assets/saliba-click.JPG": "assets/saliba-main.JPG",
}

images.forEach(image => {
    image.onclick = () => {
        let currentSrc = image.getAttribute("src")
        image.setAttribute("src", imagesClick[currentSrc])
    }
})

//colocando mensagem de boas vindas no nav através do button 
const btn = document.querySelector("button").onclick = () => welcome()
const userName = document.querySelector(".userName")

userName.textContent = ""

//obtendo o nome do usuário
const getUserName = () => prompt("What's your name?")
//salvando o nome do usuário no localStorage do navegador
const saveName = (name) => localStorage.setItem('name', name)
const createWelcomeMessage = (name) => `Welcome ${name}`
//atualizando o nome do usuário já inserido anteriormente
const updateUserName = (message) => (userName.textContent = message)

const welcome = () => {
    const name = getUserName()
    if (name) {
        saveName(name)
        updateUserName(createWelcomeMessage(name))
    }
}