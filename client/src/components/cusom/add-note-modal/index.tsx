import React, {ChangeEvent, FC, useState} from 'react';
import style from './add-note-modal.module.scss'
import Modal from "../../ui/modal/index";
import Input from "../../ui/input/index";
import TextArea from "../../ui/text-area/index";
import Tag from "../../ui/tag/index";
import {useEnterKey} from "@/hooks/useEnterKey";
import Container from "@/components/ui/container";
import ColorPicker from "@/components/cusom/color-picker";
import {v4 as uuidv4} from 'uuid'
import {INoteTag} from "@/types";

interface AddNoteModalProps{
  onClose: () => void
}

const gradientColor = 'linear-gradient(45deg, #ff7b7b, #ffd700)'

const AddNoteModal: FC<AddNoteModalProps> = ({onClose}) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [tagInput, setTagInput] = useState('')
  const [tags, setTags] = useState<INoteTag[]>([])
  const [tagColor, setTagColor] = useState(gradientColor)

  const handleAddTag = () => {
    if(tagInput.trim()){
      setTags([...tags, {id: uuidv4(), content: tagInput, color: gradientColor ? 'grey' : tagColor}])
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
            {tags.map(tag => <Tag color={tag.color} content={tag.content} key={tag.id}/>)}
            <Tag content={'Text'} color={'color'} border={false}/>
          </Container>
        </section>
      </div>
    </form>
    </Modal>
  );
};

export default AddNoteModal;