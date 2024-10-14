import React, {ChangeEvent, FC, useState} from 'react';
import style from './add-note-modal.module.scss'
import Modal from "../../ui/modal/index";
import Input from "../../ui/input/index";
import TextArea from "../../ui/text-area/index";
import Tag from "../../ui/tag/index";
import {useEnterKey} from "@/hooks/useEnterKey";

interface AddNoteModalProps{
  onClose: () => void
}

const AddNoteModal: FC<AddNoteModalProps> = ({onClose}) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [tagInput, setTagInput] = useState('')
  const [tags, setTags] = useState<string[]>([])

  const handleAddTag = () => {
    if(tagInput.trim()){
      setTags([...tags, tagInput.trim()])
      setTagInput('')
    }
  }
  const handleTagsEnterPress = useEnterKey(handleAddTag)

  return (
    <Modal onClose={onClose}>
      <form className={style.modalContent}>
      <div className={style.contentMain}>
        <section>
          <label htmlFor={'title'}>Title: </label>
          <Input
              id={'title'}
              value={title}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
              required
          />
        </section>
        <section>
          <label htmlFor={'description'}>Description: </label>
          <TextArea
              className={style.textArea}
              id={'description'}
              value={description}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
          />
        </section>
      </div>
      <div className={style.contentAdditional}>
        <section>
          <div className={style.inputTag}>
            <label>Tags: </label>
            <Input onKeyDown={handleTagsEnterPress}/>
          </div>
          <div className={style.tagsContainer}>
            <Tag text={'Text'} color={'color'} border={false}/>
          </div>
        </section>
      </div>
    </form>
    </Modal>
  );
};

export default AddNoteModal;
