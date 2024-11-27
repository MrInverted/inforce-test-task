import React from 'react';
import { toast } from 'react-hot-toast';
import { SubmitHandler, useForm } from 'react-hook-form'

import { setEditModal } from '../../state/modals';
import { useAppDispatch, useAppSelector } from '../../state/store';
import { fetchProducts, updateProduct } from '../../state/products-async';

type Product = Omit<IProduct, 'id' | 'comments'>;



function useEditProductModal() {
  const dispatch = useAppDispatch();
  const current = useAppSelector(store => store.products.current);
  const [file, setFile] = React.useState<File | null>();
  const { handleSubmit, register, formState, reset, setValue, getValues, trigger } = useForm<Product>({
    mode: "onBlur",
    defaultValues: (current ? { ...current } : {})
  });

  const formHandler: SubmitHandler<Product> = (data) => {
    reset();
    setFile(null);

    dispatch(updateProduct({ id: current!.id, inc: data }))
      .then(() => toast.success("Product was updated"))
      .then(() => dispatch(fetchProducts()))
      .then(() => dispatch(setEditModal(false)))
      .catch(() => toast.error("Error while adding product"));
  }

  const onFormSubmit = handleSubmit(formHandler);

  register("imageUrl", {
    required: { value: true, message: "File is required" }
  });

  const imageUrl = getValues("imageUrl");

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
    imageUrl
  }
}

export default useEditProductModal