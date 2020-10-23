const addNoteButton = document.querySelector("#add-note")
const noteContainer = document.querySelector(".notes-container")
const togglePriority = (event) => {
    const note = event.path[2]
    const checkboxValue = event.target.checked
    if(checkboxValue == true){
        note.classList.remove('did')
        note.classList.add('todo')
        return
    }
    note.classList.remove('todo')
    note.classList.add('did')
}

const note = `
<div class="note todo">
<div class="row-buttons">
    <input type="checkbox" onclick="togglePriority(event)" class="toggle-priority" checked>
    <input type="checkbox" class="mark-as-deletable">   
</div>
<span class="note-title" contenteditable="true"></span>
<span class="note-content" contenteditable="true"></span>
</div>
`
const addNote = () => {
    noteContainer.insertAdjacentHTML('afterBegin',note)
}

addNoteButton.addEventListener("click", addNote)
