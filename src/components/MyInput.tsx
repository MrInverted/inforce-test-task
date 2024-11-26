import React from "react"

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string
}

function MyInput({ labelText, ...rest }: IProps, ref: any) {
  return (
    <label
      className="flex flex-col gap-1 w-full">
      <span>{labelText}</span>
      <input
        className="block w-full px-4 py-2 border"
        ref={ref}
        {...rest}
      />
    </label>

  )
}

export default React.forwardRef(MyInput) 