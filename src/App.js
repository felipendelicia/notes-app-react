import NoteList from "./components/NoteList"
import { useState } from "react"
import {nanoid} from "nanoid"
import Search from "./components/Search"

const App = () => {
  const [notes, setNotes] = useState([{
    id:nanoid(),
    text: "first note",
    date:"10/01/2022"
  },{
    id:nanoid(),
    text: "firasdast note",
    date:"10/01/3022"
  }])

  const [searchText, setSearchText] = useState("")

  const addNote = (text) => {
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.getDate()
    }

  const newNotes = [...notes,newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=>note.id !== id)
    setNotes(newNotes)
  }

  return(
  <div className="container">
    <Search handleSearchNote={setSearchText}/>
    <NoteList 
    notes={notes}
    handleAddNote={addNote} 
    handleDeleteNote={deleteNote}/>
  </div>
  )
}

export default App