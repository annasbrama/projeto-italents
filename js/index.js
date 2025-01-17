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
const btn = document.querySelector("button");btn.addEventListener("click", welcome)
const userName = document.querySelector(".userName")

userName.textContent = ""

function welcome() {
    let name = prompt("What's your name?")
    if (!name.trim()) { 
        alert("Please enter a valid name.")
        return
    }
    if (name) {
        localStorage.setItem("name", name)
        userName.textContent = `Hello, ${name}.`
    }
}

const storedName = localStorage.getItem("name")
if (storedName) {
    userName.textContent = `Hello, ${storedName}.`
}
