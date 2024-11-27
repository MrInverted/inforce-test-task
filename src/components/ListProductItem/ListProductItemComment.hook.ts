import toast from 'react-hot-toast';
import { nanoid } from 'nanoid';
import { SubmitHandler, useForm } from 'react-hook-form';

import { createComment } from '../../state/comments-async';
import { fetchProducts } from '../../state/products-async';
import { setCurrent } from '../../state/products';
import { useAppDispatch, useAppSelector } from '../../state/store';

interface IForm {
  comment: string;
}



function useListProductItemComment() {
  const dispatch = useAppDispatch();
  const current = useAppSelector(store => store.products.current);
  const { handleSubmit, register, reset, formState } = useForm<IForm>({
    mode: 'onBlur'
  });

  const handleForm: SubmitHandler<IForm> = (e) => {
    if (!current) return toast.error("Some error...");

    const comment: IComment = {
      productId: current.id,
      id: nanoid(),
      date: (new Date()).toLocaleString(),
      description: e.comment
    }

    const inc: IProduct = {
      ...current,
      comments: [
        ...(current.comments || []),
        comment
      ]
    }

    dispatch(createComment({ id: current.id, inc }))
      .then(() => toast.success("New comment was added"))
      .then(() => dispatch(setCurrent(inc)))
      .then(() => dispatch(fetchProducts()))
      .then(() => reset())
      .catch(() => toast.error("Error while adding product"));
  }

  const onFormSubmit = handleSubmit(handleForm);

  const isErrors = formState.errors.comment?.message;



  return {
    current,
    onFormSubmit,
    isErrors,
    register
  }
}

export default useListProductItemComment