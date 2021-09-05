import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./NoteItem";
import Form from "./Form";

export default function App() {
  const [itemsArray, setItemsArray] = useState([]);

  function addNoteInArray(Newnote) {
    setItemsArray((prev) => {
      return [...prev, Newnote];
    });
    document.querySelector(".keeper-input").value = "";
    document.querySelector(".keeper-text-area").value = "";
  }

  function renderNotes(noteItem, index) {
    return (
      <Note
        key={index}
        id={index}
        title={noteItem.title}
        content={noteItem.content}
        delete={deleteNote}
      />
    );
  }

  function deleteNote(id) {
    setItemsArray((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <Form addNoteInArray={addNoteInArray} />
      {itemsArray.map(renderNotes)}
      <Footer />
    </div>
  );
}
