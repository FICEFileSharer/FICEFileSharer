import './SearchBar.css'
import React, { useState, useContext } from 'react'
import SearchItem from '../SearchItem/SearchItem'
import { SearchContext } from '../../../contexts/SearchContext'
import searchData from '../../../data/searchData.temp'

const SearchBar = () => {
  const { setSearchQuery } = useContext(SearchContext)
  const [inputValue, setInputValue] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [isActive, setIsActive] = useState(false)

  const handleSearch = (e) => {
    const value = e.target.value
    setInputValue(value)
    setSearchQuery(value)

    if (value) {
      const filteredSuggestions = searchData.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase()),
      )
      setSuggestions(filteredSuggestions)
    } else {
      setSuggestions([])
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
  }

  const handleFocus = () => {
    setIsActive(true)
  }

  const handleBlur = () => {
    setTimeout(() => setIsActive(false), 100)
  }

  return (
    <form
      className='d-flex align-items-center search-size mobile-pb'
      onSubmit={handleFormSubmit}
    >
      <div className='position-relative flex-grow-1'>
        <i className='bi bi-search position-absolute search-icon'></i>

        <input
          className='form-control me-sm-2 ps-6'
          id='search'
          type='search'
          placeholder='Пошук...'
          value={inputValue}
          onChange={handleSearch}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        {isActive && suggestions.length > 0 && (
          <ul className='list-group list-size list-search overflow-y-auto'>
            {suggestions.map((suggestion, index) => (
              <SearchItem key={index} element={suggestion} />
            ))}
          </ul>
        )}
      </div>
    </form>
  )
}

export default SearchBar
