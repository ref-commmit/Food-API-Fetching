import React from 'react'

const SearchBar = ({handleChange, input}) => {
  return (
    <div className="searchbar">
        <input
          type="text"
          onChange={handleChange} value={input}
          size={30}
          style={{ height: "25px", borderRadius: "5px", fontSize: "20px" }}
        ></input>
      </div>

  )
}

export default SearchBar
