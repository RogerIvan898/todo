import React, {FC} from 'react';
import style from './tag.module.scss'

interface TagProps{
  text: string,
  color: string
  border: boolean
}

const Tag: FC<TagProps> = ({text, color, border}) => {
  return (
    <span className={style.container}>
      { text }
    </span>
  );
};

export default Tag;
