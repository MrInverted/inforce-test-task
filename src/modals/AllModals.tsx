import React from 'react'
import { useAppSelector } from '../state/store';

import CardModal from './Card/CardModal';
import AddProductModal from './AddProduct/AddProductModal';
import EditProductModal from './EditProduct/EditProductModal';
import DeleteProductModal from './DeleteProduct/DeleteProductModal';



function AllModals() {
  const { isAddModal, isDeleteModal, isEditModal, isCardModal } = useAppSelector(store => store.modals);

  React.useEffect(() => {
    const isSomeModalOpened = isAddModal || isEditModal || isDeleteModal || isCardModal;

    document.body.style.overflow = isSomeModalOpened ? "hidden" : "";
  }, [isAddModal, isDeleteModal, isEditModal, isCardModal]);

  return (
    <>
      {isCardModal && <CardModal />}
      {isAddModal && <AddProductModal />}
      {isEditModal && <EditProductModal />}
      {isDeleteModal && <DeleteProductModal />}
    </>
  )
}

export default AllModals