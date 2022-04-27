import React from 'react'
import { ListChildComponentProps } from 'react-window'

const WordTableRow = ({ data, index, style }: ListChildComponentProps<string[]>) => {
  let css = ' flex justify-center  '

  css += index % 2 === 1 ? ' bg-gray-200 ' : ' bg-gray-100 '

  return (
    <div style={style} className={css}>
      <span className="self-center">{data[index]}</span>
    </div>
  )
}

export default WordTableRow
