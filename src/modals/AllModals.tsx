import React from 'react'
import { useAppSelector } from '../state/store';
import AddProductModal from './AddProductModal';
import DeleteProductModal from './DeleteProductModal';

function AllModals() {
  const { isAddModal, isDeleteModal } = useAppSelector(store => store.modals);

  React.useEffect(() => {
    const isSomeModalOpened = isAddModal || isDeleteModal;

    if (isSomeModalOpened) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [isAddModal])

  return (
    <>
      {isAddModal && <AddProductModal />}
      {isDeleteModal && <DeleteProductModal />}
    </>
  )
}

export default AllModals