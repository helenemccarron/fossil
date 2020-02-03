import React, {Component} from 'react';

import Book from './book.js';

const DisplayBook = (props) => {

  return (
    <div>
      {
        <Book key={props.book.key} bookData={props.book} pages />
      }
    </div>
  )
}

export default DisplayBook
