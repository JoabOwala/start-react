import React from 'react'
import ReactDOM from 'react-dom'
import Book from './Book'
//CSS
import './index.css'

import {books} from './books'



  function Booklist(){
  return (
    <section className='booklist'>
    {books.map((book) =>{
      return (
        <Book key={book.id} {...book}></Book>
      )
    })}
    </section>
  )
}

ReactDOM.render(<Booklist />, document.getElementById('root'))