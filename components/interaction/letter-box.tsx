import React, { useState } from 'react'

interface Props {
  index?: number
}

const LetterBox = ({ index }: Props) => {
  const [letter, setLetter] = useState('')

  function changeLetter(event: React.FormEvent<HTMLInputElement>) {
    const inputLetter = event.currentTarget.value.toUpperCase()
    setLetter(inputLetter.slice(-1))
  }

  return (
    <div>
      {index !== undefined && (
        <div className="text-center">
          <span>{index}</span>
        </div>
      )}
      <input
        className=" text-center text-4xl flex border-2 rounded-md border-gray-500 w-20 h-20 hover:ring-2 ring-gray-300"
        onChange={changeLetter}
        value={letter}
      />
    </div>
  )
}

LetterBox.defaultProps = {
  index: null,
}

export default LetterBox
