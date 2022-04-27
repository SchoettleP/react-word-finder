import React, { FormEvent, useCallback } from 'react'
import Input from './inputs/input'

interface Props {
  text: string
  setText: (text: string) => void
}

const IncludeLettersInput = ({ text, setText }: Props) => {
  const onChangeText = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      setText(event.currentTarget.value)
    },
    [setText],
  )

  return (
    <div>
      <Input label="Einzuschließende Buchstaben" value={text} onChange={onChangeText} />
    </div>
  )
}

export default IncludeLettersInput
