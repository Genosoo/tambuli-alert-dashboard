import { BsSearch } from 'react-icons/bs'

export default function Search() {
  return (
    <div className='navbarSearchContainer'>
        <input type="search" placeholder='Search something here...' />
        <BsSearch />
    </div>
  )
}
