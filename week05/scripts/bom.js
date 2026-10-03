const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');






let chapterArray = getChapterList() || [];

chapterArray.forEach((chapter) => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value.trim() !== "") {
        displayList(input.value);
        chapterArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', () => {
        list.removeChild(li)
        deleteChapter(li.textContent);
        input.focus()
    });
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chapterArray));
}

function deleteChapter(chapter) {
    chapterArray = chapterArray.filter(item => item !== chapter);
    setChapterList();
}
