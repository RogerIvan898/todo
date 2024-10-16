import React, {ChangeEvent, FC, useState} from 'react';
import style from './add-note-modal.module.scss'
import Modal from "../../ui/modal/index";
import Input from "../../ui/input/index";
import TextArea from "../../ui/text-area/index";
import Tag from "../../ui/tag/index";
import {useEnterKey} from "@/hooks/useEnterKey";
import Container from "@/components/ui/container";
import ColorPicker from "@/components/cusom/color-picker";

interface AddNoteModalProps{
  onClose: () => void
}

interface ITag{
  text: string
  color: string
}

const AddNoteModal: FC<AddNoteModalProps> = ({onClose}) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [tagInput, setTagInput] = useState('')
  const [tags, setTags] = useState<ITag[]>([])
  const [tagColor, setTagColor] = useState('linear-gradient(45deg, #ff7b7b, #ffd700)')

  const handleAddTag = () => {
    if(tagInput.trim()){
      setTags([...tags, {text: tagInput, color: tagColor}])
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
          <div className={style.inputContainer}>
            <div className={style.inputTag}>
              <label>Tags: </label>
              <div className={style.inputContainer}>
              <Input value={tagInput}
                     onChange={(e: ChangeEvent<HTMLInputElement>) => setTagInput(e.target.value)}
                     onKeyDown={handleTagsEnterPress}
              />
                <ColorPicker onChange={(color: string) => setTagColor(color)}/>
              </div>
            </div>
          </div>
          <Container className={style.tagsContainer}>
            {tags.map(tag => <Tag color={tag.color} text={tag.text}/>)}
            <Tag text={'Text'} color={'color'} border={false}/>
          </Container>
        </section>
      </div>
    </form>
    </Modal>
  );
};

export default AddNoteModal;