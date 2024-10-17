import React, {FC} from 'react';
import style from './tag.module.scss'

interface TagProps{
  content: string,
  color: string
  border?: boolean
}

const Tag: FC<TagProps> = ({content, color, border}) => {
  return (
    <span className={style.container} style={{backgroundColor: color}}>
      { content }
    </span>
  );
};

export default Tag;
