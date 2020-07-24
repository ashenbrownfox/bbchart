import React, { useState } from 'react'

const Search = ({ getQuery }) => {
  const [text, setText] = useState('')

  const onChange = (q) => {
    setText(q)
    getQuery(q)
  }

  return (
    <section className='search'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search characters'
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
         <input type="checkbox" name = "bb"
        value="bb"/>    <label for="bb">Breaking Bad</label>
        <br/>
         <input type="checkbox" name = "bcs"
        value="bcs"/>    <label for="bcs">Better Call Saul</label>
      </form>
    </section>
  )
}

export default Search
