import React from 'react';
import { toast } from 'react-hot-toast';
import { SubmitHandler, useForm } from 'react-hook-form'

import { setAddModal } from '../state/modals';
import { useAppDispatch } from '../state/store';
import { createProduct, fetchProducts } from '../state/products';

type Product = Omit<IProduct, 'id' | 'comments' | 'imageUrl'> & { file: string };

function useAddProductModal() {
  const dispatch = useAppDispatch();
  const [file, setFile] = React.useState<File | null>();
  const { handleSubmit, register, formState, reset, setValue, trigger } = useForm<Product>({
    mode: "onChange"
  });

  const formHandler: SubmitHandler<Product> = (data) => {
    reset();
    setFile(null);

    dispatch(createProduct(data))
      .then(() => toast.success("New product was added"))
      .then(() => dispatch(fetchProducts()))
      .then(() => dispatch(setAddModal(false)))
      .catch(() => toast.error("Error while adding product"));
  }

  const onFormSubmit = handleSubmit(formHandler);

  register("file", {
    required: { value: true, message: "File is required" }
  });

  const onInputFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.item(0);

    if (!file) {
      setFile(null);
      setValue("file", "");
      trigger("file");
      return;
    }

    const fileLink = URL.createObjectURL(file);

    setValue("file", fileLink);
    trigger("file");
    setFile(file);
  }

  const isErrors = formState.errors.name?.message ||
    formState.errors.count?.message ||
    formState.errors.size?.width?.message ||
    formState.errors.size?.height?.message ||
    formState.errors.weight?.message ||
    formState.errors.file?.message;



  return {
    onFormSubmit,
    onInputFileChange,
    register,
    isErrors,
    file,
  }
}

export default useAddProductModal;