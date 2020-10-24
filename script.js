const addNoteButton = document.querySelector("#add-note")
const noteContainer = document.querySelector(".notes-container")
const changeThemeButton = document.querySelector(".toggle-theme")

window.addEventListener("load", ()=> {
    if(localStorage.darkMode == 'true'){
        changeColors(darkMode)
        changeThemeButton.checked = true
    }
    changeThemeButton.style = 'transition: transform 300ms ease;'
    if(localStorage.notesSaved != undefined)
        noteContainer.innerHTML = localStorage.notesSaved
    const notes = document.querySelectorAll('.note')
    notes.forEach(note => {
        note.removeAttribute('style')
    })
    localStorage.setItem('notesSaved', noteContainer.innerHTML)
})
const toggleToDeleteList = (event) => {
    const checkbox = event.target
        if(checkbox.checked == true)
            checkbox.classList.add("to-delete")
        else
            checkbox.classList.remove("to-delete")
} 
const togglePriority = (event) => {
    const note = event.path[2]
    const checkboxValue = event.target.checked
    if(checkboxValue == true){
        note.classList.remove('did')
        note.classList.add('todo')
        event.target.setAttribute("checked", "true")
        localStorage.setItem("notesSaved", noteContainer.innerHTML)
        return
    }
    note.classList.remove('todo')
    note.classList.add('did')
    event.target.removeAttribute("checked")
    localStorage.setItem("notesSaved", noteContainer.innerHTML)
}
const saveNotesInLocalStorage = () => {
    localStorage.setItem("notesSaved", noteContainer.innerHTML)
}
const note = `
<div class="note todo">
<div class="row-buttons">
    <input type="checkbox" onclick="togglePriority(event)" class="toggle-priority" checked="true">
    <input type="checkbox" onclick="toggleToDeleteList(event)" class="mark-as-deletable">
</div>
<span class="note-title" oninput="saveNotesInLocalStorage()" contenteditable="true"></span>
<span class="note-content" oninput="saveNotesInLocalStorage()" contenteditable="true"></span>
</div>
`
const addNote = () => {
    noteContainer.insertAdjacentHTML('afterBegin',note)
    localStorage.setItem("notesSaved", noteContainer.innerHTML)
}
addNoteButton.addEventListener("click", addNote)

const getCSSVariableValue = (property) => 
    window.getComputedStyle(document.body).getPropertyValue(property)
const initalColor = {
    bgColor: getCSSVariableValue("--bg-color"),
    headerBg: getCSSVariableValue("--header-bg"),
    noteAddBg: getCSSVariableValue("--note-add-bg"),
    noteAddLeftBorder: getCSSVariableValue("--note-add-left-border"),
}
const darkMode = {
    bgColor: "#2f2f2f",
    headerBg: "#20202a",
    noteAddBg: "#0e0b0b",
    noteAddLeftBorder: "#ddd",
}
const setCSSVariableValue = (property, value) => document.body.style.setProperty(property, value)
const changeColors = (colors) => {
        setCSSVariableValue("--bg-color", colors.bgColor)
        setCSSVariableValue("--header-bg", colors.headerBg)
        setCSSVariableValue("--note-add-bg", colors.noteAddBg)
        setCSSVariableValue("--note-add-left-border", colors.noteAddLeftBorder)
}

changeThemeButton.addEventListener('change', ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initalColor)
    localStorage.setItem('darkMode', target.checked)
} )


const removeNotesButton = document.querySelector('.remove-notes')
const removeNotes = () => {
    const checkboxMarkedToDelete = document.querySelectorAll('.to-delete')
    checkboxMarkedToDelete.forEach(checkbox => {
        checkbox.parentElement.parentElement.parentElement.removeChild(checkbox.parentElement.parentElement)
    })
    localStorage.setItem("notesSaved", noteContainer.innerHTML)
}
removeNotesButton.addEventListener('click', removeNotes)

const searchBar = document.querySelector('#todo-search')
const showNoteIfMatchValue = inputValue => (note) =>{
    const noteTitle = note.querySelector('.note-title').textContent.toLowerCase()
    const noteContent = note.querySelector('.note-content').textContent.toLowerCase()
    
    const noteContainsInputValue = 
        noteTitle.includes(inputValue) || noteContent.includes(inputValue)
    
    if(noteContainsInputValue) {
        note.style.display = 'block'
        return
    }
    note.style.display = 'none'
}
const filterNotes = (event) => {
    const inputValue = event.target.value
    const notes = document.querySelectorAll('.note')
    notes.forEach(showNoteIfMatchValue(inputValue))
}
searchBar.addEventListener('input', filterNotes)