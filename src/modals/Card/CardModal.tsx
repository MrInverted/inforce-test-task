import { useAppDispatch, useAppSelector } from '../../state/store';
import { setCardModal } from '../../state/modals';
import Modal from '../Modal';
import { placeholderImage } from '../../types/placeholders';
import ListProductItemComments from '../../components/ListProductItem/ListProductItemComments';
import { ErrorBoundary } from 'react-error-boundary';
import ListProductItemError from '../../components/ListProductItem/ListProductItemError';

function CardModal() {
  const dispatch = useAppDispatch();
  const current = useAppSelector(store => store.products.current);

  const onModalClose = () => {
    dispatch(setCardModal(false))
  }

  return (
    <Modal onModalClose={onModalClose}>
      <div className="flex flex-col gap-3">

        <div className='w-full aspect-video overflow-hidden'>
          <img
            className='w-full h-full object-cover object-center'
            src={current?.imageUrl || placeholderImage}
            alt="product image"
            onError={e => e.currentTarget.src = placeholderImage}
          />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className='text-lg font-bold'>{current?.name}</h2>
          <hr />
          <ul>
            <li className='flex'>
              <span>Width:</span>
              <span className='ml-auto'>{current?.size?.width} mm</span>
            </li>
            <li className='flex'>
              <span>Height:</span>
              <span className='ml-auto'>{current?.size?.height} mm</span>
            </li>
            <li className='flex'>
              <span>Weight:</span>
              <span className='ml-auto'>{current?.weight} g</span>
            </li>
          </ul>
          <hr />
          <div className='flex'>
            <span>Quantity left:</span>
            <span className='ml-auto'>{current?.count}</span>
          </div>
          <hr />
        </div>

        <ErrorBoundary fallback={<ListProductItemError text='Some comments error...' />}>
          <ListProductItemComments />
        </ErrorBoundary>
      </div>
    </Modal>
  )
}

export default CardModal