import { IoMdClose } from "react-icons/io";
import { RiDeleteBin2Line } from "react-icons/ri";

import Modal from '../Modal';
import MyButton from '../../components/MyButton';
import useDeleteProductModal from './DeleteProductModal.hook';



function DeleteProductModal() {
  const { onModalClose, onDeleteClick } = useDeleteProductModal()

  return (
    <Modal onModalClose={onModalClose} width={'400px'}>
      <div className='flex flex-col gap-5'>
        <h3 className='text-lg font-bold text-center'>Delete Product</h3>
        <div className="flex gap-2">
          <MyButton type='submit' color='primary' className='flex-1' onClick={onDeleteClick}>
            <RiDeleteBin2Line />
            <span>Delete</span>
          </MyButton>

          <MyButton type='button' color='outlined' className='flex-1' onClick={onModalClose}>
            <IoMdClose />
            <span>Cancel</span>
          </MyButton>
        </div>
      </div>
    </Modal>
  )
}

export default DeleteProductModal