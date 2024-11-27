import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin2Line } from "react-icons/ri";
import { MdContentPasteSearch } from "react-icons/md";
import MyButton from '../MyButton';

import { useAppDispatch } from '../../state/store';
import { setCurrent } from '../../state/products';
import { setCardModal, setDeleteModal, setEditModal } from '../../state/modals';

import { placeholderImage } from '../../types/placeholders';



function ListProductItem(props: IProduct) {
  const dispatch = useAppDispatch();

  const onDeleteButtonClick = () => {
    dispatch(setDeleteModal(true));
    dispatch(setCurrent(props));
  }

  const onEditButtonClick = () => {
    dispatch(setEditModal(true));
    dispatch(setCurrent(props));
  }

  const onShowMoreClick = () => {
    dispatch(setCardModal(true));
    dispatch(setCurrent(props));
  }

  return (
    <div className='border border-gray-400'>
      <div className="flex flex-col">

        <div className='w-full aspect-video overflow-hidden'>
          <img
            className='w-full h-full object-cover object-center'
            src={props.imageUrl || placeholderImage}
            alt="product image"
            onError={e => e.currentTarget.src = placeholderImage}
          />
        </div>

        <div className="flex flex-col gap-2 p-3">
          <h2 className='text-lg font-bold'>{props?.name}</h2>

          <hr />

          <ul>
            <li className='flex'>
              <span>Width:</span>
              <span className='ml-auto'>{props?.size?.width} mm</span>
            </li>
            <li className='flex'>
              <span>Height:</span>
              <span className='ml-auto'>{props?.size?.height} mm</span>
            </li>
            <li className='flex'>
              <span>Weight:</span>
              <span className='ml-auto'>{props?.weight} g</span>
            </li>
          </ul>

          <hr />

          <div className='flex'>
            <span>Quantity left:</span>
            <span className='ml-auto'>{props?.count}</span>
          </div>

          <hr />

          <div className="flex">
            <MyButton
              color='primary'
              className='flex-1'
              onClick={onShowMoreClick}
            >
              <MdContentPasteSearch />
              <span>Show more</span>
            </MyButton>
          </div>

          <hr />

          <div className="flex justify-between gap-2">
            <MyButton
              color='primary'
              className='flex-1'
              onClick={onEditButtonClick}
            >
              <MdOutlineEdit />
              <span>Edit</span>
            </MyButton>

            <MyButton
              color='outlined'
              className='flex-1'
              onClick={onDeleteButtonClick}
            >
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