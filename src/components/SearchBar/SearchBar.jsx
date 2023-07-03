import React, { useState, useContext } from 'react';
import { BsSearch } from 'react-icons/bs'
import './SearchBar.css'
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';

function SearchBar() {
    
    const { setProducts, setLoading } = useContext(AppContext)
    const [ searchValue, setSearchValue ] = useState('')

    const handleSearch = async (e) => {
        e.preventDefault()
        setLoading(true)

        const searchProducts = await fetchProducts(searchValue)
        
        setProducts(searchProducts)
        setLoading(false)
        setSearchValue('')
    }

    return ( 
        
        <form className='search-bar' onSubmit={handleSearch}>
            {/* {name} */}
            <input 
                type="search" 
                value={searchValue}
                placeholder='buscar produtos' className="search__input"
                onChange={ ({ target }) => setSearchValue(target.value) }
                required>
            </input>
            
            <button type="submit" className="search__button">
                <BsSearch />
            </button>
        
        </form>
     
    );
}

export default SearchBar;
