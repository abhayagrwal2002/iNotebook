import React, {useContext, useState} from 'react'
import noteContext from "../context/notes/noteContext"
import '../App.css';
const AddNote = (props) => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const handleClick = (e)=>{ 
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""});
        props.showAlert("Added Successfully","success");
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <div className="container my-5">
            <h2 className= 'add-note-heading'>ADD NOTES</h2>
            <form className="my-3  add-note">
                <div className="my-3 ">
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input type="text" className="form-control" id="title" name="title" value={note.title}aria-describedby="emailHelp" onChange={onChange} /> 
                </div>
                <div className="my-3">
                    <label htmlFor="description" className="form-label">Description:</label>
                    <input type="text" className="form-control" id="description" value={note.description} name="description" onChange={onChange} />
                </div>
                <div>
                <label htmlFor="inputState" className="form-label">Tag:</label>

                <select id="tag" className="form-control" value={note.tag} name="tag" onChange={onChange} >
                <option selected>General</option>
                <option selected>Personal</option>
                <option selected>Business</option>
                <option selected>Education</option>
                </select>
                </div>
                <div className="text-center">
                <button disabled={note.title.length<3 || note.description.length<5} type="submit" className="btn btn-primary  text " onClick={handleClick}>Add Note</button>
                </div>
            </form>
        </div>
    )
}

export default AddNote