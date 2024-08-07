'use client'
import style from './todos.module.scss'

import {useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid'
import DecorativeContainer from "../../components/cusom/decorative-container/index";
import NotesTable from "../../components/cusom/notes-table/index";
import {Folder, INote} from "../../types";
import EditableContainer from "../../components/cusom/editable-container/index";

const notes: INote[] = [{
  id: uuidv4(),
  title: 'Title',
  type: 'Type',
  created: '98',
  folder: 'Folder 1',
  bookmark: false
  }
]

const Todos = () => {
  const [todos, setTodods] = useState([])
  const [chosenFolder, setChosenFolder] = useState(null)

  useEffect(() => {
    const initialTodos: Folder[] = new Array(3).fill(null).map(() => ({
      id: uuidv4(), title: 'some folder', notes: []
    }))

    setTodods(initialTodos)
  }, [])

  return (
    <div className={style.layout}>
      <div className={style.container}>
        <div className={style.folderContainer}>
          <p className={style.categoryTitle}>Folders</p>
          <div className={style.folders}>
            { todos.map(({id, title}) =>
              <DecorativeContainer
                key={id}
                symbol={'folder'}
                content={title}
                className={style.folder}
              />)
            }
            <EditableContainer
              symbol={'folder'}
              content={'New'}
              className={`${style.createTodo} ${style.createFolder}`}
            />
          </div>
          </div>
        <div className={style.noteContainer}>
          <p className={style.categoryTitle}>Notes</p>
          <NotesTable notes={notes}/>
        </div>
      </div>
    </div>
  );
};

export default Todos;