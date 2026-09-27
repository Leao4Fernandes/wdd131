const lastModified = document.getElementById("lastModified");

const today = new Date();

lastModified.innerHTML = `Last Modified: <span class="highlight">${new Intl.DateTimeFormat(
    "en-US",
    {
        dateStyle: "full"
    }
).format(today)}</span>`;

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

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-40551-main.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-62834-main.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26495-main.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-14992-main.jpg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-12721-main.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4060-main.jpg"
    },
    {
        templeName: "Lisbon Portugal",
        location: "Lisbon, Portugal",
        dedicated: "15 September 2019",
        area: 23730,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/lisbon-portugal-temple/lisbon-portugal-temple-6315-main.jpg"
    },
    {
        templeName: "Madrid Spain",
        location: "Madrid, Spain",
        dedicated: "21 March 1999",
        area: 2236,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg"
    },
    {
        templeName: "The Hague Netherlands",
        location: "The Hague, Netherlands",
        dedicated: "8 September 2002",
        area: 2236,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/the-hague-netherlands-temple/the-hague-netherlands-temple-40883-main.jpg"
    }
];

const album = document.querySelector(".album");

function displayTemples(templesToDisplay) {

    album.innerHTML = "";

    templesToDisplay.forEach((temple, index) => {

        const card = document.createElement("figure");

        const name = document.createElement("h2");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.textContent = temple.location;

        const dedicated = document.createElement("p");
        dedicated.textContent = temple.dedicated;

        const area = document.createElement("p");
        area.textContent = temple.area;

        const image = document.createElement("img");

        image.src = temple.imageUrl;
        image.alt = `${temple.templeName} Temple`;
        image.width = 653;
        image.height = 436;
        image.decoding = "async";

        if (index === 0) {
            image.loading = "eager";
            image.fetchPriority = "high";
        } else {
            image.loading = "lazy";
            image.fetchPriority = "low";
        }

        card.append(name);
        card.append(location);
        card.append(dedicated);
        card.append(area);
        card.append(image);

        album.append(card);
    });
}

displayTemples(temples);

const Old = document.querySelector("#old");

Old.addEventListener("click", () => {

    const filteredTemples = temples.filter(temple =>
        !temple.dedicated.includes("2020") &&
        !temple.dedicated.includes("2015") &&
        !temple.dedicated.includes("2005")
    );

    displayTemples(filteredTemples);
});


const New = document.querySelector("#new");

New.addEventListener("click", () => {

    const filteredTemples = temples.filter(temple =>
        temple.dedicated.includes("2020") ||
        temple.dedicated.includes("2015") ||
        temple.dedicated.includes("2005")
    );

    displayTemples(filteredTemples);
});


const Large = document.querySelector("#large");

Large.addEventListener("click", () => {

    const filteredTemples = temples.filter(temple =>
        temple.area > 10000
    );

    displayTemples(filteredTemples);
});


const Small = document.querySelector("#small");

Small.addEventListener("click", () => {

    const filteredTemples = temples.filter(temple =>
        temple.area < 10000
    );

    displayTemples(filteredTemples);
});