const lastModified = document.getElementById("lastModified");

const today = new Date();

lastModified.innerHTML = `Last Modified: <span class="highlight">${new Intl.DateTimeFormat(
    "en-US",
    {
        dateStyle: "full"
    }
).format(today)}</span>`;

const rugbyTeams = [
    {
        name: "Benfica",
        city: "Lisboa",
        image: "../images/benfica-removebg-preview.png"
    },
    {
        name: "Cascais",
        city: "Cascais",
        image: "../images/cascais-removebg-preview.png"
    },
    {
        name: "Direito",
        city: "Lisboa",
        image: "../images/direito-removebg-preview.png"
    },
    {
        name: "Belenenses",
        city: "Lisboa",
        image: "../images/belenenses-removebg-preview.png"
    },
    {
        name: "CDUL",
        city: "Lisboa",
        image: "../images/cdul-removebg-preview.png"
    },
    {
        name: "São Miguel",
        city: "Lisboa",
        image: "../images/saomiguel-removebg-preview.png"
    },
    {
        name: "Agronomia",
        city: "Lisboa",
        image: "../images/agronomia-removebg-preview.png"
    },
    {
        name: "Técnico",
        city: "Lisboa",
        image: "../images/tecnico-removebg-preview.png"
    },
    {
        name: "Académica",
        city: "Coimbra",
        image: "../images/academica-removebg-preview.png"
    },
    {
        name: "CDUP",
        city: "Porto",
        image: "../images/cdup-removebg-preview.png"
    },
    {
        name: "Santarém",
        city: "Santarém",
        image: "../images/santarem-removebg-preview.png"
    },
    {
        name: "AR Setúbal",
        city: "Setúbal",
        image: "../images/setubal-removebg-preview.png"
    }
];

const features = [
    document.querySelector(".feature-1"),
    document.querySelector(".feature-2"),
    document.querySelector(".feature-3")
];

const randomTeams = [...rugbyTeams]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

features.forEach((feature, index) => {

    const team = randomTeams[index];

    const img = document.createElement("img");
    img.src = team.image;
    img.alt = `${team.name} rugby team`;

    const h2 = document.createElement("h2");
    h2.textContent = team.name;

    feature.appendChild(img);
    feature.appendChild(h2);

});

const menuButton = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".navMenu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");

    if (navMenu.classList.contains("open")) {
        menuButton.textContent = "×";
        menuButton.setAttribute("aria-label", "Close navigation menu");
    } else {
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Open navigation menu");
    }
});