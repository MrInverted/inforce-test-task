import React from 'react';
import { toast } from 'react-hot-toast';
import { SubmitHandler, useForm } from 'react-hook-form'

import { setAddModal } from '../../state/modals';
import { useAppDispatch } from '../../state/store';
import { createProduct, fetchProducts } from '../../state/products-async';

type Product = Omit<IProduct, 'id' | 'comments'>;



function useAddProductModal() {
  const dispatch = useAppDispatch();
  const [file, setFile] = React.useState<File | null>();
  const { handleSubmit, register, formState, reset, setValue, trigger } = useForm<Product>({
    mode: "onBlur"
  });

  const formHandler: SubmitHandler<Product> = (data) => {
    dispatch(createProduct(data))
      .then(() => toast.success("New product was added"))
      .then(() => dispatch(fetchProducts()))
      .then(() => dispatch(setAddModal(false)))
      .then(() => reset())
      .then(() => setFile(null))
      .catch(() => toast.error("Error while adding product"));
  }

  const onFormSubmit = handleSubmit(formHandler);

  register("imageUrl", {
    required: { value: true, message: "File is required" }
  });

  const onInputFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.item(0);

    if (!file) {
      setFile(null);
      setValue("imageUrl", "");
      trigger("imageUrl");
      return;
    }

    const fileLink = URL.createObjectURL(file);

    setValue("imageUrl", fileLink);
    trigger("imageUrl");
    setFile(file);
  }

  const isErrors = formState.errors.name?.message ||
    formState.errors.count?.message ||
    formState.errors.size?.width?.message ||
    formState.errors.size?.height?.message ||
    formState.errors.weight?.message ||
    formState.errors.imageUrl?.message;



  return {
    onFormSubmit,
    onInputFileChange,
    register,
    isErrors,
    file,
  }
}

export default useAddProductModal;