import React, { useCallback, useState } from 'react'
import { NextPage } from 'next'
import LetterBox from '@components/interaction/letter-box'
import LetterSizePicker from '@components/interaction/letter-size-picker'
import Solutions from '@components/interaction/solutions'
import IncludeLettersInput from '@components/interaction/include-letters-input'
import ExcludeLettersInput from '@components/interaction/exclude-letters-input'

const FinderPage: NextPage = () => {
  const [letterSize, setLetterSize] = useState(5)
  const [letters, setLetters] = useState<string[]>([])

  const [includeLetters, setIncludeLetters] = useState<string>('')
  const [excludeLetters, setExcludeLetters] = useState<string>('')

  const onLetterChange = useCallback(
    (letter: string, index: number) => {
      const prevLetters = letters.slice(0)
      prevLetters[index - 1] = letter
      setLetters(prevLetters)
    },
    [letters, setLetters],
  )

  return (
    <div className="m-3 h-full flex flex-col">
      <div className="w-full self-center flex justify-center">
        <div className="flex flex-col space-y-3">
          <LetterSizePicker size={letterSize} setSize={setLetterSize} />
          <IncludeLettersInput text={includeLetters} setText={setIncludeLetters} />
          <ExcludeLettersInput text={excludeLetters} setText={setExcludeLetters} />
        </div>
      </div>

      <div className="mt-5 flex justify-center space-x-3">
        {/* display letter boxes */}
        {[...Array(letterSize)].map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <LetterBox key={i} index={i + 1} onChange={onLetterChange} />
        ))}
      </div>

      <div className="flex justify-center mt-5 flex-grow">
        <Solutions
          letterSize={letterSize}
          letters={letters}
          includeLetters={includeLetters}
          excludeLetters={excludeLetters}
        />
      </div>
    </div>
  )
}

export default FinderPage
