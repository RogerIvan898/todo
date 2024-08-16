import style from './decorative-container.module.scss'
import React, {FC, HTMLProps} from 'react';
import Container from "../../ui/container/index";

interface ITodoProps extends HTMLProps<HTMLDivElement>{
  symbol: string
  content: string
}

const DecorativeContainer: FC<ITodoProps> = (
  { content, symbol, key, className }
) => {
  return (
    <Container key={key} className={`${style.container} ${className ?? ''}`}>
      <span className={"material-symbols-outlined"}>{symbol}</span>
      <p> {content}</p>
    </Container>
  );
};

export default DecorativeContainer;