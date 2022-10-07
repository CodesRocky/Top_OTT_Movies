import React from 'react'
import './ott.css'


 function Ottlogic(props) {
  return (
    <div className='box'>
        <img className='imgbox' src={props.img} alt='random'/>
        <div className='downbox'>
        <h4>{props.from}</h4>
        <h3>{props.name}</h3>
        <a href={props.link} target='Open_in_new_tab'>Watch Now</a>
        </div>
    </div>
  )
}
export default Ottlogic;