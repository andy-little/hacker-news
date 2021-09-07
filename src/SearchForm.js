import React from 'react'
import { useGlobalContext } from './context'
import {AiOutlineSearch} from 'react-icons/ai'
import {RiCloseLine} from 'react-icons/ri'

const SearchForm = () => {
  const{query, handleSearch, clearSearch} = useGlobalContext();
  return <form className="search-form main-title" onSubmit={e => e.preventDefault()}>
    <h2 className="search-title"><span className="colour-b">H</span><span className="colour-r">a</span><span className="colour-y">c</span><span className="colour-b">k</span><span className="colour-g">e</span><span className="colour-r">r</span> <span className="colour-b"> N</span><span className="colour-r">e</span><span className="colour-y">w</span><span className="colour-g">s</span></h2>
    <div className="input-container">
      <input type="text" placeholder="Search for Hacker News" value={query} onChange={e => handleSearch(e.target.value)} className="form-input" />
      {query && <RiCloseLine className='close-icon' onClick={clearSearch}/>}
      {query && <span className='divide'> | </span>}

      <AiOutlineSearch className='search-icon'/>
    </div>
  </form>
}

export default SearchForm
