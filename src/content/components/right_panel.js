import React, {Component} from 'react';

import Book from './book.js';

const DisplayBook = (props) => {
  return (
    <div>
      {
        <Book key={props.book.key} data={props.book} />
      }
    </div>
  )
}

export default DisplayBook
