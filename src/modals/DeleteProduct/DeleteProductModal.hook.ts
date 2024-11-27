import toast from 'react-hot-toast';
import { setCurrent } from '../../state/products';
import { setDeleteModal } from '../../state/modals';
import { useAppDispatch, useAppSelector } from '../../state/store';
import { deleteProduct, fetchProducts } from '../../state/products-async';



function useDeleteProductModal() {
  const current = useAppSelector(store => store.products.current)
  const dispatch = useAppDispatch();

  const onModalClose = () => {
    dispatch(setDeleteModal(false));
    dispatch(setCurrent({}));
  }

  const onDeleteClick = () => {
    if (!current) return;
    dispatch(deleteProduct(current.id))
      .then(() => toast.success("Product was deleted"))
      .then(() => dispatch(fetchProducts()))
      .then(() => dispatch(setDeleteModal(false)))
      .catch(() => toast.error("Error while adding product"));
  }



  return {
    onModalClose, onDeleteClick
  }
}

export default useDeleteProductModal