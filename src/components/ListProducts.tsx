import ListProductItem from './ListProductItem'

function ListProducts() {
  return (
    <ul className='grid gap-4 grid-cols-1 sm:grid-cols-2'>
      <li>
        <ListProductItem />
      </li>
      <li>
        <ListProductItem />
      </li>
      <li>
        <ListProductItem />
      </li>
    </ul>
  )
}

export default ListProducts