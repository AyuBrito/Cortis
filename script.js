// menu hamburguer
document.addEventListener("DOMContentLoaded", () => {
  const menuHamburguer = document.querySelector(".menu-hamburguer");
  const navLinks = document.querySelector(".nav-links");

  menuHamburguer.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

  document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !menuHamburguer.contains(e.target)) {
      navLinks.classList.remove("active");
    }
  });
});


// parte de membros 
const membros = {
  martin: {
    nome: "MARTIN",
    nomeKr: "마틴",
    nascimento: "Date of Birth: March 20, 2008",
    foto: "./img/membros/martin.png"
  },
  james: {
    nome: "JAMES",
    nomeKr: "제임스",
    nascimento: "Date of Birth: October 14, 2005",
    foto: "./img/membros/james.png"
  },
  juhoon: {
    nome: "JUHOON",
    nomeKr: "주훈",
    nascimento: "Date of Birth: January 3, 2008",
    foto: "./img/membros/juhoon.png"
  },
  seonghyeon: {
    nome: "SEONGHYEON",
    nomeKr: "성현",
    nascimento: "Date of Birth: July 15, 2008",
    foto: "./img/membros/seonghyeon.png"
  },
  keonho: {
    nome: "KEONHO",
    nomeKr: "건호",
    nascimento: "Date of Birth: February 14, 2009",
    foto: "./img/membros/keonho.png"
  }
};

const listaMembros = document.querySelectorAll(".names li");
const img = document.getElementById("profile-img");
const name = document.getElementById("name");
const nameKr = document.getElementById("name-kr");
const birth = document.getElementById("birth");

function atualizarPerfil(id) {
  const membro = membros[id];

  if (membro) {
    img.src = membro.foto;
    name.textContent = membro.nome;
    nameKr.textContent = membro.nomeKr;
    birth.textContent = membro.nascimento;
  }
}

listaMembros.forEach(li => {
  li.addEventListener("click", () => {
    document.querySelector(".names li.active")?.classList.remove("active");

    li.classList.add("active");

    const id = li.getAttribute("data-id");
    atualizarPerfil(id);
  });
});
