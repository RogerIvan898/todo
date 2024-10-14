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
      <section className={style.title}>
        <span className="material-symbols-outlined">description</span>
        <p> {props.title}</p>
      </section>
      <section className={style.folder}>
        <span className="material-symbols-outlined">folder</span>
        <p> {props.folder}</p>
      </section>
      <section className={style.created}>
        {props.created}
      </section>
      <section className={style.type}>
        {props.type}
      </section>
      <section className={style.bookmark}>
        <input type={"checkbox"}/>
      </section>
    </div>
  );
};

export default NoteCell;