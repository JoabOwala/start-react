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
  //adding an event
  //we need an attribute, eventHandler
  //onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e)
    console.log(e.target)
    alert('hello Again')
  }
  const complexExample = () =>{
    console.log(author)
  }
  return (
    <article 
    className='book' 
    onMouseOver={() => {console.log(title)}}>
    <img src={img} alt={title} />
    <h3>{title}</h3>
    <h6>{author}</h6>
    <button type='button' onClick={clickHandler}>refrenceExample</button>
    <button type='button' onClick={complexExample}>complexExample</button>
    </article>
  )
}



ReactDOM.render(<Booklist />, document.getElementById('root'))