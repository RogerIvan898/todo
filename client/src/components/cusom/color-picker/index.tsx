import React, {FC, useEffect, useRef, useState} from 'react';
import style from './color-picker.module.scss'
import {HexColorPicker} from "react-colorful";

interface ColorPickerProps{
  initialColor?: string
  onChange?: (color: string) => void
}

const ColorPicker: FC<ColorPickerProps> = ({initialColor = '#8B0000', onChange}) => {
  const [color, setColor] = useState<string | null>(null)
  const [isColorPickerVisible, setIsColorPickerVisible] = useState(false)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const handleChangeColor = (newColor: string) => {
    setColor(newColor)
    onChange?.(newColor)
  }

  useEffect(() => {
    if(buttonRef.current){
     buttonRef.current.style.transform = `scale(${isColorPickerVisible ? 1.6 : 1})`
    }
  }, [isColorPickerVisible])

  return (
    <div className={style.container}>
      <button ref={buttonRef}
        className={style.setColor}
        style={{background: color ?? 'linear-gradient(45deg, #ff7b7b, #ffd700)'}}
        onClick={() => setIsColorPickerVisible(prev => !prev)}
      />
      { isColorPickerVisible &&
      <div className={style.colorPickerWrapper}>
        <HexColorPicker color={initialColor} onChange={handleChangeColor}/>
      </div>
      }
    </div>
  );
};

export default ColorPicker;