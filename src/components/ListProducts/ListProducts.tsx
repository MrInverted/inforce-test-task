import { ErrorBoundary } from 'react-error-boundary';

import Spinner from '../Spinner';
import ListProductItem from '../ListProductItem/ListProductItem'
import ListProductItemError from '../ListProductItem/ListProductItemError';
import useListProducts from './ListProducts.hook';



function ListProducts() {
  const { products, isLoading, isError, sorting } = useListProducts()

  if (isLoading) return <Spinner />;

  if (isError) return <div>Error while loading products...</div>

  if (!products || !products?.length) return <div className='bg-gray-50 border border-gray-400 min-h-40 flex justify-center items-center'>No products yet, add a first one...</div>;

  return (
    <>
      <ul className='grid gap-4 grid-cols-1 sm:grid-cols-2'>
        {[...products].sort(sorting).map(el => (
          <li key={el.id}>
            <ErrorBoundary fallback={<ListProductItemError text='Some error' />}>
              <ListProductItem {...el} />
            </ErrorBoundary>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListProducts