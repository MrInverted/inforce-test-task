import { IoIosAddCircleOutline } from "react-icons/io";

import MyButton from "../components/MyButton";
import SortingSelect from "../components/SortingSelect";

import { setAddModal } from "../state/modals";
import { useAppDispatch } from "../state/store"



function Header() {
  const dispatch = useAppDispatch();

  const onOpenAddModalClick = () => {
    dispatch(setAddModal(true))
  }

  return (
    <div className="py-5">
      <div className="flex items-center">
        <div>
          <SortingSelect values={["A-Z", "0-1"]} />
        </div>

        <div className="ml-auto">
          <MyButton color="primary" onClick={onOpenAddModalClick}>
            <IoIosAddCircleOutline />
            <span>Add product</span>
          </MyButton>
        </div>
      </div>
    </div>
  )
}

export default Header