/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

interface Props {
  min?: number
  max?: number
  editable?: boolean
  label?: string
  size: number
  setSize: (size: number) => void
}

const NumberPicker = (props: Props) => {
  const { label, min, editable, max, size, setSize } = props

  function decrease(): void {
    if (min !== undefined && size > min) setSize(size - 1)
  }

  function encrease(): void {
    if (max !== undefined && size < max) setSize(size + 1)
  }

  return (
    <div>
      <div className="custom-number-input h-10 w-32">
        <label className="w-full text-gray-700 text-sm font-semibold">{label}</label>
        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
          <button
            type="button"
            data-action="decrement"
            className=" border-r border-r-gray-400 bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
            onClick={decrease}
          >
            <span className="m-auto text-2xl align-super">−</span>
          </button>
          <input
            readOnly={!editable}
            type="number"
            className="focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
            name="custom-input-number"
            value={size}
          />
          <button
            type="button"
            data-action="increment"
            className=" border-l border-l-gray-400  bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
            onClick={encrease}
          >
            <span className="m-auto text-2xl align-super">+</span>
          </button>
        </div>
      </div>
    </div>
  )
}

NumberPicker.defaultProps = {
  label: '',
  editable: false,
  min: undefined,
  max: undefined,
}

export default NumberPicker
