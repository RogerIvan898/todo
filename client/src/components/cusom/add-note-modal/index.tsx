import React from 'react';
import style from './add-note-modal.module.scss'
import Modal from "../../ui/modal/index";
import Input from "../../ui/input/index";
import TextArea from "../../ui/text-area/index";
import Tag from "../../ui/tag/index";

const AddNoteModal = () => {
  return (
    <Modal>
      <div className={style.modalContent}>
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
      <div className={style.contentAdditional}>
        <section>
          <div className={style.inputTag}>
            <label>Tags: </label>
            <Input/>
          </div>
          <div className={style.tagsContainer}>
            <Tag text={'Text'} color={'color'} border={false}/>
          </div>
        </section>
      </div>
    </div>
    </Modal>
  );
};

export default AddNoteModal;
