'use client'

import React, {useEffect, useState} from 'react';

import style from './todos.module.scss'
import {INote} from "../page";
import {v4 as uuidv4} from 'uuid'
import DecorativeContainer from "../../components/cusom/decorative-container/index";
import TableNote from "../../components/cusom/table-note/index";

const Todos = () => {
  const [todos, setTodods] = useState([])

  useEffect(() => {
    const initialTodos: INote[] = new Array(3).fill(null).map(() => ({
      id: uuidv4(), content: 'some folder'
    }))
    setTodods(initialTodos)
  }, [])

  return (
    <div className={style.layout}>
      <div className={style.container}>
        <div className={style.foldersContainer}>
          <p className={style.categoryTitle}>Folders</p>
          <div className={style.folders}>
            { todos.map(({id, content}) =>
              <DecorativeContainer key={id} symbol={'folder'} content={content} className={style.todo}/>)
            }
            <DecorativeContainer symbol={'folder'} content={'New'} className={style.createTodo}/>
          </div>
          </div>
        <div className={style.notesContainer}>
          <p className={style.categoryTitle}>Notes</p>
          <div className={style.notes}>
            <TableNote title={'Title'} folder={'Folder 1'} created={'98'} type={'Type'} bookmark={false}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;