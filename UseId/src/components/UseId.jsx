import React from 'react'
import { useId } from 'react';

const UseId = () => {
    let id =useId();
  return (
    <>
      <form>
        <label htmlFor={id}>Name</label>
        <input type='text' id={id}/>
      </form>
    </>
  )
}

export default UseId;