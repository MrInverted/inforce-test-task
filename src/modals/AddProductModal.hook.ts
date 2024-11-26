import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form'

type Product = Omit<IProduct, 'id' | 'comments' | 'imageUrl'> & { file: boolean };

function useAddProductModal() {
  const [file, setFile] = React.useState<File | null>()
  const { handleSubmit, register, formState, reset, setValue, trigger } = useForm<Product>({
    mode: "onChange",
    defaultValues: {
      name: "",
      count: 0,
      weight: 0,
      size: {
        width: 0,
        height: 0
      }
    }
  });

  const formHandler: SubmitHandler<Product> = (e) => {
    console.log(e);

    reset();
  }

  const onFormSubmit = handleSubmit(formHandler);

  const _fileTrigger = register("file", {
    required: { value: true, message: "File is required" }
  })

  const onInputFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.item(0);

    if (!file) {
      setFile(null);
      setValue("file", false);
      trigger("file");
      return;
    }

    setValue("file", true);
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