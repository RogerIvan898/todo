import React, {FC, useEffect, useRef, useState} from 'react';
import Container from "../../ui/container/index";
import DecorativeContainer from "../decorative-container/index";
import style from './editable-container.module.scss'

interface EditableContainerProps{
  symbol?: string
  content: string
  onSubmit?: () => void
  className: string
}

const EditableContainer: FC<EditableContainerProps> = ({
                                                         symbol,
                                                         content,
                                                         onSubmit,
                                                         className
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleSubmit = (e: KeyboardEvent) => {
    if(e.key === 'Enter') {
      onSubmit?.()
      setIsEditing(false)
    }
  }

  const handleButtonClick = () => {
    setIsEditing(true)
  }

  const handleInputBlur = () => {
    setIsEditing(false)
  }

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing])

  return (
    <div onClick={handleButtonClick}>
      { isEditing ? (
          <Container className={style.container}>
            <input
              onBlur={handleInputBlur}
              ref={inputRef}
              onKeyPress={handleSubmit}
              className={style.input}
              placeholder={'Title'}
              autoFocus
            />
          </Container>) : (
          <DecorativeContainer className={className} symbol={symbol} content={content}/>
        )
      }
    </div>
  );
};

export default EditableContainer;