import React from 'react'
import ReactDOM from 'react-dom'

// Nested Components, React Tools

function Greeting(){
  return (
    <>
    <Person />
    <Message /> 
    </>
  )
}

const Person = () => <h2>Jane Doe</h2>
const Message = () => <p>This is the message</p>

ReactDOM.render(<Greeting />, document.getElementById('root'))