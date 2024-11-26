import Modal from './Modal';
import MyButton from '../components/MyButton';
import useDeleteProductModal from './DeleteProductModal.hook';

function DeleteProductModal() {
  const { onModalClose, onDeleteClick } = useDeleteProductModal()

  return (
    <Modal onModalClose={onModalClose} width={'400px'}>
      <div className='flex flex-col gap-5'>
        <h3 className='text-lg font-bold text-center'>Delete Product</h3>
        <div className="flex">
          <MyButton type='submit' color='primary' onClick={onDeleteClick}>Confirm</MyButton>
          <MyButton type='button' color='outlined' className='ml-auto' onClick={onModalClose}>Cancel</MyButton>
        </div>
      </div>
    </Modal>
  )
}

export default DeleteProductModal