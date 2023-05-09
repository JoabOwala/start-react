import React from 'react'
import ReactDOM from 'react-dom'

//CSS
import './index.css'

const books = [ 
  {
    id:1,
    img: 'https://m.media-amazon.com/images/I/51rvfEAyQwL._SY346_.jpg',
    title: 'The House at the End of the World',
    author: 'Dean Koontz'
  }, 
  {
    id:2,
    img: 'https://m.media-amazon.com/images/I/51H5F5oixaL._SY346_.jpg',
    title: 'Quantum Radio',
    author: 'A.G. Riddle'
  },
  {
    id:3,
    img: 'https://m.media-amazon.com/images/I/412nfVVHybL._SY346_.jpg',
    title: 'Twins (an Ell Donsaii story #17)',
    author: 'Laurence Dahners'
  },
] 

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

function Book({img, title, author}){
  // const {img, title, author} = props
  return (
    <article className='book'>
    <img src={img} alt={title} />
    <h3>{title}</h3>
    <h6>{author}</h6>
    </article>
  )
}



ReactDOM.render(<Booklist />, document.getElementById('root'))