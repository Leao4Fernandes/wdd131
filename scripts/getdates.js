const lastModified = document.getElementById("lastModified");

const today = new Date();

lastModified.innerHTML = `Last Modified: <span class="highlight">${new Intl.DateTimeFormat(
    "en-US",
    {
        dateStyle: "full"
    }
).format(today)}</span>`;