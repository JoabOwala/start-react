import React from 'react'

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


export default Book