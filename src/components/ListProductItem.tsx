import MyButton from './MyButton';
import { RiDeleteBin2Line } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import { useAppDispatch } from '../state/store';
import { setDeleteModal } from '../state/modals';

function ListProductItem() {
  const dispatch = useAppDispatch();

  const onDeleteButtonClick = () => {
    dispatch(setDeleteModal(true))
  }

  return (
    <div className='border border-gray-400'>
      <div className="flex flex-col">

        <div className='w-full aspect-video'>
          <img
            className='w-full h-full object-cover object-center'
            src="https://cdn.britannica.com/10/241010-049-3EB67AA2.jpg"
            alt="product image"
          />
        </div>

        <div className="flex flex-col gap-2 p-3">
          <h2 className='text-lg font-bold'>Product Name</h2>
          <hr />
          <ul>
            <li className='flex'>
              <span>Width:</span>
              <span className='ml-auto'>200</span>
            </li>
            <li className='flex'>
              <span>Height:</span>
              <span className='ml-auto'>200</span>
            </li>
            <li className='flex'>
              <span>Weight:</span>
              <span className='ml-auto'>200</span>
            </li>
          </ul>
          <hr />
          <div className='flex'>
            <span>Quantity:</span>
            <span className='ml-auto'>10</span>
          </div>
          <hr />
          <div className="flex justify-between gap-2">
            <MyButton color='primary'>
              <MdOutlineEdit />
              <span>Edit</span>
            </MyButton>

            <MyButton color='outlined' onClick={onDeleteButtonClick}>
              <RiDeleteBin2Line />
              <span>Delete</span>
            </MyButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListProductItem