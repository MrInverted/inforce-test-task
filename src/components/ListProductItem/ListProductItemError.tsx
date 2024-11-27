interface IProps {
  text: string
}

function ListProductItemError({ text }: IProps) {
  return (
    <div className="w-full h-full bg-gray-200 border border-gray-400 min-h-40 flex justify-center items-center">
      {text}
    </div>
  )
}

export default ListProductItemError