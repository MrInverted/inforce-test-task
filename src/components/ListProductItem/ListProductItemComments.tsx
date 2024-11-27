import { IoMdClose } from "react-icons/io";
import { MdErrorOutline } from 'react-icons/md';
import { IoIosAddCircleOutline } from "react-icons/io";

import MyButton from '../MyButton'
import ListProductComment from './ListProductItemCommentSingle';
import useListProductItemComment from './ListProductItemComment.hook';


function ListProductItemComments() {
  const { current, isErrors, onFormSubmit, register } = useListProductItemComment();

  return (
    <div className='flex flex-col gap-2'>

      {current?.comments && current.comments.length > 0 && (
        current.comments.map(el => (
          <ListProductComment text={el.description} date={el.date} id={el.id} key={el.id} />
        ))
      )}

      {(!current?.comments || current.comments.length === 0) && (
        <div className='text-black/50 my-4'>No comments yet, write the first one...</div>
      )}

      <form onSubmit={onFormSubmit} className='flex flex-col gap-2'>
        <textarea
          className='block w-full px-4 py-2 border resize-y min-h-20 max-h-60'
          {...register("comment", {
            required: { value: true, message: "Comment must not be empty" },
            minLength: { value: 5, message: "Comment should be more than 5 chars" }
          })}
        />

        <div className="flex gap-2">
          <MyButton type='submit' color='primary' className="flex-1">
            <IoIosAddCircleOutline />
            <span>Add</span>
          </MyButton>

          <MyButton type='reset' color='outlined' className='flex-1'>
            <IoMdClose />
            <span>Clear</span>
          </MyButton>
        </div>
      </form>

      {isErrors && (
        <div className='px-2 py-3 bg-yellow-100 text-black text-center flex items-center justify-center gap-2'>
          <MdErrorOutline className='mt-[2px]' />
          {isErrors}
        </div>
      )}

    </div>
  )
}

export default ListProductItemComments