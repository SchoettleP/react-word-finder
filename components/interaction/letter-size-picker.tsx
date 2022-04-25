import React from 'react'
import NumberPicker from './inputs/number-picker'

interface Props {
  size: number
  setSize: (size: number) => void
}

const LetterSizePicker = ({ size, setSize }: Props) => {
  return (
    <div className="flex space-x-4 items-center">
      <span>Wieviele Buchstaben?</span>
      <NumberPicker min={2} max={20} size={size} setSize={setSize} />
    </div>
  )
}

export default LetterSizePicker
