import React from 'react'
import { FixedSizeList as List } from 'react-window'
import sizeMe, { SizeMeProps } from 'react-sizeme'
import WordTableRow from './row'

type Props = SizeMeProps & {
  words: string[]
}

const WordTable = ({ words, size }: Props) => {
  return (
    <div>
      <List
        height={size.height ?? 1000}
        width={size.width ?? 500}
        itemData={words}
        itemCount={words.length}
        itemSize={35}
      >
        {WordTableRow}
      </List>
    </div>
  )
}

export default sizeMe({ monitorHeight: true })(WordTable)
