function toggleMode() {
  const html = document.documentElement
  /* Método alternativo:
      html.classList.toggle("light")*/

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de mayk brito com fundo azul e OCULOS ESCUROS, ele usa jaqueta preta, oculos e não possui barba."
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de mayk brito com fundo azul, ele usa jaqueta preta, oculos e não possui barba."
    )
  }
}
