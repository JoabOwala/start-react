import React from 'react'
import ReactDOM from 'react-dom'

//CSS
import './index.css'

// Setup vars
const author = 'Dean Koontz'
const title = 'The House at the End of the World'
const img = 'https://m.media-amazon.com/images/I/51rvfEAyQwL._SY346_.jpg'

function Booklist(){
  return (
    <section className='booklist'>
    <Book />
    </section>
  )
}
function Book(){

  return (
    <article className='book'>
    <img src={img} alt={title} />
    <h3>{title}</h3>
    <h6>{author.toUpperCase()}</h6>
    <p>{6+6}</p>
    </article>
  )
}



ReactDOM.render(<Booklist />, document.getElementById('root'))