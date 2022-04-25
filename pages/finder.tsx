import React, { useState } from 'react'
import { NextPage } from 'next'
import LetterBox from '@components/interaction/letter-box'
import LetterSizePicker from '@components/interaction/letter-size-picker'

const FinderPage: NextPage = () => {
  const [letterSize, setLetterSize] = useState(5)

  return (
    <div className="m-3">
      <div className="w-full self-center flex justify-center">
        <LetterSizePicker size={letterSize} setSize={setLetterSize} />
      </div>

      <div className="mt-5 flex justify-center space-x-3">
        {/* display letter boxes */}
        {[...Array(letterSize)].map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <LetterBox key={i} index={i + 1} />
        ))}
      </div>
    </div>
  )
}

export default FinderPage
