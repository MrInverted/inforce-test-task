import React from 'react'
import cn from "classnames";
import { IoChevronDown } from "react-icons/io5";

import { setSortBy } from '../state/products';
import { useAppDispatch, useAppSelector } from '../state/store';

interface IProps {
  values: string[]
}



function SortingSelect({ values }: IProps) {
  const dispatch = useAppDispatch();
  const sortBy = useAppSelector(store => store.products.sortBy);

  const [isOpened, setIsOpened] = React.useState(false);

  const onToggleClick = () => {
    setIsOpened(prev => !prev);
  }

  const onValueClick = (value: string) => {
    setIsOpened(false);
    dispatch(setSortBy(value));
  }

  React.useEffect(() => {
    dispatch(setSortBy(values[0]));
  }, [])

  return (
    <div className='relative z-10 min-w-40'>
      <div className='px-4 py-2 flex items-center gap-2 border cursor-pointer' onClick={onToggleClick}>
        <div>Sort by <span>{sortBy}</span></div>
        <IoChevronDown className={cn('ml-auto', { 'rotate-180': isOpened })} />
      </div>

      <div className={cn('absolute w-full grid transition-all', (isOpened ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'))}>
        <div className="overflow-hidden min-h-0">
          <ul className='bg-white border border-t-transparent'>
            {values.map(value => (
              <li
                key={value}
                onClick={onValueClick.bind(null, value)}
                className='px-4 py-2 hover:bg-yellow-100 cursor-pointer'
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SortingSelect