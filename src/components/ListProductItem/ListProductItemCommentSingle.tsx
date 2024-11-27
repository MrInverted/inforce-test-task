import { IoMdClose } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "../../state/store";
import toast from "react-hot-toast";
import { deleteComment } from "../../state/comments-async";
import { fetchProducts } from "../../state/products-async";
import { setCurrent } from "../../state/products";

interface IProps {
  text: string;
  date: string;
  id: string;
}



function ListProductItemCommentSingle({ text, date, id }: IProps) {
  const dispatch = useAppDispatch();
  const current = useAppSelector(store => store.products.current);

  const onDeleteClick = () => {
    if (!current) return toast.error("Some error...");

    const inc = { ...current };

    inc.comments = inc.comments.filter(item => item.id !== id);

    dispatch(deleteComment({ id: current.id, inc }))
      .then(() => toast.success("Comment was deleted"))
      .then(() => dispatch(setCurrent(inc)))
      .then(() => dispatch(fetchProducts()))
      .catch(() => toast.error("Error while adding product"));
  }

  return (
    <div className='bg-yellow-200 text-black p-3 relative pb-5'>
      <div>{text}</div>

      <div className="absolute bottom-1 right-2 text-xs">
        <span>{date}</span>
      </div>

      <div className="absolute top-1 right-2 cursor-pointer" onClick={onDeleteClick}>
        <IoMdClose />
      </div>
    </div>
  )
}

export default ListProductItemCommentSingle