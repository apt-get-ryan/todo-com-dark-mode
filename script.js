const addNoteButton = document.querySelector("#add-note")
const noteContainer = document.querySelector(".notes-container")


const note = `
<div class="note did">
<div class="row-buttons">
    <input type="checkbox" class="toggle-priority" checked>
    <input type="checkbox" class="mark-as-deletable">   
</div>
<span class="note-title" contenteditable="true"></span>
<span class="note-content" contenteditable="true"></span>
</div>
`
const addNote = () => {
    noteContainer.insertAdjacentHTML('beforeEnd',note)
}

addNoteButton.addEventListener("click", addNote)