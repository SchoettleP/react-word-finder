import React from 'react'
import NumberPicker from './inputs/number-picker'

interface Props {
  size: number
  setSize: (size: number) => void
}

const LetterSizePicker = ({ size, setSize }: Props) => {
  return (
    <div className="flex space-x-4 items-center w-full">
      <NumberPicker min={2} max={20} size={size} setSize={setSize} label="Wieviele Buchstaben?" />
    </div>
  )
}

export default LetterSizePicker
