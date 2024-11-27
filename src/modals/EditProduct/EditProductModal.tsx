import { GoUpload } from "react-icons/go";
import { MdErrorOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

import useEditProductModal from "./EditProductModal.hook";
import { useAppDispatch } from '../../state/store';
import { setEditModal } from '../../state/modals';

import Modal from '../Modal'
import MyInput from '../../components/MyInput';
import MyButton from '../../components/MyButton';
import { placeholderImage } from "../../types/placeholders";



function EditProductModal() {
  const dispatch = useAppDispatch();
  const { onFormSubmit, register, file, imageUrl, isErrors, onInputFileChange } = useEditProductModal();

  const onModalClose = () => {
    dispatch(setEditModal(false))
  }

  return (
    <Modal onModalClose={onModalClose}>
      <div className='flex flex-col gap-3'>
        <h3 className='text-lg font-bold text-center'>Edit product</h3>
        <hr />
        <form onSubmit={onFormSubmit} className='flex flex-col gap-3'>
          <MyInput
            type="text"
            placeholder='Write product name'
            labelText='Title'
            {...register("name", {
              required: { value: true, message: "Product name is required" },
              minLength: { value: 5, message: "Title length should be more than 5 chars" }
            })} />

          <MyInput
            type="number"
            placeholder='Select the quantity'
            labelText='Quantity'
            {...register("count", {
              required: { value: true, message: "Set product quantity" },
              min: { value: 1, message: "Min quantity is 1" }
            })} />

          <MyInput
            type="number"
            placeholder='Set product weight'
            labelText='Weight'
            {...register("weight", {
              required: { value: true, message: "Set product weight" },
              min: { value: 50, message: "Min weight is 50" }
            })} />

          <MyInput
            type="number"
            placeholder='Set product width'
            labelText='Width'
            {...register("size.width", {
              required: { value: true, message: "Set product width" },
              min: { value: 50, message: "Min width is 50" }
            })} />

          <MyInput
            type="number"
            placeholder='Set product height'
            labelText='Height'
            {...register("size.height", {
              required: { value: true, message: "Set product height" },
              min: { value: 50, message: "Min height is 50" }
            })} />

          <label className='h-20 flex justify-center items-center gap-3 border cursor-pointer'>
            <GoUpload />

            <span className='block text-center'>
              {file?.name ? file?.name : 'Update product image'}
            </span>

            {imageUrl && (
              <img
                src={imageUrl}
                className="w-10 h-10 object-cover object-center"
                onError={e => e.currentTarget.src = placeholderImage}
              />
            )}

            <input type="file" className='hidden' onChange={onInputFileChange} />
          </label>

          <hr />

          <div className="flex gap-2">
            <MyButton type='submit' color='primary' className="flex-1">
              <MdOutlineEdit />
              <span>Update</span>
            </MyButton>

            <MyButton type='button' color='outlined' className='flex-1' onClick={onModalClose}>
              <IoMdClose />
              <span>Cancel</span>
            </MyButton>
          </div>

          {isErrors && (
            <div className='px-2 py-3 bg-yellow-100 text-black text-center flex items-center justify-center gap-2'>
              <MdErrorOutline className='mt-[2px]' />
              {isErrors}
            </div>
          )}
        </form>
      </div>
    </Modal>
  )
}

export default EditProductModal