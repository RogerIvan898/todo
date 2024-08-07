'use client'

import Input from "../components/ui/input/index";
import Container from "../components/ui/container/index";
import style from './page.module.scss'
import {v4 as uuidv4} from 'uuid'
import {useState} from "react";

interface INote{
  id: string,
  content: string
}

export default function Home() {
  const [notes, setNotes] = useState<INote[]>([])
  const [inputText, setInputText] = useState('')

  const createNote = () => {
    if(inputText.trim() === ''){
      return
    }

    setNotes([...notes, {
      id: uuidv4(),
      content: inputText
    }])

    setInputText('')
  }

  return (
    <>
      <div className={style.container}>
        <Input
          placeholder={'Text'}
          className={style.input}
          value={inputText}
          onChange={(e) => setInputText(e.currentTarget.value)}
          onSubmit={createNote}
        />
        { notes.map(note =>
          <Container key={note.id} className={style.element}>
            {note.content}
          </Container>
        ) }
      </div>
    </>
  );
}