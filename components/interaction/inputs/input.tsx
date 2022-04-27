/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { forwardRef, InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Input = forwardRef((props: InputProps, ref: React.Ref<HTMLInputElement>) => {
  const { label, value, onChange } = props

  return (
    <div className="flex justify-center">
      <div className="xl:w-96">
        <label className="form-label inline-block  text-gray-700">{label}</label>
        <input
          ref={ref}
          value={value}
          onChange={onChange}
          type="text"
          className=" form-control block w-full px-3 py-1.5 text-base font-normal
          text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded
          transition ease-in-out m-0 focus:text-gray-700 focus:bg-white 
          focus:border-blue-600 focus:outline-none"
        />
      </div>
    </div>
  )
})

Input.defaultProps = {
  label: undefined,
}

export default Input
