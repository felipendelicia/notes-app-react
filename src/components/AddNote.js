import { useState } from "react"

const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState("")

    const caracterLimit = 200

    const handleChange = (event) =>{
        if (caracterLimit - event.target.value.length >= 0){
            setNoteText(event.target.value)
        }
    }

    const handleSaveClick = () => {
        if (noteText.trim().length>0){
            handleAddNote(noteText)
            setNoteText("")
        }
    }

    return(
        <div className="note new">
            <textarea rows="8" cols="10" placeholder="type to add a note..." onChange={handleChange} value={noteText}></textarea>
            <div className="note-footer">
                <small>{caracterLimit - noteText.length} Remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote