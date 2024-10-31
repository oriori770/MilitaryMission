import React from 'react'


const Search = ({refToValue}:any) => {
    console.log(refToValue)
  return (
    
    <input ref={refToValue} type="text" placeholder='Search'/>
  )
}

export default Search