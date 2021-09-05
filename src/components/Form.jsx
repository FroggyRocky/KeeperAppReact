import React, { useState } from "react";
import AddBoxIcon from "@material-ui/icons/AddBox";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

export default function Form(props) {
  const [newNote, setNewNote] = useState({});
  const [isExpanded, setExpand] = useState(false);

  function addNote(event) {
    const { name, value } = event.target;
    setNewNote((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function onAdd(event) {
    props.addNoteInArray(newNote);
    setNewNote({});
    event.preventDefault();
  }

  function expand() {
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            placeholder="Title For Your Note"
            className="keeper-input"
            onChange={addNote}
            name="title"
            type="text"
          />
        )}

        <textarea
          placeholder="Your Note To Keep"
          className="keeper-text-area"
          onChange={addNote}
          name="content"
          onClick={expand}
          cols="10"
          rows={isExpanded ? "5" : "1"}
        ></textarea>
        <Zoom in={isExpanded}>
          <Fab onClick={onAdd}>
            <AddBoxIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
