import React from 'react'
import ListProductItem from './ListProductItem'
import { useAppDispatch, useAppSelector } from '../state/store'
import { fetchProducts } from '../state/products';
import Spinner from './Spinner';

function ListProducts() {
  const dispatch = useAppDispatch();
  const { products, isLoading } = useAppSelector(store => store.products);

  React.useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  if (isLoading) return <Spinner />;

  if (!products) return null;

  if (!products.length) return null;

  return (
    <ul className='grid gap-4 grid-cols-1 sm:grid-cols-2'>
      {products.map(el => (
        <li>
          <ListProductItem {...el} key={el.id} />
        </li>
      ))}
    </ul>
  )
}

export default ListProducts