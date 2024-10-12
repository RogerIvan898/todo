import React, {FC, useState} from 'react';
import style from './notes-table.module.scss'
import NoteCell from "../note-cell/index";
import {INote} from "../../../types";
import AddNoteModal from "../add-note-modal/index";

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
  const [isModalVisible, setIsModalVisible] = useState(false)

  const closeModal = () => {
    setIsModalVisible(false)
  }

  return (
    <>
    {isModalVisible && <AddNoteModal onClose={closeModal}/>}

    <div className={style.container}>
      <div className={style.properties}>
          {tableUnitsProperties.map(({title, symbol}) =>
            <div
                key={title}
                className={style[title]}
            >
              <span className="material-symbols-outlined">
                {symbol}
              </span>
              <p>
                {title.charAt(0).toLocaleUpperCase() + title.slice(1)}
              </p>
            </div>
          )}
      </div>

      <div className={style.table}>
        {notes.map(({title, folder, created, type, bookmark}) => <NoteCell
                                  title={title}
                                  folder={folder}
                                  created={created}
                                  type={type}
                                  bookmark={bookmark}
            />
        )}
        <div
          className={style.createNote}
          onClick={() => setIsModalVisible(true)}
        >
          New
        </div>
      </div>
    </div>
     </>
  );
};

export default NotesTable;
