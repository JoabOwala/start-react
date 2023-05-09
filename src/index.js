import React from 'react'
import ReactDOM from 'react-dom'

//CSS
import './index.css'

// Setup vars
const firstBook = {
  img: 'https://m.media-amazon.com/images/I/51rvfEAyQwL._SY346_.jpg',
  title: 'The House at the End of the World',
  author: 'Dean Koontz'
}

const secondBook = {
  img: 'https://m.media-amazon.com/images/I/51H5F5oixaL._SY346_.jpg',
  title: 'Quantum Radio',
  author: 'A.G. Riddle'
}
function Booklist(){
  return (
    <section className='booklist'>
    <Book 
    img={firstBook.img} 
    title={firstBook.title} 
    author={firstBook.author}
    >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, hic illum dolorem sint nobis consectetur est. Suscipit necessitatibus asperiores exercitationem!</p>
    </Book>
    <Book 
    img={secondBook.img} 
    title={secondBook.title} 
    author={secondBook.author}
    />
    </section>
  )
}

function Book(props){
  const {img, title, author, children} = props
  return (
    <article className='book'>
    <img src={img} alt={props.title} />
    <h3>{title}</h3>
    {children}
    <h6>{author}</h6>
    </article>
  )
}



ReactDOM.render(<Booklist />, document.getElementById('root'))