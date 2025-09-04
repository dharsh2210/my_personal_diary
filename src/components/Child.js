import React from 'react'
import '../css/style.css'
function Child(props) {
  return (
    <div>
      <h1 className ='para' >Hi {props.name}.You're registered to {props.course} from{props.dept} Department </h1>
      <p style={{color:'red',textAlign:'center'}}>{props.clg} </p>
    </div>
  )
}

export default Child
