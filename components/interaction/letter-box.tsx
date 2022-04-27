import React, { useEffect, useState } from 'react'

interface Props {
  index: number
  onChange: (letter: string, index: number) => void
}

const LetterBox = ({ index, onChange }: Props) => {
  const [letter, setLetter] = useState('')

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => onChange(letter, index), [letter, index])

  function changeLetter(event: React.FormEvent<HTMLInputElement>) {
    const inputLetter = event.currentTarget.value.toUpperCase()
    setLetter(inputLetter.slice(-1))
  }

  return (
    <div>
      <div className="text-center">
        <span>{index}</span>
      </div>
      <input
        className=" text-center text-4xl flex border-2 rounded-md border-gray-500 w-20 h-20 hover:ring-2 ring-gray-300"
        onChange={changeLetter}
        value={letter}
      />
    </div>
  )
}

export default LetterBox
