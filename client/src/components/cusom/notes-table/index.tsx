import React, {FC, memo, useState} from 'react';
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

const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1)

const PropertyHeaderUnit = memo(({title, symbol}: UnitProperty) => (
  <div key={title} className={style[title]}>
    <span className="material-symbols-outlined">
      { symbol }
    </span>
    <p>
      {capitalize(title)}
    </p>
  </div>
))

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
          <PropertyHeaderUnit symbol={symbol} title={title} key={title}/>
          )}
      </div>

      <div className={style.table}>
        { notes.map(note => <NoteCell {...note}/> )}

        <button
          className={style.createNote}
          onClick={() => setIsModalVisible(true)}
        >
          New
        </button>
      </div>
    </div>
     </>
  );
};

export default NotesTable;
