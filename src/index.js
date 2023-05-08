import React from 'react'
import ReactDOM from 'react-dom'

// Nested Components, React Tools

function Booklist(){
  return (
    <section>
    <Book />
    </section>
  )
}

function Book(){
  return (
    <>
    <Image />
    <Title />
    <Author />
    </>
  )
}

const Image =() => <img src="https://images-na.ssl-images-amazon.com/images/I/A1q4rOnb89L._UX300__PJku-headphones-v1,TopRight,0,-50_AC_UL600_SR600,400_.jpg" alt="the house at the end of the end of the world" />
const Title =() => <h3>The House at the End of the World</h3>
const Author =() => <p>Dean Koontz</p>




ReactDOM.render(<Booklist />, document.getElementById('root'))