import React, {FC} from 'react';

import style from './table-note.module.scss'

interface ITableNoteProps{
  title: string,
  folder: string,
  created: string,
  type: string,
  bookmark: boolean
}

const TableNote: FC<ITableNoteProps> = (props) => {
  return (
    <div className={style.note}>
      <div className={`${style.unit} ${style.title}`}>
        <span className="material-symbols-outlined">description</span>
        {props.title}
      </div>
      <div className={`${style.unit} ${style.folder}`}>
        <span className="material-symbols-outlined">folder</span>
        {props.folder}
      </div>
      <div className={`${style.unit} ${style.created}`}>
        {props.created}
      </div>
      <div className={`${style.unit} ${style.type}`}>
        {props.type}
      </div>
      <div className={`${style.unit} ${style.bookmark}`}>
        <input type={"checkbox"}/>
      </div>
    </div>
  );
};

export default TableNote;