import React from 'react'
import ReactDOM from 'react-dom'

//CSS
import './index.css'

// Nested Components, React Tools

function Booklist(){
  return (
    <section className='booklist'>
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    </section>
  )
}

function Book(){
  return (
    <article className='book'>
    <Image />
    <Title />
    <Author />
    </article>
  )
}

const Image =() => <img src="https://m.media-amazon.com/images/I/51rvfEAyQwL._SY346_.jpg" alt="the house at the end of the end of the world" />
const Title =() => <h3>The House at the End of the World</h3>
const Author =() => <h6 style={{color:'#617d98',fontSize:'0.75rem',marginTop:'0.25rem'}}>Dean Koontz</h6>




ReactDOM.render(<Booklist />, document.getElementById('root'))