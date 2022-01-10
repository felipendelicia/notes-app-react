import NoteList from "./components/NoteList"
import { useState } from "react"
import {nanoid} from "nanoid"
import date from "date"

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

  return(
  <div className="container">
    <NoteList notes={notes} handleAddNote={addNote}/>
  </div>
  )
}

export default App