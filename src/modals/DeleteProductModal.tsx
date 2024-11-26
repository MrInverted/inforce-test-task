import Modal from './Modal'
import MyButton from '../components/MyButton'
import { useAppDispatch } from '../state/store';
import { setDeleteModal } from '../state/modals';

function DeleteProductModal() {
  const dispatch = useAppDispatch();

  const onModalClose = () => {
    dispatch(setDeleteModal(false))
  }

  return (
    <Modal onModalClose={onModalClose}>
      <div className='flex flex-col gap-3'>
        <h3 className='text-lg font-bold text-center'>Delete Product</h3>
        <div className="flex">
          <MyButton type='submit' color='primary'>Confirm</MyButton>
          <MyButton type='button' color='outlined' className='ml-auto' onClick={onModalClose}>Cancel</MyButton>
        </div>
      </div>
    </Modal>
  )
}

export default DeleteProductModal