import React, { useMemo } from 'react'
import allWords from '../../words'
import WordTable from './word-table/table'

interface Props {
  letterSize: number
  letters: string[]
  includeLetters: string
  excludeLetters: string
}

function filterByLetters(words: string[], letterSize: number, letters: string[]) {
  return words.filter((word) => {
    if (word.length !== letterSize) return false

    const lettersArray = word.split('')

    return [...Array(letterSize)].every((_, i) => {
      const typedLetter = letters[i] ?? ''

      if (typedLetter.length === 0) return true

      return lettersArray[i] === typedLetter
    })
  })
}

function filterByIncludeLetters(words: string[], includeLetters: string) {
  const includeLettersArray = includeLetters.toUpperCase().split('')
  return words.filter((word) => includeLettersArray.every((l) => word.includes(l)))
}

function filterByExcludeLetters(words: string[], excludeLetters: string) {
  const excludeLettersArray = excludeLetters.toUpperCase().split('')

  return words.filter((word) => !excludeLettersArray.some((l) => word.includes(l)))
}

const Solutions = ({ letterSize, letters, includeLetters, excludeLetters }: Props) => {
  const filteredWords = useMemo(() => {
    let temp = filterByLetters(allWords, letterSize, letters)
    temp = filterByIncludeLetters(temp, includeLetters)
    temp = filterByExcludeLetters(temp, excludeLetters)

    temp.sort((a, b) => a.localeCompare(b))
    return temp
  }, [letters, letterSize, includeLetters, excludeLetters])

  return (
    <div className="border border-gray-800 w-full h-full max-w-5xl">
      <WordTable words={filteredWords} />
    </div>
  )
}

export default Solutions
