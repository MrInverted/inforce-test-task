import React from 'react';
import { fetchProducts } from '../../state/products-async';
import { useAppDispatch, useAppSelector } from '../../state/store';



function useListProducts() {
  const dispatch = useAppDispatch();
  const { products, isLoading, isError, sortBy } = useAppSelector(store => store.products);

  React.useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const sorting = (a: IProduct, b: IProduct) => {
    const aName = a.name.toLowerCase();
    const bName = b.name.toLowerCase();

    if (sortBy === "A-Z") return aName.localeCompare(bName);

    const aQuantity = Number.parseInt(a.count as unknown as string);
    const bQuantity = Number.parseInt(b.count as unknown as string);
    if (sortBy === "0-1") return aQuantity - bQuantity;

    return 0;
  }



  return {
    products, isLoading, isError, sorting
  }
}

export default useListProducts