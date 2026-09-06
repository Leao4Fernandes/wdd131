const lastModified = document.querySelector("#lastModified");
const today = new Date();
lastModified.innerHTML = `Last Modified: <p id="lastModified">${new Intl.DateTimeFormat('en-US').format(today)}</p>`;
