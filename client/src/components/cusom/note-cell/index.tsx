import React, {FC} from 'react';

import style from './note-cell.module.scss'

interface INoteCellProps{
  title: string,
  folder: string,
  created: string,
  type: string,
  bookmark: boolean
}

const NoteCell: FC<INoteCellProps> = (props) => {
  return (
    <div className={style.note}>
      <div className={style.title}>
        <span className="material-symbols-outlined">description</span>
        <p> {props.title}</p>
      </div>
      <div className={style.folder}>
        <span className="material-symbols-outlined">folder</span>
        <p> {props.folder}</p>
      </div>
      <div className={style.created}>
        {props.created}
      </div>
      <div className={style.type}>
        {props.type}
      </div>
      <div className={style.bookmark}>
        <input type={"checkbox"}/>
      </div>
    </div>
  );
};

export default NoteCell;