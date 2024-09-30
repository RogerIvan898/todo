import React from 'react';
import style from './add-note-modal.module.scss'
import Modal from "../../ui/modal/index";
import Input from "../../ui/input/index";
import TextArea from "../../ui/text-area/index";

const AddNoteModal = () => {
  return (
    <Modal>
      <div className={style.contentMain}>
        <section>
          <label htmlFor={'title'}>Title: </label>
          <Input id={'title'}/>
        </section>
        <section>
          <label htmlFor={'description'}>Description: </label>
          <TextArea className={style.textArea} id={'description'}/>
        </section>
      </div>
    </Modal>
  );
};

export default AddNoteModal;
