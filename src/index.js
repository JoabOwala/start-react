import React from 'react'
import ReactDOM from 'react-dom'

// JSX Rules
// return single element
// div / section / article or Fragment 
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

function Greeting(){
  return (
    <>
      <h2>Greetings</h2>
      <li>
        <a href="#">Hello There</a>
      </li>
    
    </>
  )
}

ReactDOM.render(<Greeting />, document.getElementById('root'))