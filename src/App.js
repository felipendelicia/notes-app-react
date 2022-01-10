import NoteList from "./components/NoteList"
import { useState } from "react"
import { nanoid } from "nanoid"
import Search from "./components/Search"
import Header from "./components/Header"

const App = () => {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "first note",
    date: "10/01/2022"
  }, {
    id: nanoid(),
    text: "firasdast note",
    date: "10/01/3022"
  }])

  const [searchText, setSearchText] = useState("")

  const [darkMode, setDarkMode] = useState(false)

  const addNote = (text) => {
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.getDate()
    }

    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NoteList
          notes={notes}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote} />
      </div>
    </div>
  )
}

export default App