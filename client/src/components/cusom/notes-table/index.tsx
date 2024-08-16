import React, {FC} from 'react';
import style from './notes-table.module.scss'
import NoteCell from "../note-cell/index";
import {INote} from "../../../types";

interface INotesTableProps{
  notes: INote[]
}

interface UnitProperty {
  symbol: string
  title: string
}
const tableUnitsProperties: UnitProperty[] = [
  {title: 'title', symbol: 'list_alt'},
  {title: 'folder', symbol: 'topic'},
  {title: 'created', symbol: 'schedule'},
  {title: 'type', symbol: 'expand_circle_down'},
  {title: 'bookmark', symbol: 'check_circle'}
]

const NotesTable: FC<INotesTableProps> = ({notes}) => {
  return (
    <div className={style.container}>
      <div className={style.properties}>
          {tableUnitsProperties.map(({title, symbol}) =>
            <div key={title} className={style[title]}>
              <span className="material-symbols-outlined">{symbol}</span>
              <p> {title.charAt(0).toLocaleUpperCase() + title.slice(1)}</p>
            </div>
          )}
      </div>
      <div className={style.table}>
        {notes.map(note => <NoteCell
                                  title={note.title}
                                  folder={note.folder}
                                  created={note.created}
                                  type={note.type}
                                  bookmark={note.bookmark}/>
        )}
        <div className={style.createNote}>
          New
        </div>
      </div>
    </div>
  );
};

export default NotesTable;