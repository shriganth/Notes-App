const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-notes');

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || '';
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true');
    img.src = "images/delete.png";
    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);
    addListenersToNotes(inputBox);
    updateStorage();
});

function addListenersToNotes(note = null) {
    const notes = note ? [note] : document.querySelectorAll('.input-box');
    notes.forEach(nt => {
        nt.addEventListener('keyup', updateStorage)
    });
}

notesContainer.addEventListener("click", function (del) {
    if (del.target.tagName === "IMG") {
        del.target.parentElement.remove();
        updateStorage();
    }
    // else if (del.target.tagName === "P") {
    //     notes = document.querySelectorAll(".inputBox");
    //     notes.forEach(nt => {
    //         nt.onkeyup = function () {
    //             updateStorage();
    //         }
    //     })
    // }
})